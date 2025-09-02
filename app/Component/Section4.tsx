"use client";
import React, { useState } from "react";

const Section4 = () => {
  const [step, setStep] = useState(0);
  const content = [
    {
      number: "01",
      title: "Discover & Analyze",
      desc: "We audit your existing workflows, tools, and customer data to uncover inefficiencies and automation opportunities. Every system is mapped for clarity.",
      img: "https://framerusercontent.com/images/LMV9IYKI2TkgMh5KmQhbeIV2A.png?width=1602&height=1049"
    },
    {
      number: "02",
      title: "Design & Implement",
      desc: "We create tailored AI workflows that align with your goals. Our team builds, tests, and deploys smart systems that integrate into your operations seamlessly.",
      img: "https://framerusercontent.com/images/NlShinj3SRLiU2GpzFKbH8loPs.png?width=1808&height=1124"
    },

    {
      number: "03",
      title: "Optimize & Scale",
      desc: "We track key metrics and continuously refine performance using real-time insights. As your business evolves, your automation grows with it.",
      img: "https://framerusercontent.com/images/66vg6GiqexKxWsR2ms684XFtAQ.png?width=1536&height=1012"
    },
  ];

  return (
    <section className="relative w-full bg-black border-gray-900 text-white pb-20 pt-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-block px-4 py-1 rounded-full border border-gray-700 text-xs uppercase tracking-wide text-gray-300 ">
          PROCESS
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-bold mb-4">
          Our Simple &{" "}
          <span className="italic font-serif text-gray-200">Smart Process</span>
        </h2>

        {/* Subheading */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Everything you need to collaborate, create, and scale, all in one
          place.
        </p>

        <div className="border border-t-2 border-gray-800 border-b-gray-900 rounded-xl p-4 pb-4">
          <section className="relative w-full pt-0 text-white rounded-xl bg-black  border-gray-700  to-transparent">
            {/* Buttons */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setStep(0)}
                className={`flex-1 py-3 rounded-xl border border-gray-700 transition ${step === 1
                    ? "bg-gray-800 text-white"
                    : "bg-[#111] text-gray-400 hover:bg-gray-800"
                  }`}
              >
                STEP 1
              </button>
              <button
                onClick={() => setStep(1)}
                className={`flex-1 py-3 rounded-xl border border-gray-700 transition ${step === 2
                    ? "bg-gray-800 text-white"
                    : "bg-[#111] text-gray-400 hover:bg-gray-800"
                  }`}
              >
                STEP 2
              </button>
              <button
                onClick={() => setStep(2)}
                className={`flex-1 py-3 rounded-xl border border-gray-700 transition ${step === 3
                    ? "bg-gray-800 text-white"
                    : "bg-[#111] text-gray-400 hover:bg-gray-800"
                  }`}
              >
                STEP 3
              </button>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10 items-center">
              {/* LEFT IMAGE */}
              <div className="flex justify-center">
                <img
                  width={600}
                  height={600}
                  src={content[step].img}
                  alt={content[step].title}
                  className="rounded-2xl shadow-lg"
                />
              </div>

              {/* RIGHT SIDE */}
              <div className="text-start">
                <p className="text-gray-400 mb-3 text-lg">
                  {content[step].number}
                </p>
                <h5 className="text-4xl mb-4">{content[step].title}</h5>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {content[step].desc}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Section4;
