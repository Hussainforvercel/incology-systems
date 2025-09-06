"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import {
  Mail,
  User,
  CheckCircle,
  Repeat,
  Sparkles,
  Heart,
  Star,
  ShoppingCart,
} from "lucide-react";

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

const ServiceSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 2) % tasks.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // scroll refs
  const leftCardRef = useRef<HTMLDivElement | null>(null);
  const rightCardRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const textControls = useAnimation();

  const leftInView = useInView(leftCardRef, { once: true });
  const rightInView = useInView(rightCardRef, { once: true });
  const textInView = useInView(textRef, { once: true });

  useEffect(() => {
    if (leftInView) leftControls.start("visible");
    if (rightInView) rightControls.start("visible");
    if (textInView) textControls.start("visible");
  }, [leftInView, rightInView, textInView, leftControls, rightControls, textControls]);

  // Variants
  const cardVariant: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const textContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, 
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <div className=" border-t-2 border-gray-800 pt-8 px-4 bg-black text-white text-center">
        {/* TEXT SECTION */}
        <motion.div
          ref={textRef}
          initial="hidden"
          animate={textControls}
          variants={textContainer}
          className="flex flex-col items-center"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs uppercase tracking-widest border-1 border-gray-900 px-3 py-1 rounded-full text-gray-300"
          >
            <i className="fa-solid fa-star g-2 text-grey-400 me-2"></i> SERVICES
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold mt-4"
          >
            Smarter Services,{" "}
            <span className="italic text-gray-300">Built with AI</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-400 mt-3 text-sm md:text-base"
          >
            Everything you need to automate operations, boost productivity
          </motion.p>
        </motion.div>

        {/* CARDS GRID */}
        <div className="grid lg:grid-cols-[0.7fr_1.5fr] gap-6 p-6 lg:p-10  bg-black min-h-[80vh] text-white">
          {/* LEFT CARD */}
          <motion.div
            ref={leftCardRef}
            variants={cardVariant}
            initial="hidden"
            animate={leftControls}
            className="rounded-2xl border border-t-3 bg-[#04070D] border-gray-800 p-6 shadow-xl h-[400px] flex flex-col justify-between overflow-hidden"
          >
            <div className="relative mt-5 h-[220px] overflow-hidden">
              <motion.div
                className="absolute w-full"
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
                        scale: isActive ? 1.01 : 0.9,
                        opacity: isActive ? 0.9 : 0.3,
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="w-[95%] flex items-center justify-between border-t-2 border-gray-800 rounded-lg px-4 py-4 mx-2 my-3"
                    >
                      <div className="flex gap-2 items-center">
                        <User className="w-5 h-5" />
                        {task.text}
                      </div>
                      {task.status === "done" ? <CheckCircle /> : <Repeat />}
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
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            ref={rightCardRef}
            variants={cardVariant}
            initial="hidden"
            animate={rightControls}
            className="relative bg-[#04070D] border-t-3 border border-[#2C333D] rounded-2xl p-6 shadow-lg overflow-hidden flex flex-col lg:flex-row items-start lg:items-end justify-center h-[500px] lg:h-[400px]"
          >
            {features[1].icons.length > 0 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  transition={{ duration: 2, repeat: Infinity }}
                  className="z-20 mb-25 flex h-30 w-30 items-center justify-center border-t-2 border-gray-800 rounded-full bg-black shadow-[0px_7px_15px_rgba(265,265,265,0.25)]"
                >
                  <Sparkles size={40} className="text-white" />
                </motion.div>

                {features[1].icons.map((item, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-xl bg-[#10131C] p-3 shadow-lg border-2 border-gray-900"
                    animate={{ scale: [0.9, 1.25, 0.9], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                    style={{ top: item.top, left: item.left }}
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </div>
            )}

            <div className="relative z-20 text-start mt-76 lg:mt-0 lg:ml-6">
              <h2 className="text-xl font-bold">{features[1].title}</h2>
              <p className="text-gray-400 mt-2">{features[1].desc}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
