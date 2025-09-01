
"use client";
import React from "react";

const AnimatedFeatures = () => {
  return (
    <section className="relative bg-[#04070D] text-white py-26 px-">
      <div className="max-w-6xl mx-auto">
        {/* -------- Heading + Button -------- */}
        <div className="text-center mb-14">
          <button className="px-5 py-1 rounded-full bg-[#0D1018] border border-white/10 text-xs tracking-wide text-gray-300 mb-4">
            BENEFITS
          </button>
          <h2 className="text-3xl font-semibold text-white">
            Why Choose <span className="italic text-gray-300">Us?</span>
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Everything you need to automate, optimize, and scale
          </p>
        </div>

        {/* -------- Features Grid -------- */}
        <div className="flex flex-col md:flex-row justify-center gap-8 items-start">
          {/* ---------- Real-Time Intelligence (Clock) ---------- */}
          <div className="flex flex-col bg-[#05080E] border border-white/10 rounded-2xl p-8 w-95 h-[400px] text-center group shadow-inner shadow-[rgba(207,231,255,0.2)]">
            <div className="flex justify-center mb-8">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                {/* Watch face gradient */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#10131c] to-transparent shadow-inner shadow-[rgba(207,231,255,0.15)]"></div>

                {/* Clock hand (same smooth duration as blades) */}
                <div
                  className="absolute top-1/2 left-1/2 w-[45%] h-[8px] bg-gray-400 origin-left rounded-sm 
                  -rotate-150 transition-transform duration-[800ms] ease-linear group-hover:rotate-0"
                ></div>

                {/* Center cap */}
                <div className="absolute top-1/2 left-1/2 w-10 h-10 bg-[#04070d] rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <div className="w-4 h-4 bg-[#636996] rounded-full"></div>
                </div>

                {/* Light overlay */}
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(50%_50%_at_93.7%_8.1%,rgba(184,199,217,0.5),rgba(4,7,13,0))] opacity-20"></div>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white">Real-Time Intelligence</h3>
            <p className="text-gray-400 text-sm mt-2">
              Access accurate, real-time data to drive smarter decisions
            </p>
          </div>

          {/* ---------- Measurable Impact (Bars) ---------- */}
          <div className="flex flex-col bg-[#05080E] border border-gray-800 rounded-2xl p-8 w-95 h-[400px] text-center group">
            <div className="flex justify-center mb-18">
              <div className="flex items-end gap-4 h-40">
                {/* Bars with smooth same duration */}
                <div className="w-12 bg-[#13161F] rounded-[12px] h-17 transition-all duration-500 ease-linear group-hover:h-20"></div>
                <div className="w-12 bg-[#13161F] rounded-[12px] h-25 transition-all duration-500 ease-linear delay-100 group-hover:h-28"></div>
                <div className="w-12 bg-[#13161F] rounded-[12px] h-24 transition-all duration-500 ease-linear delay-200 group-hover:h-36"></div>
                <div className="w-12 bg-[#13161F] rounded-[12px] h-30 transition-all duration-500 ease-linear delay-300 group-hover:h-44"></div>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white">Measurable Impact</h3>
            <p className="text-gray-400 text-sm mt-2">
              Track performance, uncover insights, and achieve data-backed growth
            </p>
          </div>

          {/* --------- Seamless Integration (Blades) ---------- */}
          <div className="flex flex-col bg-[#05080E] border border-gray-800 rounded-2xl p-8 w-95 h-[400px] text-center group">
            <div className="flex justify-center mb-8">
              <div className="relative w-52 h-52 transition-transform duration-[15000ms] ease-linear group-hover:rotate-[360deg]">
                {/* Center hub */}
                <div className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#10131c] shadow-inner shadow-blue-200/30 flex items-center justify-center z-10">
                  <img
                    src="https://framerusercontent.com/images/EdYwMQFSY0q3kCvKPrFpiTV5w.png"
                    alt="center icon"
                    className="w-8 h-8 object-contain opacity-90"
                  />
                </div>

                {/* Blades */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                  const isRightSide = angle === 0 || angle === 60 || angle === 300;
                  const bladeLength = isRightSide ? "w-28" : "w-32";
                  return (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 origin-left"
                      style={{ transform: `rotate(${angle}deg)` }}
                    >
                      <div className={`${bladeLength} h-[4px] bg-[#11141E] rounded-full relative`}>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-[#10131c] rounded-full shadow-inner shadow-blue-200/30"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white">Seamless Integration</h3>
            <p className="text-gray-400 text-sm mt-2">
              Connect tools, teams, and workflows with intelligent automation
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="absolute -bottom-2 left-0 w-full mb-3">
        <div className="relative w-full h-px bg-white/10">
          <div className="absolute inset-x-0 bottom-0 h-8 pb-2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedFeatures;

