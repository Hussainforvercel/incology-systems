

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { User, CheckCircle } from "lucide-react";
import { motion, useMotionValue, animate, AnimatePresence } from "framer-motion";

const cards = [
  {
    id: 1,
    name: "Emily's E-commerce Success",
    desc: "Emily, the CEO of BloomTech, transformed their marketing efforts using AI-powered tools. This shift resulted in a 60% increase in ROI and a 45% improvement in customer personalization, leading to a surge in brand loyalty",
    stats: [
      { value: "70%", label: "growth in sales" },
      { value: "50%", label: "rise in engagement" },
    ],
    img: "/images/100.jpeg",
    heading: "Emily’s Amazing Journey",
  },
  {
    id: 2,
    name: "Max's SaaS Revolution",
    desc: "Max, the founder of CloudFlow, implemented AI automation in their processes. This move slashed operational costs by 50% and boosted team productivity by 75%, empowering the company to accelerate growth and expand faster.",
    stats: [
      { value: "60%", label: "cost savings" },
      { value: "45%", label: "customer retention" },
    ],
    img: "/images/100 (1).jpeg",
    heading: "Max’s Game Changing Success",
  },
  {
    id: 3,
    name: "Sophia's Retail Breakthrough",
    desc: "Sophia, the marketing lead at Trendify, used AI-driven analytics to dive deep into customer behavior. The insights led to a 40% increase in engagement and a 30% rise in repeat purchases, creating long-term customer relationships.",
    stats: [
      { value: "40%", label: "lead generation" },
      { value: "50%", label: "ROI increase" },
    ],
    img: "/images/100 (2).jpeg",
    heading: "Sophia’s Retail Breakthrough",
  },
];

// Animated counter
function AnimatedNumber({ value, isActive }: { value: string; isActive: boolean }) {
  const target = parseInt(value.replace("%", ""), 10);
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isActive) {
      const controls = animate(motionValue, target, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setDisplay(Math.round(latest)),
      });
      return () => controls.stop();
    } else {
      setDisplay(0);
    }
  }, [isActive, target, motionValue]);

  return <>{display}%</>;
}

export default function StackedCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  // Auto-slide for tablet & above
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#04070D] text-white py-16 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-white bg-black px-4 py-1.5 rounded-full border border-neutral-700 shadow-md shadow-black/40 mb-6">
            <CheckCircle size={14} className="text-white" /> SUCCESS STORIES
          </div>
          <h2 className="text-3xl font-bold">
            Real Client <span className="italic">Success</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Explore how businesses scaled using automation and AI
          </p>
        </div>

        {/* --- Carousel (only >=650px) --- */}
        <div className="hidden sm:flex relative items-center justify-center h-[460px] sm:h-[400px]">
          {cards.map((card, i) => {
            const offset = (i - activeIndex + cards.length) % cards.length;

            let scale = offset === 0 ? 1 : offset === 1 ? 0.92 : 0.85;
            let translateY = offset === 0 ? 0 : offset === 1 ? -40 : -80;
            const zIndex = offset === 0 ? 30 : offset === 1 ? 20 : 10;
            const opacity = offset > 1 ? 0.5 : 1;

            if (hovered === i && offset === 1) {
              translateY = -60;
              scale = 0.95;
            }

            return (
              <motion.div
                key={card.id}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="absolute rounded-2xl bg-[#0B0F17] border border-white/10 shadow-lg overflow-hidden w-full max-w-[850px]"
                style={{ height: "360px", zIndex }}
                animate={{ scale, y: translateY, opacity }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {/* Fake browser bar */}
                <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-[#0F131D]">
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <User size={16} />
                  </div>
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                    <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                    <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                  </div>
                </div>

                {/* Card content */}
                <div className="flex h-[calc(100%-40px)] flex-col sm:flex-row">
                  {/* Left text */}
                  <div className="sm:w-2/3 w-full p-6 flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-white mb-2">{card.name}</h2>
                      <p className="text-sm text-gray-400">{card.desc}</p>
                    </div>
                    <div className="flex gap-4 mt-4">
                      {card.stats.map((s, idx) => (
                        <div
                          key={idx}
                          className="flex-1 bg-[#111827] p-4 rounded-xl border border-white/10 text-center"
                        >
                          <p className="text-2xl font-bold text-white">
                            <AnimatedNumber value={s.value} isActive={offset === 0} />
                          </p>
                          <p className="text-xs text-gray-400">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right image */}
                  <div className="sm:w-1/3 w-full p-6">
                    <div className="relative w-full h-[200px] sm:h-[250px] rounded-xl overflow-hidden">
                      <Image src={card.img} alt={card.name} fill className="object-cover" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pagination + Dynamic Heading (only for carousel) */}
        <div className="hidden sm:block text-center mt-8">
          <AnimatePresence mode="wait">
            <motion.h3
              key={cards[activeIndex].heading}
              className="inline-block text-xl font-serif italic text-white bg-[#0B0F17] px-5 py-5 rounded-lg shadow-md mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              {cards[activeIndex].heading}
            </motion.h3>
          </AnimatePresence>

          <div className="flex justify-center gap-2">
            {cards.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-3 h-3 rounded-full transition cursor-pointer ${
                  i === activeIndex ? "bg-white" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* --- Static stacked layout (only <650px) --- */}
        <div className="sm:hidden space-y-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="rounded-2xl bg-[#0B0F17] border border-white/10 shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-2">{card.name}</h2>
                <p className="text-sm text-gray-400 mb-4">{card.desc}</p>

                <div className="flex gap-4 mb-4">
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

                <div className="relative w-full h-[200px] rounded-xl overflow-hidden">
                  <Image src={card.img} alt={card.name} fill className="object-cover" />
                </div>
              </div>
            </div>
          ))}
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
