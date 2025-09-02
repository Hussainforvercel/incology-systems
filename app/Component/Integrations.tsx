

"use client";

import { useEffect, useRef } from "react";
import { FaXTwitter, FaFacebook, FaPinterest, FaInstagram, FaPaypal } from "react-icons/fa6";
import { SiNotion, SiSlack, SiGoogledrive } from "react-icons/si";
import { Plug, Layers } from "lucide-react";

import gsap from "gsap";

// Icons ka data
const row1 = [FaXTwitter, FaFacebook, FaPinterest, SiGoogledrive, FaInstagram];
const row2 = [SiNotion, SiSlack, FaPaypal, SiGoogledrive, FaInstagram];
const row3 = [FaInstagram, FaFacebook, FaPinterest, SiNotion, SiGoogledrive];

export default function IntegrationsSection() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateRow = (ref: HTMLDivElement | null, direction: "left" | "right") => {
      if (!ref) return;
      const distance = ref.scrollWidth / 2;

      gsap.to(ref, {
        x: direction === "left" ? -distance : distance,
        duration: 20,
        ease: "linear",
        repeat: -1,
        modifiers: {
          x: (x) => {
            const mod = parseFloat(x) % distance;
            return `${mod}px`;
          },
        },
      });
    };

    animateRow(row1Ref.current, "right");
    animateRow(row2Ref.current, "left");
    animateRow(row3Ref.current, "right");
  }, []);

  return (
    <section className="relative bg-[#04070D]  text-white min-h-screen flex justify-center items-center px-6">
      <div className="max-w-[1100px] w-full text-center">
        {/* Heading */}

        <div className="inline-flex items-center mt-15 gap-2 text-xs font-medium text-white bg-black/40 px-4 py-1.5 rounded-full border border-neutral-700 shadow-md mb-6">
          <Plug size={14} className="text-white" /> INTEGRATIONS
        </div>
        <h2 className="text-4xl font-bold mt-2">
          Seamless <span className="italic">Integrations</span>
        </h2>
        <p className="text-gray-400 mt-3">
          Interact with all your favorite software without unnecessary fuss
        </p>

        {/* Rows Container */}
        <div
          className="relative mt-12 bg-[#04070D] 
         border-t-4  border-[#4b4b4d],   
          border-x border-white/5
         rounded-t-3xl shadow-xl overflow-hidden 
         mx-auto max-w-[600px] w-full pb-10 mb-16"
        >
          <div className="space-y-10 py-10">

            {/* Row 1 */}
            <div className="overflow-hidden flex justify-center">
              <div ref={row1Ref} className="flex gap-10 w-max">
                {[...row1, ...row1].map((Icon, idx) => (
                  <div
                    key={idx}
                    className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-900/60 border border-gray-800"
                  >
                    <Icon className="w-8 h-8 text-gray-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 */}
            <div className="overflow-hidden flex justify-center">
              <div ref={row2Ref} className="flex gap-10 w-max">
                {[...row2, ...row2].map((Icon, idx) => (
                  <div
                    key={idx}
                    className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-900/60 border border-gray-800"
                  >
                    <Icon className="w-8 h-8 text-gray-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 3 */}
            <div className="overflow-hidden flex justify-center">
              <div ref={row3Ref} className="flex gap-10 w-max">
                {[...row3, ...row3].map((Icon, idx) => (
                  <div
                    key={idx}
                    className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-900/60 border border-gray-800"
                  >
                    <Icon className="w-8 h-8 text-gray-300" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Footer Text */}
        <p className="text-gray-400 mb-15 text-1xl  text-center -bottom-2">
          "Our AI automation plugs into your stack to create a unified, intelligent workflow"
        </p>
      </div>

      {/* White Shadow Separation */}
      <div className="absolute -bottom-3 left-0 w-full ">
        {/* thin line */}
        <div className="relative w-full h-px bg-white/10">
          {/* glow on top of line */}
          <div className="absolute inset-x-0 bottom-0 h-8 pb-2
         bg-gradient-to-t from-white/10 to-transparent pointer-events-none">
          </div>
        </div>
      </div>


    </section>
  );
}