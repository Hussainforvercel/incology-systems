// "use client";
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// const logos = [
//   "./logo1.svg",
//   "/images/logo2.png",
//   "/images/logo3.png",
//   "/images/logo4.png",
//   "/images/logo5.png",
// ];

// const TestimonialSection = () => {

//   const marqueeRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.to(".marquee-track", {
//         x: "-50%",
//         repeat: -1,
//         duration: 30,
//         ease: "linear",
//       });
//     }, marqueeRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <>
// <section className="relative">
  
  
//   <div className="relative overflow-hidden mt-14 pb-20">
//         {/* Gradient fade effect */}
//         <div className="pointer-events-none absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#04070D] to-transparent z-10"></div>
//         <div className="pointer-events-none absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#04070D] to-transparent z-10"></div>

//         <div ref={marqueeRef} className="flex whitespace-nowrap overflow-hidden">
//           <div className="flex gap-16 marquee-track">
//             {logos.concat(logos, logos).map((logo, i) => (
//               <span
//                 key={i}
//                 className="text-gray-400 text-xl font-semibold flex items-center"
//               >
//                 {logo}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>


//        <div className="absolute -bottom-2 left-0 w-full mb-3">
//         <div className="relative w-full h-px bg-white-900">
//           <div className="absolute inset-x-0 bottom-0 h-8 pb-2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
//         </div>
//       </div>
// </section>

//     </>
//   )
// }

// export default TestimonialSection

   

"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const logos = [
  "/logo1.svg",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png",
  "/logo5.png",
];

const TestimonialSection = () => {
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-track", {
        x: "-50%",
        repeat: -1,
        duration: 30,
        ease: "linear",
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative">
      <div className="relative overflow-hidden mt-14 pb-20">
        {/* Gradient fade effect */}
        <div className="pointer-events-none absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#04070D] to-transparent z-10"></div>
        <div className="pointer-events-none absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#04070D] to-transparent z-10"></div>

        <div ref={marqueeRef} className="flex whitespace-nowrap overflow-hidden">
          <div className="flex gap-16 marquee-track">
            {logos.concat(logos, logos).map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Logo ${i + 1}`}
                className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -bottom-2 left-0 w-full mb-3">
        <div className="relative w-full h-px bg-white-900">
          <div className="absolute inset-x-0 bottom-0 h-8 pb-2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
