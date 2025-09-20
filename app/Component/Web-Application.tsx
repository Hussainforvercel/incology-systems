

// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { CheckCircle } from "lucide-react";
// import { useRef } from "react";

// function MenuSplit({ title, items, image, reverse }) {
//   const ref = useRef(null);

//   // Track scroll progress
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   // Parallax movement for image
//   const y = useTransform(scrollYProgress, [0, 1], ["-120px", "120px"]);

//   return (
//     <div
//       ref={ref}
//       className={`grid md:grid-cols-2 min-h-[80vh] overflow-hidden bg-[#1c1c1c] ${
//         reverse ? "md:[&>*:first-child]:order-2" : ""
//       }`}
//     >
//       {/* Image container */}
//       <div className="relative h-[70vh] md:h-auto overflow-hidden">
//         <motion.img
//           src={image}
//           alt={title}
//           style={{ y }}
//           className="absolute -top-[20%] left-0 w-full h-[170%] object-cover object-center will-change-transform"
//         />
//       </div>

//       {/* Text block */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="flex items-center bg-[#1c1c1c] text-white px-8 md:px-16 py-12 min-h-[70vh]"
//       >
//         <div className="w-full">
//           <h3 className="text-3xl font-bold mb-8">{title}</h3>
//           <ul className="space-y-4">
//             {items.map((item, idx) => (
//               <li key={idx} className="flex items-start gap-3">
//                 <CheckCircle className="w-5 h-5 text-amber-400 mt-1" />
//                 <p className="leading-relaxed">
//                   <span className="font-semibold">{item.title}</span> {item.text}
//                 </p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default function WebDevServices() {
//   return (
//     <section className="bg-[#1c1c1c]">
//       {/* Hero */}
//       <div className="h-[60vh] bg-gray-800 flex items-center justify-center">
//         <h2 className="text-4xl md:text-5xl font-bold text-white">
//           Web Development Services
//         </h2>
//       </div>

//       <MenuSplit
//         title="What You Need To Know About Frontend Development"
//         image="/images/webdevelopment1.jpg"
//         items={[
//           {
//             title: "Custom Web Applications:",
//             text: "Whether it’s an internal dashboard, e-commerce solution, or SaaS platform, we build web apps that align perfectly with your goals.",
//           },
//           {
//             title: "API Development:",
//             text: "We create powerful REST APIs and GraphQL endpoints to connect services, apps, and devices seamlessly.",
//           },
//           {
//             title: "Database Design & Management:",
//             text: "Expertise in MongoDB, MySQL, and PostgreSQL ensures your data is secure, fast, and structured for growth.",
//           },
//         ]}
//       />

//       <MenuSplit
//         reverse
//         title="Scalable & Secure Backend Systems"
//         image="/images/webdevelopment2.jpg"
//         items={[
//           {
//             title: "Modern Frameworks & Tools:",
//             text: "We use Node.js, Express, NestJS, Prisma ORM to craft scalable, maintainable backends.",
//           },
//           {
//             title: "Scalability & Security:",
//             text: "From authentication systems to payment gateways, our apps are engineered for performance and reliability.",
//           },
//           {
//             title: "Cloud Ready:",
//             text: "Optimized for AWS, Azure, and GCP for seamless deployment and scaling.",
//           },
//         ]}
//       />
//     </section>
//   );
// }



// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { CheckCircle } from "lucide-react";
// import { useRef } from "react";

// function MenuSplit(props: any) {
//   const { title, items, image, reverse } = props;
//   const ref = useRef(null);

//   // Track scroll progress
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   // Parallax movement for image
//   const y = useTransform(scrollYProgress, [0, 1], ["-120px", "120px"]);

//   return (
//     <div
//       ref={ref}
//       className={`grid md:grid-cols-2 min-h-[80vh] overflow-hidden bg-[#1c1c1c] ${
//         reverse ? "md:[&>*:first-child]:order-2" : ""
//       }`}
//     >
//       {/* Image container */}
//       <div className="relative h-[70vh] md:h-auto overflow-hidden">
//         <motion.img
//           src={image}
//           alt={title}
//           style={{ y }}
//           className="absolute -top-[20%] left-0 w-full h-[170%] object-cover object-center will-change-transform"
//         />
//       </div>

//       {/* Text block */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="flex items-center bg-[#1c1c1c] text-white px-8 md:px-16 py-12 min-h-[70vh]"
//       >
//         <div className="w-full">
//           <h3 className="text-3xl font-bold mb-8">{title}</h3>
//           <ul className="space-y-4">
//             {items.map((item: any, idx: number) => (
//               <li key={idx} className="flex items-start gap-3">
//                 <CheckCircle className="w-5 h-5 text-amber-400 mt-1" />
//                 <p className="leading-relaxed">
//                   <span className="font-semibold">{item.title}</span> {item.text}
//                 </p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default function WebDevServices() {
//   return (
//     <section className="bg-[#1c1c1c]">
//       {/* Hero */}
//       <div className="h-[60vh] bg-gray-800 flex items-center justify-center">
//         <h2 className="text-4xl md:text-5xl font-bold text-white">
//           Web Development Services
//         </h2>
//       </div>

//       <MenuSplit
//         title="What You Need To Know About Frontend Development"
//         image="/images/webdevelopment1.jpg"
//         items={[
//           {
//             title: "Custom Web Applications:",
//             text: "Whether it’s an internal dashboard, e-commerce solution, or SaaS platform, we build web apps that align perfectly with your goals.",
//           },
//           {
//             title: "API Development:",
//             text: "We create powerful REST APIs and GraphQL endpoints to connect services, apps, and devices seamlessly.",
//           },
//           {
//             title: "Database Design & Management:",
//             text: "Expertise in MongoDB, MySQL, and PostgreSQL ensures your data is secure, fast, and structured for growth.",
//           },
//         ]}
//       />

//       <MenuSplit
//         reverse
//         title="Scalable & Secure Backend Systems"
//         image="/images/webdevelopment2.jpg"
//         items={[
//           {
//             title: "Modern Frameworks & Tools:",
//             text: "We use Node.js, Express, NestJS, Prisma ORM to craft scalable, maintainable backends.",
//           },
//           {
//             title: "Scalability & Security:",
//             text: "From authentication systems to payment gateways, our apps are engineered for performance and reliability.",
//           },
//           {
//             title: "Cloud Ready:",
//             text: "Optimized for AWS, Azure, and GCP for seamless deployment and scaling.",
//           },
//         ]}
//       />
//     </section>
//   );
// }






// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { CheckCircle } from "lucide-react";
// import { useRef } from "react";

// // ---------------- MenuSplit Component ----------------
// function MenuSplit(props: any) {
//   const { title, items, image, reverse, extraText } = props;
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ["-120px", "120px"]);

//   return (
//     <div
//       ref={ref}
//       className={`grid md:grid-cols-2 min-h-[80vh] overflow-hidden bg-[#1c1c1c] ${
//         reverse ? "md:[&>*:first-child]:order-2" : ""
//       }`}
//     >
//       {/* Image container */}
//       <div className="relative h-[70vh] md:h-auto overflow-hidden">
//         <motion.img
//           src={image}
//           alt={title}
//           style={{ y }}
//           className="absolute -top-[20%] left-0 w-full h-[170%] object-cover object-center will-change-transform"
//         />
//       </div>

//       {/* Text block */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="flex items-center bg-[#1c1c1c] text-white px-8 md:px-16 py-12 min-h-[70vh]"
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

// // ---------------- Main Section ----------------
// export default function WebDevServices() {
//   return (
//     <section className="bg-[#1c1c1c]">
//       {/* Hero */}
//       <div className="h-[60vh] bg-gray-800 flex flex-col items-center justify-center text-center px-6">
//         <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//           🌐 Full-Stack Web Application Development
//         </h2>
//         <p className="max-w-2xl text-gray-300 text-lg">
//           Your website or web application is often the first interaction
//           customers have with your business. At Incology Systems, we ensure that
//           experience is smooth, responsive, and reliable.
//         </p>
//       </div>

//       {/* What We Do */}
//       <MenuSplit
//         title="What We Do"
//         image="/images/webdevelopment1.jpg"
//         items={[
//           {
//             title: "Custom Web Applications:",
//             text: "Whether it’s an internal dashboard, e-commerce solution, or SaaS platform, we build web apps that align perfectly with your goals.",
//           },
//           {
//             title: "API Development:",
//             text: "We create powerful REST APIs and GraphQL endpoints to connect services, apps, and devices seamlessly.",
//           },
//           {
//             title: "Database Design & Management:",
//             text: "Expertise in MongoDB, MySQL, and PostgreSQL ensures your data is secure, fast, and structured for growth.",
//           },
//         ]}
//       />

//       {/* Backend Section */}
//       <MenuSplit
//         reverse
//         title="Scalable & Secure Backend Systems"
//         image="/images/webdevelopment2.jpg"
//         items={[
//           {
//             title: "Modern Frameworks & Tools:",
//             text: "We use Node.js, Express, NestJS, Prisma ORM to craft scalable, maintainable backends.",
//           },
//           {
//             title: "Scalability & Security:",
//             text: "From authentication systems to payment gateways, our apps are engineered for performance and reliability.",
//           },
//         ]}
//         extraText="👉 Our full-stack approach means you don’t need multiple vendors—we handle frontend, backend, database, and deployment all under one roof."
//       />
//     </section>
//   );
// }










// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { CheckCircle } from "lucide-react";
// import { useRef } from "react";

// /* ---------------- InfoCard ---------------- */
// function InfoCard({ title, text, image, reverse }: any) {
//   return (
//     <div
//       className={`grid md:grid-cols-2 bg-[#1c1c1c] rounded-2xl overflow-hidden shadow-lg my-12 ${
//         reverse ? "md:[&>*:first-child]:order-2" : ""
//       }`}
//     >
//       <div className="relative h-[40vh] md:h-auto overflow-hidden">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-full object-cover object-center"
//         />
//       </div>

//       <div className="flex flex-col justify-center px-8 py-12 text-white">
//         <h3 className="text-3xl font-bold mb-4">{title}</h3>
//         <p className="text-lg text-gray-300 leading-relaxed">{text}</p>
//       </div>
//     </div>
//   );
// }

// /* ---------------- MenuSplit ---------------- */
// function MenuSplit(props: any) {
//   const { title, items, image, reverse, extraText } = props;
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ["-120px", "120px"]);

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
//           className="absolute -top-[20%] left-0 w-full h-[170%] object-cover object-center will-change-transform"
//         />
//       </div>

//       {/* Text */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="flex items-center bg-[#1c1c1c] text-white px-8 md:px-16 py-12 min-h-[70vh]"
//       >
//         <div className="w-full">
//           <h3 className="text-3xl font-bold mb-8">{title}</h3>

//           {items && (
//             <ul className="space-y-4">
//               {items.map((item: any, idx: number) => (
//                 <li key={idx} className="flex items-start gap-3">
//                   <CheckCircle className="w-5 h-5 text-white mt-1" />
//                   <p className="leading-relaxed">
//                     <span className="font-semibold">{item.title}</span> {item.text}
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
// export default function WebDevServices() {
//   return (
//     <section className="bg-[#1c1c1c]">
//       {/* Hero */}
//       <div className="h-[60vh] bg-gray-800 flex flex-col items-center justify-center text-center px-6">
//         <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">
//           🌐 Web Application Development
//         </h2>
//       </div>

//       {/* Card below hero */}
//       <InfoCard
//         title="Why Your Web Presence Matters"
//         text="Your website or web application is often the first interaction customers have with your business. At Incology Systems, we ensure that experience is smooth, responsive, and reliable."
//         image="/images/web-intro.jpg"
//       />

//       {/* What We Do */}
//       <MenuSplit
//         title="What We Do"
//         image="/images/webdevelopment1.jpg"
//         items={[
//           {
//             title: "Custom Web Applications:",
//             text: "Whether it’s an internal dashboard, e-commerce solution, or SaaS platform, we build web apps that align perfectly with your goals.",
//           },
//           {
//             title: "API Development:",
//             text: "We create powerful REST APIs and GraphQL endpoints to connect services, apps, and devices seamlessly.",
//           },
//           {
//             title: "Database Design & Management:",
//             text: "Expertise in MongoDB, MySQL, and PostgreSQL ensures your data is secure, fast, and structured for growth.",
//           },
//         ]}
//       />

//       {/* Backend Section */}
//       <MenuSplit
//         reverse
//         title="Scalable & Secure Backend Systems"
//         image="/images/webdevelopment2.jpg"
//         items={[
//           {
//             title: "Modern Frameworks & Tools:",
//             text: "We use Node.js, Express, NestJS, Prisma ORM to craft scalable, maintainable backends.",
//           },
//           {
//             title: "Scalability & Security:",
//             text: "From authentication systems to payment gateways, our apps are engineered for performance and reliability.",
//           },
//         ]}
//         extraText="👉 Our full-stack approach means you don’t need multiple vendors—we handle frontend, backend, database, and deployment all under one roof."
//       />
//     </section>
//   );
// }





// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { CheckCircle } from "lucide-react";
// import { useRef } from "react";

// /* ---------------- InfoCard ---------------- */
// function InfoCard({ title, text, image, reverse }: any) {
//   return (
//     <div
//       className={`grid md:grid-cols-2 bg-[#1c1c1c] rounded-2xl overflow-hidden shadow-lg my-12 ${
//         reverse ? "md:[&>*:first-child]:order-2" : ""
//       }`}
//     >
//       <div className="relative h-[40vh] md:h-auto overflow-hidden">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-full object-cover object-center"
//         />
//       </div>

//       <div className="flex flex-col justify-center px-8 py-12 text-white">
//         <h3 className="text-3xl font-bold mb-4">{title}</h3>
//         <p className="text-lg text-gray-300 leading-relaxed">{text}</p>
//       </div>
//     </div>
//   );
// }

// /* ---------------- MenuSplit ---------------- */
// function MenuSplit(props: any) {
//   const { title, items, image, reverse, extraText } = props;
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ["-120px", "120px"]);

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
//           className="absolute -top-[20%] left-0 w-full h-[170%] object-cover object-center will-change-transform"
//         />
//       </div>

//       {/* Text */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="flex items-center bg-[#1c1c1c] text-white px-8 md:px-16 py-12 min-h-[70vh]"
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
// export default function WebDevServices() {
//   const heroRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start end", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ["-120px", "120px"]);

//   return (
//     <section className="bg-[#1c1c1c]">
//       {/* Hero with Parallax */}
//       <div
//         ref={heroRef}
//         className="relative h-[70vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden"
//       >
//         {/* Background Image with motion (parallax) */}
//         <motion.img
//           src="/images/webdevelopment3.jpg"
//           alt="Web Development Background"
//           style={{ y }}
//           className="absolute inset-0 w-full h-[170%] object-cover"
//         />

//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/60" />

//         {/* Content */}
//         <div className="relative z-10 max-w-3xl">
//           <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">
//             🌐 Web Application Development
//           </h2>
//           <h3 className="text-lg md:text-2xl text-gray-200 mb-4">
//             Building scalable, secure, and modern web solutions
//           </h3>
//           <p className="text-gray-300 text-base md:text-lg leading-relaxed">
//             From frontend to backend, our team crafts digital experiences that
//             engage users, boost efficiency, and drive growth. Whether it’s
//             custom apps, APIs, or databases—we’ve got you covered.
//           </p>
//         </div>
//       </div>

//       {/* What We Do */}
//       <MenuSplit
//         title="What We Do"
//         image="/images/webdevelopment1.jpg"
//         items={[
//           {
//             title: "Custom Web Applications:",
//             text: "Whether it’s an internal dashboard, e-commerce solution, or SaaS platform, we build web apps that align perfectly with your goals.",
//           },
//           {
//             title: "API Development:",
//             text: "We create powerful REST APIs and GraphQL endpoints to connect services, apps, and devices seamlessly.",
//           },
//           {
//             title: "Database Design & Management:",
//             text: "Expertise in MongoDB, MySQL, and PostgreSQL ensures your data is secure, fast, and structured for growth.",
//           },
//         ]}
//       />

//       {/* Backend Section */}
//       <MenuSplit
//         reverse
//         title="Scalable & Secure Backend Systems"
//         image="/images/webdevelopment2.jpg"
//         items={[
//           {
//             title: "Modern Frameworks & Tools:",
//             text: "We use Node.js, Express, NestJS, Prisma ORM to craft scalable, maintainable backends.",
//           },
//           {
//             title: "Scalability & Security:",
//             text: "From authentication systems to payment gateways, our apps are engineered for performance and reliability.",
//           },
//         ]}
//         extraText="👉 Our full-stack approach means you don’t need multiple vendors—we handle frontend, backend, database, and deployment all under one roof."
//       />
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
      className={`grid md:grid-cols-2 bg-[#1c1c1c] rounded-2xl overflow-hidden shadow-lg my-12 ${reverse ? "md:[&>*:first-child]:order-2" : ""
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
          src="/images/webdevelopment4.jpg"
          alt="Web Development Background"
          style={{ y, scale }}
          className="absolute inset-0 w-full h-[200%] object-cover will-change-transform"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">
            🌐 Full-Stack Web Application Development
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Your website or web application is often the first interaction customers have with your business.
            At Incology Systems, we ensure that experience is smooth, responsive, and reliable.
          </p>
        </div>
      </div>

      {/* What We Do */}
      <MenuSplit
        title="What We Do"
        image="/images/webdevelopment1.jpg"
        items={[
          {
            title: "Custom Web Applications:",
            text: "Whether it’s an internal dashboard, e-commerce solution, or SaaS platform, we build web apps that align perfectly with your goals.",
          },
          {
            title: "API Development:",
            text: "We create powerful REST APIs and GraphQL endpoints to connect services, apps, and devices seamlessly.",
          },
          {
            title: "Database Design & Management:",
            text: "Expertise in MongoDB, MySQL, and PostgreSQL ensures your data is secure, fast, and structured for growth.",
          },
        ]}
      />

      {/* Backend Section */}
      <MenuSplit
        reverse
        title="Scalable & Secure Backend Systems"
        image="/images/webdevelopment2.jpg"
        items={[
          {
            title: "Modern Frameworks & Tools:",
            text: "We use Node.js, Express, NestJS, Prisma ORM to craft scalable, maintainable backends.",
          },
          {
            title: "Scalability & Security:",
            text: "From authentication systems to payment gateways, our apps are engineered for performance and reliability.",
          },
        ]}
        extraText="👉 Our full-stack approach means you don’t need multiple vendors—we handle frontend, backend, database, and deployment all under one roof."
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


















































// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { CheckCircle } from "lucide-react";
// import { useRef } from "react";







// function MenuSplit(props: any) {
//   const { title, items, image, reverse, extraText } = props;
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });
//   const y = useTransform(scrollYProgress, [0, 1], ["-120px", "120px"]);

//   return (
//     <div
//       ref={ref}
//       className={`grid md:grid-cols-2 min-h-[80vh] overflow-hidden bg-[#1c1c1c] ${
//         reverse ? "md:[&>*:first-child]:order-2" : ""
//       }`}
//     >
//       {/* Left Image */}
//       <div className="relative h-[70vh] md:h-auto overflow-hidden">
//         <motion.img
//           src={image}
//           alt={title}
//           style={{ y }}
//           className="absolute -top-[20%] left-0 w-full h-[170%] object-cover object-center will-change-transform"
//         />
//       </div>

//       {/* Right Text Block */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="flex items-center bg-[#1c1c1c] text-white px-8 md:px-16 py-12 min-h-[70vh]"
//       >
//         <div className="w-full">
//           <h3 className="text-3xl font-bold mb-8">{title}</h3>

//           {items && (
//             <div className="grid md:grid-cols-2 gap-8">
//               {/* Left column → first 3 points */}
//               <ul className="space-y-4">
//                 {items.slice(0, 3).map((item: any, idx: number) => (
//                   <li key={idx} className="flex items-start gap-3">
//                     <CheckCircle className="w-5 h-5 text-white mt-1" />
//                     <p className="leading-relaxed">
//                       <span className="font-semibold">{item.title}</span>{" "}
//                       {item.text}
//                     </p>
//                   </li>
//                 ))}
//               </ul>

//               {/* Right column → remaining 2 points */}
//               <ul className="space-y-4">
//                 {items.slice(3).map((item: any, idx: number) => (
//                   <li key={idx} className="flex items-start gap-3">
//                     <CheckCircle className="w-5 h-5 text-white mt-1" />
//                     <p className="leading-relaxed">
//                       <span className="font-semibold">{item.title}</span>{" "}
//                       {item.text}
//                     </p>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {extraText && (
//             <p className="mt-6 text-lg leading-relaxed">{extraText}</p>
//           )}
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default MenuSplit;



