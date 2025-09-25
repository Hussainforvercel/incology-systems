

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useRef } from "react";

/* ---------------- InfoCard ---------------- */
function InfoCard({ title, text, image, reverse }: any) {
  return (
    <div
      className={`grid md:grid-cols-2 bg-[#04070D] rounded-2xl overflow-hidden shadow-lg my-12 ${reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
    >
      <div className="relative h-[40vh] md:h-auto overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="flex flex-col justify-center px-8 py-12 text-white">
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <p className="text-lg text-gray-300 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

/* ---------------- MenuSplit ---------------- */
function MenuSplit(props: any) {
  const { title, items, image, reverse, extraText } = props;
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-150px", "150px"]);

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 min-h-[80vh] overflow-hidden bg-[#1c1c1c] ${reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
    >
      {/* Image */}
      <div className="relative h-[70vh] md:h-auto overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          style={{ y }}
          className="absolute -top-[20%] left-0 w-full h-[200%] object-cover object-center will-change-transform"
        />
      </div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center bg-[#04070D] text-white px-8 md:px-16 py-12 min-h-[70vh]"
      >
        <div className="w-full">
          <h3 className="text-3xl font-bold mb-8">{title}</h3>

          {items && (
            <ul className="space-y-4">
              {items.map((item: any, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white mt-1" />
                  <p className="leading-relaxed">
                    <span className="font-semibold">{item.title}</span>{" "}
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          )}

          {extraText && (
            <p className="mt-6 text-lg leading-relaxed">{extraText}</p>
          )}
        </div>
      </motion.div>
    </div>
  );
}

/* ---------------- Main Section ---------------- */
export default function WebDevServices() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-200px", "200px"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]); // Zoom effect

  return (
    <section className="bg-[#04070D] relative">
      {/* Hero with Parallax */}
      <div
        ref={heroRef}
        className="relative h-[70vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      >
        {/* Background Image with motion (parallax + zoom) */}
        <motion.img
          src="/images/webdevelopment3.jpg"
          alt="Web Development Background"
          style={{ y, scale }}
          className="absolute inset-0 w-full h-[200%] object-cover will-change-transform"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">
          Mobile Application Development 
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
           Mobile is where your customers spend most of their time. We design and build apps that bring your  business into their hands—literally.
          </p>
        </div>
      </div>

      {/* What We Do */}
      <MenuSplit
        title="What We Do"
        image="/images/mobileapp1.jpg"
        items={[
         {
            title: "Performance-Optimized Apps:",
            text: "Fast load times, smooth animations, and reliable offline functionality.",
          },
          {
            title: "Integration Ready:",
            text: "From APIs to payment systems, we connect your app with everything it needs.",
          },
          {
            title: "User-Centric Features:",
            text: "Push notifications, chat systems, geolocation, in-app purchases, and more.",
          },
        ]}
      />

      {/* Backend Section */}
      <MenuSplit
        reverse
        title="Technologies We Use: "
        image="/images/mobileapp.jpg"
        items={[
         {
             title: "Flutter:",
             text: " Build cross-platform apps with a single codebase, cutting costs while ensuring high performance.",
           },
           {
             title: " React Native:",
             text: "Create near-native experiences for iOS and Android, with flexible integration into your ecosystem.",
           },
        ]}
         extraText=" Whether you need a business app, an e-commerce platform, or a large-scale enterprise solution, we deliver mobile applications built to scale. "
     />

      {/* White Shadow Separation */}
      <div className="absolute -bottom-2 left-0 w-full">
        <div className="relative w-full h-px bg-white/10">
          <div className="absolute inset-x-0 bottom-0 h-8 pb-2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}