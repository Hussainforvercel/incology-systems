"use client";
import React from 'react'
import { motion } from "framer-motion";
import { Libre_Baskerville } from "next/font/google";
import { CheckCircle } from "lucide-react";

const libreBaskerville = Libre_Baskerville({
    weight: ["400", "700"],
    subsets: ["latin"],
});

const BlockchainSolutions = () => {
    return (
        <>
            <section className="relative w-full h-[70vh] flex items-center justify-center">
                {/* Background Image with grayscale */}
                <div className="absolute inset-0">
                    <img
                        src="https://i.makeagif.com/media/12-04-2018/IxHq7M.gif"
                        alt="Background"
                        className="w-full h-full object-cover blur-sm"
                    />
                    {/* Dark overlay for readability */}
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Text Content */}
                <motion.div
                    className="relative z-10 max-w-3xl px-6 text-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white drop-shadow-lg" style={{ fontFamily: "Valty DEMO" }}
                    >
                        Blockchain Solutions
                    </h1>
                    <p className={`mt-4 text-md font-bold tracking-wide text-gray-200 ${libreBaskerville.className} `}>
                        Blockchain is no longer the future—it’s here today. Incology Systems helps businesses explore
                        blockchain to create transparency, security, and new business models.
                    </p>
                </motion.div>
            </section>

            {/* Slider close */}

            {/* Service start */}

            <section className="relative py-16 text-white">
                <div className="max-w-6xl mx-auto px-6 gap-10 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col pb-10 justify-center items-center ">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ fontFamily: "Valty DEMO" }}>
                            Services We Provide
                        </h2>
                        <p className="text-gray-300 text-center ">

                            From startups exploring Web3 to enterprises experimenting with blockchain, we provide end
                            to-end support.
                        </p>
                    </div>

                    {/* Right List */}
                    <ul className=" relative space-y-6">
                        <li className="border border-t-3 rounded-xl px-4 py-4 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black  hover:scale-[1.02] transition duration-300 flex items-start gap-3">
                            <CheckCircle className="text-green-500 w-8 h-8 " />
                            <p className="text-md"><span className="font-bold text-xl tracking-wide" style={{ fontFamily: "Valty DEMO" }}>  Smart Contracts:</span> <br /> Automating processes with secure, verifiable agreements.  </p>
                        </li>
                        <li className="border border-t-3 rounded-xl px-4 py-4 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black  hover:scale-[1.02] transition duration-300 flex items-start gap-3">
                            <CheckCircle className="text-green-500 w-8 h-8 " />
                            <p className="text-md"><span className="font-bold text-xl tracking-wide" style={{ fontFamily: "Valty DEMO" }}> Decentralized Applications (dApps):</span> <br /> Custom blockchain-powered apps tailored to your industry</p>
                        </li>
                        <li className="border border-t-3 rounded-xl px-4 py-4 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black  hover:scale-[1.02] transition duration-300 flex items-start gap-3">
                            <CheckCircle className="text-green-500 w-8 h-8 " />
                            <p className="text-md"><span className="font-bold text-xl tracking-wide" style={{ fontFamily: "Valty DEMO" }}> Tokenization:</span> <br /> Launching digital assets, utility tokens, and NFT platforms. </p>
                        </li>
                        <li className="border border-t-3 mb-15 rounded-xl px-4 py-4 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black  hover:scale-[1.02] transition duration-300 flex items-start gap-3">
                            <CheckCircle className="text-green-500 w-8 h-8 " />
                            <p className="text-md"><span className="font-bold text-xl tracking-wide" style={{ fontFamily: "Valty DEMO" }}>  Blockchain Payments:</span> <br /> Secure wallet integrations and decentralized payment solutions.</p>
                        </li>
                    </ul>
                </div>

                <div className="absolute -bottom-2 left-0 w-full mb-3">
                    <div className="relative w-full h-px bg-white/10">
                        <div className="absolute inset-x-0 bottom-0 h-8 pb-2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlockchainSolutions