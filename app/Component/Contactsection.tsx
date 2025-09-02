


"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    title: "Emily's E-commerce Success",
    desc: "Emily transformed her sales with AI-driven strategies.",
    img: "/images/emily.jpg",
  },
  {
    title: "David's Marketing Growth",
    desc: "David scaled his marketing campaigns using automation.",
    img: "/images/david.jpg",
  },
  {
    title: "Sophia's SaaS Impact",
    desc: "Sophia improved her SaaS retention and engagement.",
    img: "/images/sophia.jpg",
  },
];

export default function CaseCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () =>
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);

  const nextSlide = () =>
    setActiveIndex((prev) => (prev + 1) % cards.length);

  return (
    <div className="relative flex flex-col items-center justify-center py-16 bg-[#05070B] text-white overflow-hidden">
      {/* Carousel Container */}
      <div className="relative flex items-center justify-center w-[800px] h-[400px]">
        <AnimatePresence>
          {cards.map((card, idx) => {
            // position calculate (left, center, right)
            const offset = (idx - activeIndex + cards.length) % cards.length;

            let translateX = 0;
            let scale = 1;
            let opacity = 1;
            let zIndex = 10;

            if (offset === 0) {
              translateX = 0;
              scale = 1;
              opacity = 1;
              zIndex = 30;
            } else if (offset === 1) {
              translateX = 220;
              scale = 0.85;
              opacity = 0.6;
              zIndex = 20;
            } else if (offset === 2) {
              translateX = -220;
              scale = 0.85;
              opacity = 0.6;
              zIndex = 20;
            } else {
              opacity = 0;
              scale = 0.7;
              zIndex = 0;
            }

            return (
              <motion.div
                key={idx}
                className="absolute w-[420px] h-[280px] rounded-2xl border border-white/10 bg-[#0B0F17] shadow-xl p-6 flex flex-col justify-between"
                style={{ zIndex }}
                animate={{
                  x: translateX,
                  scale,
                  opacity,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {/* Image */}
                <div className="w-full h-40 relative rounded-xl overflow-hidden mb-4">
                  <Image
                    src={card.img}
                    alt="case study"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Text */}
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-sm text-gray-400">{card.desc}</p>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex gap-6 mt-10">
        <button
          onClick={prevSlide}
          className="p-3 bg-white/10 hover:bg-white/20 rounded-full"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 bg-white/10 hover:bg-white/20 rounded-full"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
