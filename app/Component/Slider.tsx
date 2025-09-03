"use client";
import { useState } from "react";
import Image from "next/image"; 

const cards = [
  {
    id: 1,
    name: "Emily's E-commerce Success",
    desc: "Emily, the CEO of BloomTech, transformed their marketing efforts using AI-powered tools. This shift resulted in a 60% increase in ROI and a 45% improvement in customer personalization, leading to a surge in brand loyalty.",
    stats: [
      { value: "70%", label: "growth in sales" },
      { value: "50%", label: "rise in engagement" },
    ],
    img: "3rd-img.avif", 
  },
  {
    id: 2,
    name: "John's Startup Growth",
    desc: "John leveraged automation to scale operations efficiently, cutting costs by 35% while boosting customer retention.",
    stats: [
      { value: "35%", label: "cost savings" },
      { value: "2x", label: "customer retention" },
    ],
   img: "3rd-img.avif", 
  },
  {
    id: 3,
    name: "Sophia's Marketing Win",
    desc: "Sophia used AI-driven insights to launch targeted campaigns that doubled lead generation and improved ROI by 80%.",
    stats: [
      { value: "2x", label: "lead generation" },
      { value: "80%", label: "ROI increase" },
    ],
   img: "3rd-img.avif", 
  },
];

 const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
    <>

    <section className="relative bg-[#04070D] text-white py-16 px-6">
      {/* Center Wrapper */}
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-white bg-black px-4 py-1.5 rounded-full border border-neutral-700 shadow-md shadow-black/40 mb-6">
            SUCCESS STORIES
          </div>
          <h2 className="text-3xl font-bold">
            Real Client <span className="italic">Success</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Explore how businesses scaled using automation and AI
          </p>
        </div>

        {/* Stacked Cards */}
        <div className="relative flex items-center justify-center h-[420px]">
          {cards.map((card, i) => {
            const offset = i - activeIndex;

            return (
              <div
                key={card.id}
                className={`
                  absolute rounded-2xl bg-[#0B0F17] border border-white/10 shadow-lg transition-all duration-500 overflow-hidden
                  ${offset === 0 ? "z-30 scale-100" : ""}
                  ${offset === 1 ? "z-20 scale-95 -translate-y-6 opacity-80" : ""}
                  ${offset === 2 ? "z-10 scale-90 -translate-y-12 opacity-60" : ""}
                `}
                style={{
                  width: `${100 - offset * 5}%`,
                  maxWidth: "800px",
                  height: "320px",
                }}
              >
                {/* shadow line for stacked effect */}
                {offset > 0 && (
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-white/20"></div>
                )}

                {/* content */}
                <div className="flex h-full">
                  {/* Left text */}
                  <div className="w-2/3 p-6 flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-white mb-2">
                        {card.name}
                      </h2>
                      <p className="text-sm text-gray-400">{card.desc}</p>
                    </div>
                    <div className="flex gap-4 mt-4">
                      {card.stats.map((s, idx) => (
                        <div
                          key={idx}
                          className="flex-1 bg-[#111827] p-4 rounded-xl border border-white/10 text-center"
                        >
                          <p className="text-2xl font-bold text-white">{s.value}</p>
                          <p className="text-xs text-gray-400">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right image */}
                  <div className="w-1/3 relative rounded-r-2xl overflow-hidden">
                    <img
                      src={card.img}
                      alt={card.name}
                      
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* White Shadow Separation */}
      <div className="absolute -bottom-3 left-0 w-full">
        <div className="relative w-full h-px bg-white/10">
          <div
            className="absolute inset-x-0 bottom-0 h-8 pb-2
            bg-gradient-to-t from-white/10 to-transparent pointer-events-none"
          ></div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Slider







