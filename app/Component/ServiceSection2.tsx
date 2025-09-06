"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Sparkles } from "lucide-react";

const codeLines = [
  "class AutomationAgent:",
  "  def __init__(self, activation_limit):",
  "    self.activation_limit = activation_limit",
  "    self.current_mode = 'idle'",
  "    def evaluate_task(self): pass",
  "",
  "# More sample code...",
  "for i in range(5):",
  "    print('Processing task', i)",
  "    # Simulate task execution",
  "    time.sleep(1)",
  "",
  "agent = AutomationAgent(activation_limit=10)",
  "agent.evaluate_task()",
];

const services = [
  {
    id: 1,
    title: "Real-Time Intelligence",
    description:
      "Make smarter decisions with live data insights. Tap into real-time data.",
    content: [
      "Software & App Industry",
      "UX & UI Design Industry",
      "High Converting Customer",
    ],
    type: "search",
  },
  {
    id: 2,
    title: "Custom AI Agent development",
    description:
      "We develop custom AI agents that integrate seamlessly with your tools.",
    type: "code",
  },
  {
    id: 3,
    title: "AI Strategy Consulting",
    description:
      "Get expert guidance to implement AI solutions that drive business growth.",
    type: "chart",
  },
];

// Framer Motion variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ServiceSection2: React.FC = () => {
  return (
    <section className="bg-black  text-white pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap gap-8 justify-center">
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex-1 min-w-[300px] max-w-[350px] relative group bg-gradient-to-b from-gray-900/60 to-black border border-t-3  border-gray-800 rounded-3xl p-6 shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-all duration-500 animate-[float_6s_ease-in-out_infinite]"
            >
              {/* Card background blur */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-gray-800/30 to-gray-700/10 blur-xl opacity-40 group-hover:opacity-60 transition"></div>

              {/* SEARCH Card */}
              {service.type === "search" && (
                <div className="border-t-2 rounded-xl pt-2 border-gray-800">
                  <div className="border-t-2 rounded-xl pt-2 border-gray-800">
                    <div className="border border-t-2 w-full border-b-0 border-gray-800 pb-4 pt-8 px-2 rounded-xl">
                      <div className="w-full flex items-center justify-between border-t-2 border-gray-800 px-3 py-2 mb-3 rounded-full bg-black/50 text-gray-300 border border-gray-700 focus:outline-none">
                        Research anything....
                        <button className="bg-white text-black px-5 py-1 rounded-full hover:bg-gray-200 transition">
                          Research
                        </button>
                      </div>

                      {service.content && (
                        <ul className="mt-3 space-y-2 text-gray-300 text-sm">
                          {service.content.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-center justify-between bg-black/30 p-2 rounded-lg border border-t-2 border-gray-700"
                            >
                              <i>
                                {/* icon */}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="24px"
                                  viewBox="0 -960 960 960"
                                  width="24px"
                                  fill="#FFFFFF"
                                >
                                  <path d="M702-480 560-622l57-56 85 85 170-170 56 57-226 226Zm-342 0q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 260Zm0-340Z" />
                                </svg>
                              </i>
                              {item}
                              <i className="ps-10">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="24px"
                                  viewBox="0 -960 960 960"
                                  width="24px"
                                  fill="#FFFFFF"
                                >
                                  <path d="m136-240-56-56 212-212q35-35 85-35t85 35l46 46q12 12 28.5 12t28.5-12l178-178H640v-80h240v240h-80v-103L621-405q-35 35-85 35t-85-35l-47-47q-11-11-28-11t-28 11L136-240Z" />
                                </svg>
                              </i>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Code Card */}
              {service.type === "code" && (
                <div className="border-t-2 rounded-xl pt-2 border-gray-800">
                  <div className="relative bg-black/40 rounded-xl border-t-2 border border-b-0 border-gray-800 mb-4 text-sm font-mono text-gray-400 h-60 overflow-hidden">
                    <div className="flex items-center justify-between px-3 py-2 border-b-0 border-gray-700 bg-black/60">
                      <div className="flex space-x-1">
                        <span className="w-3 h-3 rounded-full bg-gray-600"></span>
                        <span className="w-3 h-3 rounded-full bg-gray-600"></span>
                        <span className="w-3 h-3 rounded-full bg-gray-600"></span>
                      </div>
                      <button className="flex items-center justify-between px-5 py-1 bg-gray-800 rounded-full text-xs text-gray-300 gap-2">
                        <span>Search</span>
                      </button>
                    </div>
                    <div className="relative w-80 px-4 h-40 bg-gradient-to-bl from-gray-800/100 to-black overflow-hidden">
                      <div className="absolute animate-scrollCode">
                        {codeLines.map((line, idx) => (
                          <div key={idx} className="whitespace-pre text-gray-300">
                            <span className="text-gray-500 mr-3">
                              {String(idx + 1).padStart(2, "0")}
                            </span>
                            {line}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Chart Card */}
              {service.type === "chart" && (
                <div className="relative flex bg-gradient-to-bl from-gray-800/100 to-black flex-col items-center rounded-xl border-gray-700 ps-15 pt-15">
                  <div className="relative flex justify-center mb-20 items-center h-30 w-30 rounded-full border-t-3 bg-black border border-gray-800 bg-black/30 translate-x-6 translate-y-6">
                    <Sparkles className="w-10 h-10 text-gray-300" />
                  </div>
                  <div className="absolute top-24 right-37 w-24 h-2 bg-black border-t-1 border-b-1 border-gray-800 rotate-[33deg]"></div>
                  <div className="absolute top-14 right-59 w-5 border-t-2 border-gray-800 border h-5 rounded-full bg-black animate-ball"></div>
                  <div className="absolute top-18 right-53 w-5 border-t-2 border-gray-800 border h-5 rounded-full bg-black animate-ball2"></div>
                  <div className="absolute top-1 right-56 w-20 h-20 rounded-full border-t-3 bg-black border border-gray-600 opacity-40">
                    <Sparkles className="w-6 h-6 absolute top-6 left-7 text-white" />
                  </div>
                  <div className="absolute top-38 right-55 w-9 h-9 rounded-full border-t-3 bg-black border border-gray-600 opacity-30"></div>
                </div>
              )}

              <h3 className="text-lg font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection2;
