"use client";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const child: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Section2: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const lines = [
    <>We find what to <span className="italic font-serif text-white">automate</span>, who your users are & how </>,
    <>AI can optimize your <span className="italic font-serif text-white">workflow</span>. Best part is we also</>,
    <>build and launch <span className="italic font-serif text-white">real solutions."</span></>,
  ];

  return (
    <section ref={ref} className="relative border-t-2 border-b-2 border-gray-700 w-full bg-gradient-to-b from-black via-[#111215] to-gray-900 text-white py-20">
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
        ))}
      </motion.div>
    </section>
  );
};

export default Section2;
