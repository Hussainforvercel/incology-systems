"use client";
import React from "react";
import { Marquee } from "@/components/ui/marquee";

const TestimonialSection = () => {
  const logos = [
    "logo1.svg",
    "logo2.svg",
    "logo3.svg",
    "logo4.png",
    "logo5.png",
    "logo6.webp",
    "logo7.svg",
    "logo8.png",
    "logo9.png",
    "logo10.png",
  ];

  return (
<<<<<<< HEAD
    <div className="relative pt-10 pb-10 flex w-full flex-col items-center justify-center overflow-hidden">
      {/* Marquee with uniform gap */}
      <Marquee pauseOnHover className="[--duration:20s] flex gap-16">
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className="flex items-center p-0 m-0 justify-center w-38 h-20" 
          >
            <img
              src={logo}
              alt={`Logo ${idx + 1}`}
              className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
=======
    <section ref={ref} className="relative border-t-1 border-gray-800  w-full text-white py-20 bg-[#04070D]">
      
      <motion.div
        variants={container}
        initial="hidden"
        animate={controls}
        className="max-w-4xl mx-auto flex flex-col items-center text-center px-6"
      >
        {/* Badge */}
        <motion.div variants={child} className="flex items-center gap-2 px-4 py-2 border border-gray-900 rounded-full text-xs uppercase tracking-wide text-gray-300 mb-6">
          <i className="fa-solid fa-star text-grey-400"></i>
          WE ANALYZE YOUR DATA
        </motion.div>

        {/* Profile */}
        <motion.div variants={child} className="flex items-center gap-3 mb-6">
          <img
            src="https://framerusercontent.com/images/W7xYkGKzPzvnPv58ZBNzxS3JZI.jpg?width=4000&height=4000"
            alt="Co-founder"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-gray-200 text-sm">
            <strong>Co-founder</strong> & AI Strategy Lead
          </span>
        </motion.div>

        {/* Quote lines */}
        {lines.map((line, idx) => (
          <motion.p key={idx} variants={child} className="text-2xl sm:text-3xl text-gray-600 leading-relaxed">
            {line}
          </motion.p>
>>>>>>> ae812c919de218668ac6aaa9eaa86d1974080e8f
        ))}
      </Marquee>

      {/* Bottom subtle line */}
      <div className="absolute -bottom-2 left-0 w-full mb-3">
        <div className="relative w-full h-px bg-white/10">
          <div className="absolute inset-x-0 bottom-0 h-8 pb-2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
