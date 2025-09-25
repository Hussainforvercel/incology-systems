<<<<<<< HEAD
=======

>>>>>>> ae812c919de218668ac6aaa9eaa86d1974080e8f
"use client";
import Link from "next/link";
import { FaWordpress } from "react-icons/fa";

const portfolioItems = [
  {
    id: 1,
    url: "https://kitchenunionsg.com/",
    img: "/images/wordpress1.png",
  },
  {
    id: 2,
    url: "https://bytelah.com/",
    img: "/images/wordpress2.png",
  },
  {
    id: 3,
    url: "https://megazonetechnical.com/",
    img: "/images/wordpress3.png",
  },
];

export default function WordpressSection() {
  return (
    <section className="relative text-white py-20 px-4 bg-[#04070D]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <button className="inline-flex items-center gap-2 px-5 py-1 rounded-full bg-[#0D1018] border border-white/10 text-xs tracking-wide text-white mb-4">
            <FaWordpress className="text-white text-lg" />
            WORDPRESS WORK
          </button>
          <h1 className="text-5xl font-semibold text-white mt-2" style={{fontFamily:"Valty DEMO"}}>
            Featured WordPress Projects
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            Explore some of the WordPress projects we’ve designed and developed
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-[320px] lg:w-[360px] rounded-2xl overflow-hidden shadow-inner shadow-[rgba(207,231,255,0.2)]
                         border-t-[8px] border-x-[3px] border-[#272a35] group cursor-pointer bg-[#0D1018]"
            >
              <Link href={item.url} target="_blank" rel="noopener noreferrer">
                <div
                  className="h-[520px] bg-cover bg-top transition-all duration-[6000ms] ease-linear group-hover:bg-bottom p-6 flex items-end"
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  <span className="text-white text-sm font-medium bg-black/40 px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition duration-500">
                    View Website
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/wordpressportfolio"
            className="inline-block px-8 py-3 rounded-full bg-[#0D1018] border border-white/10 text-white text-sm font-medium tracking-wide hover:bg-[#1a1d29] transition"
          >
            View All WordPress Work
          </Link>
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="absolute -bottom-2 left-0 w-full mb-3">
        <div className="relative w-full h-px bg-white/10">
          <div className="absolute inset-x-0 bottom-0 h-8 pb-2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}

