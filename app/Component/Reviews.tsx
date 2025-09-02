"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
// import images from "../../public/images"

// Dummy Logos
const logos = ["Opal", "Dune", "Oasis", "Asterisk", "Cooks"];

const reviews = [
  {
    name: "Daniel Kim",
    role: "Operations Lead at Flowbyte",
    text: "Truly impressive. The AI assistant is fast, accurate, and blends into our daily ops without friction.",
    img:  "images/100.jpeg ",
  },
  {
    name: "Priya Mehra",
    role: "CTO at Brightstack Labs",
    text: "Game-changer. Automation flows run flawlessly. Our team now focuses only on what really matters.",
    img: "images/100 (2).jpeg ",
  },
  {
    name: "Elena Rodriguez",
    role: "Product Manager at Nexora",
    text: "Smooth setup. Their system replaced three tools. We saw improvements in just the first week.",
    img: "images/100 (1).jpeg ",
  },
  {
    name: "Marcus Thompson",
    role: "Marketing Director at OrbitShift Director",
    text: "Surprisingly simple. The AI adapts quickly. Our campaigns are now running 2x more efficiently.",
    img: "images/100 (2).jpeg ",
  },
  {
    name: "Sarah Wong",
    role: "Analytics Manager at Corelink",
    text: "Huge time-saver. Data is better organized. The insights we get now are actionable and fast.",
    img: "images/100 (3).jpeg ",
  },
  {
    name: "Ravi Shah",
    role: "COO at PixelNest Solutions",
    text: "Very intuitive. No fluff, just performance. Our internal processes finally feel under control.",
    img: "images/100.jpeg ",
  },
];

const Testimonials = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-track", {
        x: "-50%", // move half width
        repeat: -1,
        duration: 30, // slower transition
        ease: "linear",
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[#04070D] text-white py-16 px-4 relative">
      <div className="max-w-6xl mx-auto text-center mb-14">
        {/* Reviews Button */}
        <button className="px-4 py-1 text-sm rounded-full bg-white/10 border border-white/20 text-gray-300">
          ♥ REVIEWS
        </button>

        {/* Heading */}
        <h2 className="mt-6 text-3xl md:text-4xl font-bold">
          Trusted by <span className="italic text-gray-300">Visionaries</span>
        </h2>

        {/* Subheading */}
        <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
          Hear from real users who achieved success with our automation
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {reviews.map((item, i) => (
          <div
            key={i}
            className="bg-[#070B11] rounded-2xl shadow-md border border-gray-800 overflow-hidden flex flex-col"
          >
            {/* Profile Section */}
            <div className="flex items-center gap-3 p-6 bg-[#070B11] rounded-2xl border border-[#292F3A]">
              <img
                src={item.img}
                alt={item.name}
                className="w-12 h-12 object-cover rounded-lg"
              />
              <div className="text-left">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.role}</p>
              </div>
            </div>

            {/* Message Section */}
            <div className="p-6">
              <p className="text-gray-300 text-[15px] leading-relaxed">
                “{item.text}”
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Running Marquee */}
      <div className="relative overflow-hidden mt-14">
        {/* Gradient fade effect */}
        <div className="pointer-events-none absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#04070D] to-transparent z-10"></div>
        <div className="pointer-events-none absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#04070D] to-transparent z-10"></div>

        <div ref={marqueeRef} className="flex whitespace-nowrap overflow-hidden">
          <div className="flex gap-16 marquee-track">
            {/* Duplicate enough times for seamless loop */}
            {logos.concat(logos, logos).map((logo, i) => (
              <span
                key={i}
                className="text-gray-400 text-xl font-semibold flex items-center"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* White Shadow Separation */}
      <div className="absolute -bottom-2 left-0 w-full">
        {/* thin line */}
        <div className="relative w-full h-px bg-white/10">
          {/* glow on top of line */}
          <div className="absolute inset-x-0 bottom-0 h-8 pb-2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

