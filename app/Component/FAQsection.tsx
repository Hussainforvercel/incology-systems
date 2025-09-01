
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What types of processes can you automate?",
    answer:
      "We specialize in automating repetitive workflows across operations, marketing, sales, and customer support using AI and custom logic.",
  },
  {
    question: "Do I need technical knowledge to use your service?",
    answer:
      "No, our platform is designed to be user-friendly and requires little to no technical expertise.",
  },
  {
    question: "Can you integrate with our existing tools?",
    answer:
      "Yes, we can integrate seamlessly with most popular tools and platforms you already use.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Implementation typically takes just a few days depending on your specific requirements.",
  },
  {
    question: "Is your AI secure and compliant?",
    answer:
      "Yes, we follow industry best practices for security and compliance.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#04070D] text-white py-16 px-6 ">
      {/* Section Centered */}
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-white bg-black px-4 py-1.5 rounded-full border border-neutral-700 shadow-md shadow-black/40 mb-6">
            <span className="text-green-400"></span> FAQS
          </div>
          <h2 className="text-3xl font-bold">
            Frequently Asked <span className="italic">Questions</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Find quick answers to the most common support questions
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid md:grid-cols-[1fr_2fr] gap-8">
          {/* Left Box FIXED HEIGHT */}
          <div className="bg-[#04070D] border border-gray-800 rounded-2xl shadow-lg 
                          flex flex-col items-center justify-center text-center 
                          p-6 h-[290px]">
            <div className="w-12 h-12 flex items-center border border-gray-800 justify-center rounded-md bg-[#04070D] mb-4">
              <span className="text-2xl">?</span>
            </div>
            <h3 className="text-lg font-semibold">Still Have Questions?</h3>
            <p className="text-gray-400 mt-2 px-4">
              Still have questions? Feel free to get in touch with us today!
            </p>
            <button className="mt-4 px-5 py-2 rounded-lg bg-[##11141C] transition cursor-pointer">
              ↗ Ask A Question
            </button>
          </div>

          {/* Right FAQ Dropdown */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-800 rounded-xl bg-[#04070D] overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center justify-between w-full px-5 py-4 text-left cursor-pointer hover:bg-gray-800/60 transition"
                >
                  <span className="font-medium">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-4 text-gray-400"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* White Shadow Separation */}
      <div className="absolute -bottom-3 left-0 w-full ">
        {/* thin line */}
        <div className="relative w-full h-px bg-white/10">
          {/* glow on top of line */}
          <div className="absolute inset-x-0 bottom-0 h-8 pb-2
            bg-gradient-to-t from-white/10 to-transparent pointer-events-none">
          </div>
        </div>
      </div>
    </section>
  );
}
