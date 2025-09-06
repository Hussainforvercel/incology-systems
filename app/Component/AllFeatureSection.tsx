"use client";

import React, { useRef } from "react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";

const AllFeatureSection: React.FC = () => {
  const cards = [...Array(6)];

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  const child: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <section className="relative bg-black bg-gradient-to-t from-gray-700/30 to-black w-full border-b-2 border-gray-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={child}
          className="inline-block px-4 py-1 rounded-full border border-gray-700 text-xs uppercase tracking-wide text-gray-300 mb-6"
        >
          <i className="fa-solid fa-star g-2 text-grey-400 me-2"></i> FEATURES
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial="hidden"
          animate={controls}
          variants={child}
          className="text-3xl sm:text-5xl font-bold mb-4"
        >
          All features in <span className="italic font-serif text-gray-200">one place</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial="hidden"
          animate={controls}
          variants={child}
          className="text-gray-400 max-w-2xl mx-auto mb-14"
        >
          Everything you need to automate operations, boost productivity
        </motion.p>

        {/* Cards */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={container}
          className="flex flex-wrap justify-center gap-8 mb-7"
        >
          {cards.map((_, idx) => (
            <motion.div
              key={idx}
              variants={child}
              className="flex flex-col w-full sm:w-[48%] md:w-[31%] p-8 rounded-2xl border border-t-3 border-gray-800 border-b-gray-900"
            >
              <div className="flex pt-8 pb-15 rounded-2xl border border-t-2 bg-gradient-to-bl from-gray-700/30 to-black border-gray-900 justify-center mb-6">
                <div className="flex items-center bg-[#12151E] gap-5 p-4 mt-4 rounded-xl border border-t-2 border-gray-800">
                  <i className="fa-solid fa-diagram-project text-3xl text-gray-400"></i>
                  <i className="fa-solid fa-diagram-project text-3xl text-gray-400"></i>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3">Feature Title</h3>
              <p className="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AllFeatureSection;
