"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, User, CheckCircle, Repeat, Sparkles, Heart, Star, ShoppingCart, } from "lucide-react";

const tasks = [
    { text: "Social media post", status: "done" },
    { text: "Employee Tracking", status: "progress" },
    { text: "Payment reminder", status: "done" },
    { text: "Cost Management", status: "progress" },
    { text: "Daily Report", status: "done" },
];

const features = [
    {
        id: 1,
        title: "Automate repetitive tasks",
        desc: "We help you streamline internal operations by automating manual workflows",
        icons: [],
    },
    {
        id: 2,
        title: "Automated Workflows",
        desc: "Boost efficiency across teams with smart automation. Build intelligent workflows that automate multi-step processes across tools and platforms.",
        icons: [
            { icon: <Mail />, top: "15%", left: "24%" },
            { icon: <User />, top: "10%", left: "63%" },
            { icon: <CheckCircle />, top: "20%", left: "83%" },
            { icon: <Repeat />, top: "50%", left: "70%" },
            { icon: <ShoppingCart />, top: "50%", left: "30%" },
            { icon: <Heart />, top: "45%", left: "8%" },
            { icon: <Star />, top: "15%", left: "8%" },
        ],
    },
];

const Section8 = () => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 2) % tasks.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid md:grid-cols-[0.7fr_1.5fr] gap-6 p-10 border-t-2 border-gray-700 from-gray-700/50 to-black bg-black min-h-[80vh] text-white">

            {/* LEFT CARD */}
            <div className="rounded-2xl border border-t-3 bg-[#04070D] border-gray-800 bg-balck p-6 shadow-xl h-[400px] flex flex-col justify-between overflow-hidden">
                <div className="relative mt-5 h-[220px] overflow-hidden">
                    <motion.div
                        className="absolute w-[100%]"
                        animate={{ y: -active * 55 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    >
                        {tasks.concat(tasks).map((task, i) => {
                            const isActive = i % tasks.length === active;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{
                                        scale: isActive ? 1.01 : .9,
                                        opacity: isActive ? 9 : 1.3,
                                    }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className={`w[95%]   items-center border-t-2 border border-gray-800 justify-between rounded-lg px-4 py-4 mx-2 my-3`}>
                                    <span
                                        className={`text-base flex justify-between item-center  gap-2 ${isActive ? "text-white" : "blur text-white-600 "
                                            }`}
                                    >
                                        <div className="flex gap-2">
                                            <User className="w-5 h-5 " />  {task.text}</div>

                                        {task.status === "done" ? <CheckCircle /> : <Repeat />}
                                    </span>

                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                <div className="mt-4">
                    <h3 className="text-lg font-semibold">Automate repetitive tasks</h3>
                    <p className="mt-1 text-sm text-zinc-400">
                        We help you streamline internal operations by automating manual workflows
                    </p>
                </div>
            </div>

            {/* RIGHT CARD */}
            <div className="relative bg-[#04070D] border-t-3 border border-[#2C333D] rounded-2xl p-6 shadow-lg overflow-hidden flex items-end justify-center">
                {features[1].icons.length > 0 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            transition={{ duration: 2, repeat: Infinity }}
                            className="z-20 flex h-30 w-30 items-center justify-center border-t-2 border-gray-800 me-8 mb-35 rounded-full bg-black shadow-[0px_7px_15px_rgba(265,265,265,0.25)]">
                            <Sparkles size={40} className="text-white" />
                        </motion.div>

                        {features[1].icons.map((item, i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-xl bg-[#10131C] p-3 shadow-lg border-2 border-gray-900"
                                animate={{
                                    scale: [0.9, 1.25, 0.9],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    delay: i * 0.5,
                                }}
                                style={{
                                    top: item.top,
                                    left: item.left,
                                }}
                            >
                                {item.icon}
                            </motion.div>
                        ))}
                    </div>
                )}

                <div className="relative z-20 text-start">
                    <h2 className="text-xl font-bold mt-5">{features[1].title}</h2>
                    <p className="text-gray-400">{features[1].desc}</p>
                </div>
            </div>
        </div>
    );
};

export default Section8;
