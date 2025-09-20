// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { CheckCircle } from "lucide-react";
// import { useRef } from "react";

// /* ---------------- MenuSplit ---------------- */
// function MenuSplit(props: any) {
//   const { title, items, image, reverse, extraText } = props;
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ["-150px", "150px"]);

//   return (
//     <div
//       ref={ref}
//       className={`grid md:grid-cols-2 min-h-[80vh] overflow-hidden bg-[#1c1c1c] ${reverse ? "md:[&>*:first-child]:order-2" : ""
//         }`}
//     >
//       {/* Image */}
//       <div className="relative h-[70vh] md:h-auto overflow-hidden">
//         <motion.img
//           src={image}
//           alt={title}
//           style={{ y }}
//           className="absolute -top-[20%] left-0 w-full h-[200%] object-cover object-center will-change-transform"
//         />
//       </div>

//       {/* Text */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="flex items-center bg-[#04070D] text-white px-8 md:px-16 py-12 min-h-[70vh]"
//       >
//         <div className="w-full">
//           <h3 className="text-3xl font-bold mb-8">{title}</h3>

//           {items && (
//             <ul className="space-y-4">
//               {items.map((item: any, idx: number) => (
//                 <li key={idx} className="flex items-start gap-3">
//                   <CheckCircle className="w-5 h-5 text-white mt-1" />
//                   <p className="leading-relaxed">
//                     <span className="font-semibold">{item.title}</span>{" "}
//                     {item.text}
//                   </p>
//                 </li>
//               ))}
//             </ul>
//           )}

//           {extraText && (
//             <p className="mt-6 text-lg leading-relaxed">{extraText}</p>
//           )}
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// /* ---------------- Main Section ---------------- */
// export default function MobileDevServices() {
//   const heroRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start end", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ["-200px", "200px"]);
//   const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]); // Zoom effect

//   return (
//     <section className="bg-[#04070D] relative">
//       {/* Hero with Parallax */}
//       <div
//         ref={heroRef}
//         className="relative h-[80vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden"
//       >
//         {/* Background Image with motion (parallax + zoom) */}
//         <motion.img
//           src="/images/webdevelopment4.jpg"
//           alt="Mobile App Development Background"
//           style={{ y, scale }}
//           className="absolute inset-0 w-full h-full object-cover will-change-transform"
//         />

//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/60" />

//         {/* Content */}
//         <div className="relative z-10 max-w-4xl">
//           <h2 className="text-3xl md:text-6xl font-bold text-white mb-6">
//             Mobile Application Development
//           </h2>
//           <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
//             Mobile is where your customers spend most of their time. We design and build apps that bring your  business into their hands—literally.
//           </p>
//         </div>
//       </div>

//       {/* What You Get: */}
//       <MenuSplit
//         title="What You Get:"
//         image="/images/mobileapp.jpeg"
//         items={[
//           {
//             title: "Performance-Optimized Apps:",
//             text: "Fast load times, smooth animations, and reliable offline functionality.",
//           },
//           {
//             title: "API Development:",
//             text: "We create powerful REST APIs and GraphQL endpoints to connect services, apps, and devices seamlessly.",
//           },
//           {
//             title: "Integration Ready:",
//             text: "From APIs to payment systems, we connect your app with everything it needs.",
//           },
//           {
//             title: "User-Centric Features:",
//             text: " Push notifications, chat systems, geolocation, in-app purchases, and more.",
//           },

//         ]}
//       />

//       {/* Backend Section */}
//       <MenuSplit
//         reverse
//         title="Technologies We Use:"
//         image="data:image/jpeg;base64,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"
//         items={[
//           {
//             title: "Flutter:",
//             text: " Build cross-platform apps with a single codebase, cutting costs while ensuring high performance.",
//           },
//           {
//             title: " React Native:",
//             text: "Create near-native experiences for iOS and Android, with flexible integration into your ecosystem.",
//           },
//         ]}
//         extraText=" Whether you need a business app, an e-commerce platform, or a large-scale enterprise solution, we deliver mobile applications built to scale. "
//       />

//       {/* White Shadow Separation */}
//       <div className="absolute -bottom-2 left-0 w-full">
//         <div className="relative w-full h-px bg-white/10">
//           <div className="absolute inset-x-0 bottom-0 h-8 pb-2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
//         </div>
//       </div>
//     </section>
//   );
// }








// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { CheckCircle } from "lucide-react";
// import { useRef } from "react";

// /* ---------------- MenuSplit ---------------- */
// function MenuSplit(props: any) {
//   const { title, items, image, reverse, extraText } = props;
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ["-150px", "150px"]);

//   return (
//     <div
//       ref={ref}
//       className={`grid md:grid-cols-2 min-h-[80vh] overflow-hidden bg-[#1c1c1c] ${
//         reverse ? "md:[&>*:first-child]:order-2" : ""
//       }`}
//     >
//       {/* Image */}
//       <div className="relative h-[70vh] md:h-auto overflow-hidden">
//         <motion.img
//           src={image}
//           alt={title}
//           style={{ y }}
//           className="absolute -top-[20%] left-0 w-full h-[200%] object-cover object-center will-change-transform"
//         />
//       </div>

//       {/* Text */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="flex items-center bg-[#04070D] text-white px-8 md:px-16 py-12 min-h-[70vh]"
//       >
//         <div className="w-full">
//           <h3 className="text-3xl font-bold mb-8">{title}</h3>

//           {items && (
//             <ul className="space-y-4">
//               {items.map((item: any, idx: number) => (
//                 <li key={idx} className="flex items-start gap-3">
//                   <CheckCircle className="w-5 h-5 text-white mt-1" />
//                   <p className="leading-relaxed">
//                     <span className="font-semibold">{item.title}</span>{" "}
//                     {item.text}
//                   </p>
//                 </li>
//               ))}
//             </ul>
//           )}

//           {extraText && (
//             <p className="mt-6 text-lg leading-relaxed">{extraText}</p>
//           )}
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// /* ---------------- Main Section ---------------- */
// export default function MobileDevServices() {
//   const heroRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start end", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ["-200px", "200px"]);
//   const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]); // Zoom effect

//   return (
//     <section className="bg-[#04070D] relative">
//       {/* Hero with Parallax */}
//       <div
//         ref={heroRef}
//         className="relative h-[70vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden"
//       >
//         {/* Background Image with motion (parallax + zoom) */}
//        <motion.img
//           src="/images/webdevelopment4.jpg"
//           alt="Web Development Background"
//           style={{ y, scale }}
//           className="absolute inset-0 w-full h-[200%] object-cover will-change-transform"
//         />

//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/60" />

//         {/* Content */}
//         <div className="relative z-10 max-w-3xl">
//           <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">
//             📱 Mobile Application Development
//           </h2>

//           <p className="text-gray-300 text-base md:text-lg leading-relaxed">
//             Mobile is where your customers spend most of their time. 
//             We design and build apps that bring your business into their hands—literally.
//           </p>
//         </div>
//       </div>

//       {/* What You Get */}
//       <MenuSplit
//         title="What You Get:"
//         image="data:image/jpeg;base64,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"
//         items={[
//           {
//             title: "Performance-Optimized Apps:",
//             text: "Fast load times, smooth animations, and reliable offline functionality.",
//           },
//           {
//             title: "API Development:",
//             text: "We create powerful REST APIs and GraphQL endpoints to connect services, apps, and devices seamlessly.",
//           },
//           {
//             title: "Integration Ready:",
//             text: "From APIs to payment systems, we connect your app with everything it needs.",
//           },
//           {
//             title: "User-Centric Features:",
//             text: "Push notifications, chat systems, geolocation, in-app purchases, and more.",
//           },
//         ]}
//       />

//       {/* Technologies Section */}
//       <MenuSplit
//         reverse
//         title="Technologies We Use:"
//         image="data:image/jpeg;base64,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"
//         items={[
//           {
//             title: "Performance-Optimized Apps:",
//             text: "Fast load times, smooth animations, and reliable offline functionality.",
//           },
//           {
//             title: "API Development:",
//             text: "We create powerful REST APIs and GraphQL endpoints to connect services, apps, and devices seamlessly.",
//           },
//           {
//             title: "Integration Ready:",
//             text: "From APIs to payment systems, we connect your app with everything it needs.",
//           },
//           {
//             title: "User-Centric Features:",
//             text: "Push notifications, chat systems, geolocation, in-app purchases, and more.",
//           },
//       />

//       {/* White Shadow Separation */}
//       <div className="absolute -bottom-2 left-0 w-full">
//         <div className="relative w-full h-px bg-white/10">
//           <div className="absolute inset-x-0 bottom-0 h-8 pb-2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
//         </div>
//       </div>
//     </section>
//   );
// }



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