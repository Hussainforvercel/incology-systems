"use client";
import React from 'react'
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Libre_Baskerville } from "next/font/google";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const UiUx = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/originals/05/cd/9a/05cd9a0bb4c72e5ba98ece031987955d.gif"
            alt="Mobile Development Background"
            className="w-full h-full object-cover blur-sm"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <motion.div
          className="relative z-10 max-w-3xl px-6 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg"
            style={{ fontFamily: "Valty DEMO" }}
          >
            UI/UX & Graphic Design
          </h1>
          <p
            className={`mt-4 text-md font-bold tracking-wide text-gray-200 ${libreBaskerville.className}`}
          >

            Design is more than how something looks—it’s how it feels to use. Our design team blends
            creativity with research-driven strategy to create digital experiences that resonate with users.
          </p>
        </motion.div>
      </section>

      {/* UIUX Section */}
      <section className="relative py-16  text-white">

        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4"
            style={{ fontFamily: "Valty DEMO" }}
          >
            UI /UX Services
          </h2>

          {/* Extra text below heading */}
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">

            At Incology System, we believe exceptional UI/UX design is not just about attractive visuals its about creating seamless, meaningful interactions that make technology feel human. Our design approach balances functionality, aesthetics, and user empathy, ensuring every touchpoint reflects innovation and reliability.
          </p>

          <ul className="space-y-6 list-none">

            <li className="border border-t-3 rounded-xl px-4 py-6 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black  hover:scale-[1.02] transition duration-300 flex items-start gap-3">
              <CheckCircle className="text-green-500 w-8 h-8 " />
              <p className="text-md"><span className="font-bold text-xl tracking-wide" style={{ fontFamily: "Valty DEMO" }}> Wireframing & Prototyping: </span>  Visualize your app before development begins</p>
            </li>

            <li className="border border-t-3 rounded-xl px-4 py-6 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black  hover:scale-[1.02] transition duration-300 flex items-start gap-3">
              <CheckCircle className="text-green-500 w-8 h-8 " />
              <p className="text-md"><span className="font-bold text-xl tracking-wide" style={{ fontFamily: "Valty DEMO" }}>Accessibility First:   </span>  We ensure inclusivity and usability across devices and audiences. </p>
            </li>

            <li className="border border-t-3 rounded-xl px-4 py-6 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black  hover:scale-[1.02] transition duration-300 flex items-start gap-3">
              <CheckCircle className="text-green-500 w-8 h-8 " />
              <p className="text-md"><span className="font-bold text-xl tracking-wide" style={{ fontFamily: "Valty DEMO" }}> User-Centric Design: </span> Crafting flows and interfaces that minimize friction and maximize
                engagement. </p>
            </li>
          </ul>
        </div>
      </section>


      {/* What You Get Section */}
      <section className="relative pb-16 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-5"
            style={{ fontFamily: "Valty DEMO" }}>
            Graphic Design Services
          </h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">

            With Incology Systems, you get designs that are beautiful, functional, and true to your
            brand identity.
          </p>

          <ul className="space-y-6 list-none">

            <li className="border border-t-3 rounded-xl px-4 py-4 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black  hover:scale-[1.02] transition duration-300 flex items-start gap-3">
              <CheckCircle className="text-green-500 w-8 h-8 " />
              <p className="text-md"><span className="font-bold text-xl tracking-wide" style={{ fontFamily: "Valty DEMO" }}>Brand Identity:</span> <br /> Logo design, typography, and brand guidelines.</p>
            </li>

            <li className="border border-t-3 rounded-xl px-4 py-4 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black  hover:scale-[1.02] transition duration-300 flex items-start gap-3">
              <CheckCircle className="text-green-500 w-8 h-8 " />
              <p className="text-md"><span className="font-bold text-xl tracking-wide" style={{ fontFamily: "Valty DEMO" }}> Marketing Collateral:</span> <br />  Posters, brochures, and banners that elevate your campaigns.
              </p>
            </li>

            <li className="border border-t-3 rounded-xl px-4 py-4 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black  hover:scale-[1.02] transition duration-300 flex items-start gap-3">
              <CheckCircle className="text-green-500 w-8 h-8 " />
              <p className="text-md"><span className="font-bold text-xl tracking-wide" style={{ fontFamily: "Valty DEMO" }}>Social Media Assets: </span> <br /> Eye-catching post designs for Instagram, LinkedIn, Facebook, and
                more.</p>
            </li>

            <li className="border border-t-3 rounded-xl px-4 mb-15 py-4 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black  hover:scale-[1.02] transition duration-300 flex items-start gap-3">
              <CheckCircle className="text-green-500 w-8 h-8 " />
              <p className="text-md"><span className="font-bold text-xl tracking-wide" style={{ fontFamily: "Valty DEMO" }}>Tools We Use:</span> <br />   Figma, Adobe Illustrator, Photoshop, Adobe XD.</p>
            </li>
          </ul>

        </div>
        <div className="absolute -bottom-2 left-0 w-full mb-3">
          <div className="relative w-full h-px bg-white/10">
            <div className="absolute inset-x-0 bottom-0 h-8 pb-2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>


    </>
  );

}
export default UiUx