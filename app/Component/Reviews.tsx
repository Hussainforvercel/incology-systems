"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

// Dummy Logos
const logos = ["Opal", "Dune", "Oasis", "Asterisk", "Cooks"];

// Testimonials Data
const testimonials = [
  {
    name: "Daniel Kim",
    role: "Operations Lead at Flowbyte",
    text: "Truly impressive. The AI assistant is fast, accurate, and blends into our daily ops without friction.",
    img: "https://i.pravatar.cc/100?img=11",
  },
  {
    name: "Priya Mehra",
    role: "CTO at Brightstack Labs",
    text: "Game-changer. Automation flows run flawlessly. Our team now focuses only on what really matters.",
    img: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Elena Rodriguez",
    role: "Product Manager at Nexora",
    text: "Smooth setup. Their system replaced three tools. We saw improvements in just the first week.",
    img: "https://i.pravatar.cc/100?img=13",
  },
  {
    name: "Marcus Thompson",
    role: "Marketing Director at OrbitShift Director",
    text: "Surprisingly simple. The AI adapts quickly. Our campaigns are now running 2x more efficiently.",
    img: "https://i.pravatar.cc/100?img=14",
  },
  {
    name: "Sarah Wong",
    role: "Analytics Manager at Corelink",
    text: "Huge time-saver. Data is better organized. The insights we get now are actionable and fast.",
    img: "https://i.pravatar.cc/100?img=15",
  },
  {
    name: "Ravi Shah",
    role: "COO at PixelNest Solutions",
    text: "Very intuitive. No fluff, just performance. Our internal processes finally feel under control.",
    img: "https://i.pravatar.cc/100?img=16",
  },
];

const Testimonials = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".logo-item", {
        xPercent: -100 * logos.length,
        repeat: -1,
        duration: 20,
        ease: "linear",
      });
    }, logoRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[#04070D] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="bg-[#0A0F1C] rounded-xl p-6 shadow-md border border-gray-800"
          >
            <div className="flex items-center mb-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.role}</p>
              </div>
            </div>
            <p className="text-gray-300 text-[15px] leading-relaxed">
              “{item.text}”
            </p>
          </div>
        ))}
      </div>

      {/* Logo Marquee */}
      <div className="relative overflow-hidden mt-14">
        <div
          ref={logoRef}
          className="flex space-x-20 whitespace-nowrap logo-track"
        >
          {logos.map((logo, i) => (
            <span
              key={i}
              className="logo-item text-gray-400 text-xl font-semibold"
            >
              {logo}
            </span>
          ))}
          {logos.map((logo, i) => (
            <span
              key={`copy-${i}`}
              className="logo-item text-gray-400 text-xl font-semibold"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
