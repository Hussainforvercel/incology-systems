"use client";

import React from "react";
import { BarChart3, Sparkles } from "lucide-react";

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

 function Section5() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative group bg-gradient-to-b from-gray-900/60 to-black border border-t-3 border-gray-800 rounded-3xl p-6 shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-all duration-500 animate-[float_6s_ease-in-out_infinite]"
            >
              {/* Card Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-gray-800/30 to-gray-700/10 blur-xl opacity-40 group-hover:opacity-60 transition"></div>

              {/* SEARCH TYPE */}
              {service.type === "search" && (
                <div className="border-t-2 rounded-xl pt-2  border-gray-800 ">
                  <div className="border-t-2 rounded-xl pt-2 border-gray-800 ">
                    <div className="border border-t-2 w-full border-b-0 border-gray-800 pb-4 pt-8 px-2 rounded-xl">
                      <button
                        className="w-full flex items-center justify-between border-t-2 border-gray-800 px-3 py-2 mb-3 rounded-full bg-black/50 text-gray-300 border border-gray-700 focus:outline-none"
                      >Research anything....  <button className=" bg-white text-black px-5 py-1 rounded-full hover:bg-gray-200 transition">
                          Research
                        </button> </button>

                      {service.content && (
                        <ul className="mt-3 space-y-2 text-gray-300 text-sm">
                          {service.content.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-center justify-between  bg-black/30 p-2 rounded-lg border  border-t-2 border-gray-700"
                            >
                              <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M702-480 560-622l57-56 85 85 170-170 56 57-226 226Zm-342 0q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 260Zm0-340Z" /></svg></i>
                              {item}
                              <i className="ps-16"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m136-240-56-56 212-212q35-35 85-35t85 35l46 46q12 12 28.5 12t28.5-12l178-178H640v-80h240v240h-80v-103L621-405q-35 35-85 35t-85-35l-47-47q-11-11-28-11t-28 11L136-240Z" /></svg></i>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>

              )}

              {/*scrolling animation */}
              {service.type === "code" && (
                 <div className="border-t-2 rounded-xl pt-2  border-gray-800 ">
                   <div className="border-t-2 rounded-xl pt-2  border-gray-800 ">
                <div className="relative bg-black/40 rounded-lg border border-gray-700 mb-4 text-sm font-mono text-gray-400 h-40 overflow-hidden">
                  <div className="absolute animate-scrollCode">
                    {codeLines.map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </div>
                  </div>
                  </div>
                </div>
              )}

              {/* CHART TYPE */}
              {service.type === "chart" && (
                <div className="flex justify-center items-center h-40">
                  <div className="w-20 h-20 rounded-full border-2 border-gray-600 flex justify-center items-center bg-black/30">
                    <BarChart3 className="w-10 h-10 text-gray-300 animate-pulse" />
                  </div>
                  <Sparkles className="w-6 h-6 text-gray-400 ml-2 animate-pulse" />
                </div>
              )}

              <h3 className="text-lg font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section5