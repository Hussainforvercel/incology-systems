"use client";
import React from "react";
import { motion } from "framer-motion";

const Slider = () => {
  return (
    <section className="relative h-[130vh] w-full overflow-hidden">
      {/* Background video */}
      <video
        className="absolute filter grayscale brightness-50 inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/fallback.jpg"
      >
        <source src="backgroundVideo.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50" />

      {/* Center content with zoom animation */}
      <motion.div
        className="relative z-10 flex h-full items-center justify-center px-4"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }} // triggers when 30% of the element is visible
      >
        <div className="text-white text-center flex flex-col items-center gap-6">
          {/* Button */}
          <button className="relative border flex gap-2 justify-center px-5 py-3 rounded-xl bg-black border-gray-700 overflow-hidden">
            BOOK A FREE CALL
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#FFFFFF"
              >
                <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
              </svg>
            </i>
            <span
              className="absolute bottom-0 left-0 w-full h-[3px] 
                   bg-gradient-to-r from-transparent via-white to-transparent 
                   opacity-90"
            ></span>
          </button>

          {/* Text */}
          <p className="text-xs">NEW GEN AI AUTOMATION PARTNER</p>
          <h1 className="text-4xl sm:text-7xl font-bold leading-tight">
            Automate Smarter. Grow <br /> Faster. <em>With AI.</em>
          </h1>
          <p className="max-w-xl text-sm sm:text-base text-gray-200">
            AI Automation for Modern Businesses Made Simple
          </p>

          {/* Icons */}
          <div className="flex justify-center items-center gap-4 text-gray-400 text-2xl">
            <i className="fa-brands fa-x-twitter"></i>
            <span className="text-gray-500">|</span>
            <i className="fa-brands fa-instagram"></i>
            <span className="text-gray-500">|</span>
            <i className="fa-brands fa-facebook-f"></i>
          </div>

          {/* Down arrow + GitHub */}
          <div className="flex flex-col mt-6 items-center gap-4">
            <a href="#next-section" className="animate-bounce">
              <i className="fa-solid fa-angle-down text-2xl"></i>
            </a>
            <i className="fa-brands fa-github text-5xl hover:text-gray-400 transition"></i>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Slider;
