"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaMobileAlt } from "react-icons/fa";
import Link from "next/link";

// -------- Card Component --------
function VerticalScrollCard({
  images,
  title,
  description,
  url,
}: {
  images: string[];
  title: string;
  description: string;
  url: string;
}) {
  const cardHeight = 384; // h-96
  const imageHeight = 400;
  const totalHeight = images.length * imageHeight;
  const scrollDistance = Math.max(0, totalHeight - cardHeight);

  return (
    <div className="bg-[#0D1018] rounded-xl overflow-hidden border border-white/10 shadow-md hover:shadow-lg transition">
      {/* Image Scroll Card */}
      <Link href={url} target="_blank">
        <div className="h-96 overflow-hidden rounded-t-xl cursor-pointer">
          <motion.div
            className="flex flex-col"
            initial={{ y: 0 }}
            whileHover={{ y: -scrollDistance }}
            transition={{ duration: 3, ease: "easeInOut" }}
          >
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`mobile-${i}`}
                className="w-full h-auto object-cover"
              />
            ))}
          </motion.div>
        </div>
      </Link>

      {/* Title & Description */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-gray-400 text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}

// -------- Section Component --------
export default function MobileSection() {
  const cardsData = [
    {
      id: 1,
      images: [
        "/images/mobile1 (1).webp",
        "/images/mobile2 (2).webp",
        "/images/mobile3.webp",
        "/images/mobile4.webp",
        "/images/mobile5.webp",
      ],
      title: "TwistHang",
      description:
        "A unique word game that blends the excitement of Wheel of Fortune with the classic fun of Hangman. Players spin a wheel to guess letters and solve puzzles across various categories. The game offers an ad-free experience with over 47,000 puzzles",
      url: "https://play.google.com/store/apps/details?id=com.twisthang&hl=en",
    },
    {
      id: 2,
      images: ["/images/mobile6.webp", "/images/mobile7.webp", "/images/mobile8.webp"],
      title: "BASS Chat",
      description:
        "A specialized messaging platform designed exclusively for BASS employees and clients. The app facilitates secure, real-time communication and collaboration within the BASS community",
      url: "https://play.google.com/store/apps/details?id=com.basschat.sty&hl=en",
    },
    {
      id: 3,
      images: [
        "/images/mobile9.webp",
        "/images/mobile10.webp",
        "/images/mobile11.webp",
        "/images/mobile12.webp",
        "/images/mobile13.webp",
      ],
      title: "IIMIIN",
      description:
        "A live-streaming shopping platform where users can join sessions hosted by celebrities, influencers, and vendors to discover and purchase unique items in real-time. Each purchase contributes to a charitable cause, ensuring that shopping with IIMIIN makes a positive impact",
      url: "https://play.google.com/store/apps/details?id=com.iimiin&hl=en",
    },
  ];

  return (
    <section className="relative text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* -------- Heading -------- */}
        <div className="text-center mb-14">
          <button className="inline-flex items-center gap-2 px-5 py-1 rounded-full bg-[#0D1018] border border-white/10 text-xs tracking-wide text-white mb-4">
            <FaMobileAlt className="text-white text-lg" />
            OUR WORK
          </button>
          <h2 className="text-3xl font-semibold text-white mt-2">
            Mobile <span className="italic text-gray-300">Portfolio</span>
          </h2>
          <p className="text-gray-400 mt-2 text-sm max-w-lg mx-auto">
            A showcase of our mobile application designs and prototypes. Hover
            over the cards to explore interactive scrolling previews.
          </p>
        </div>

        {/* -------- Cards -------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {cardsData.map((card) => (
            <VerticalScrollCard
              key={card.id}
              images={card.images}
              title={card.title}
              description={card.description}
              url={card.url}
            />
          ))}
        </div>

        {/* -------- View More Button -------- */}
         <div className="text-center mt-12">
          <Link
            href="/mobileportfolio"
            className="inline-block px-8 py-3 rounded-full bg-[#0D1018] border border-white/10 text-white text-sm font-medium tracking-wide hover:bg-[#1a1d29] transition"
          >
            View Mobile Portfolio
          </Link>
        </div>
      </div>

      {/* -------- Bottom Separator -------- */}
      <div className="absolute -bottom-2 left-0 w-full mb-3">
        <div className="relative w-full h-px bg-white/10">
          <div className="absolute inset-x-0 bottom-0 h-8 pb-2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
