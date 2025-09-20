"use client";
import { motion } from "framer-motion";
import { Libre_Baskerville } from "next/font/google";
import { CheckCircle } from "lucide-react";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function WebDevelopment() {
  return (
    <>
   <div
  >
       <section className="relative w-full h-[70vh] flex items-center justify-center">
        {/* Background Image with grayscale */}
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/originals/d4/81/f3/d481f3c72e283309071f79e01b05c06d.gif" 
            alt="Background"
            className="w-full h-full object-cover blur-sm"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Text Content */}
        <motion.div
          className="relative z-10 max-w-3xl px-6 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white drop-shadow-lg" style={{ fontFamily: "Valty DEMO" }}
          >
            Full-Stack Web Application Development
          </h1>
          <p className={`mt-4 text-md font-bold tracking-wide text-gray-200 ${libreBaskerville.className} `}>
            Your website or web application is often the first interaction customers have with your business.
            At Incology Systems, we ensure that experience is smooth, responsive, and reliable.
          </p>
        </motion.div>
      </section>

      {/* Slider close */}

      {/* Service start */}

      <section className="relative py-16 text-white">
        <div className="max-w-6xl mx-auto px-6 gap-10 items-center">
          {/* Left Content */}
          <div className="flex flex-col pb-10 justify-center items-center ">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ fontFamily: "Valty DEMO" }}>
              What We Do
            </h2>
            <p className="text-gray-300 text-center ">
              Our full-stack approach means you don’t need multiple vendors—we handle <br />
              frontend, backend, database, and deployment all under one roof.
            </p>
          </div>

          {/* Right List */}
          <ul className=" relative space-y-6">
            <li className="border border-t-3 rounded-xl px-4 py-4 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black  hover:scale-[1.02] transition duration-300 flex items-start gap-3">
              <CheckCircle className="text-green-500 w-8 h-8 " />
              <p className="text-md"><span className="font-bold text-xl tracking-wide" style={{ fontFamily: "Valty DEMO" }}>Custom Web Applications:</span> <br /> Internal dashboards, e-commerce solutions, or SaaS platforms aligned with your goals.</p>
            </li>
            <li className="border border-t-3 rounded-xl px-4 py-4 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black  hover:scale-[1.02] transition duration-300 flex items-start gap-3">
              <CheckCircle className="text-green-500 w-8 h-8 " />
              <p className="text-md"><span className="font-bold text-xl tracking-wide" style={{ fontFamily: "Valty DEMO" }}> API Development:</span> <br /> Powerful REST APIs & GraphQL endpoints to connect services, apps, and devices seamlessly.</p>
            </li>
            <li className="border border-t-3 rounded-xl px-4 py-4 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black  hover:scale-[1.02] transition duration-300 flex items-start gap-3">
              <CheckCircle className="text-green-500 w-8 h-8 " />
              <p className="text-md"><span className="font-bold text-xl tracking-wide" style={{ fontFamily: "Valty DEMO" }}> Database Design & Management:</span> <br /> Expertise in MongoDB, MySQL & PostgreSQL for secure and structured growth.</p>
            </li>
            <li className="border border-t-3 rounded-xl px-4 py-4 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black  hover:scale-[1.02] transition duration-300 flex items-start gap-3">
              <CheckCircle className="text-green-500 w-8 h-8 " />
              <p className="text-md"><span className="font-bold text-xl tracking-wide" style={{ fontFamily: "Valty DEMO" }}> Modern Frameworks & Tools:</span> <br /> Node.js, Express, NestJS, Prisma ORM for scalable backends.</p>
            </li>
            <li className="border  bg-gradient-to-bl from-gray-700/40 to-blackb-15 rounded-xl px-4 py-4 border-gray-800 bg-gradient-to-bl from-gray-700/40 to-black  hover:scale-[1.02] transition duration-300 flex items-start gap-3">
              <CheckCircle className="text-green-500 w-8 h-8 " />
              <p className="text-md"> <span className="font-bold text-xl tracking-wide" style={{ fontFamily: "Valty DEMO" }}>Scalability & Security:</span> <br /> Authentication systems, payment gateways, and high-performance apps.</p>
            </li>
          </ul>
        </div>

        <div className="absolute -bottom-2 left-0 w-full mb-3">
          <div className="relative w-full h-px bg-white/10">
            <div className="absolute inset-x-0 bottom-0 h-8 pb-2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>
   </div>

    </>
  )
};

