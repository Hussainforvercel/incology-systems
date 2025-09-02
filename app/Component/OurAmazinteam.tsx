"use client";
import { Users } from "lucide-react";

import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

const team = [
  {
    name: "Ikta Sollork",
    role: "Founder / Data Analyst",
    img: "images/300.jpeg ",
    socials: {
      twitter: "https://twitter.com/ikta",
      instagram: "https://instagram.com/ikta",
      linkedin: "https://linkedin.com/in/ikta",
    },
  },
  {
    name: "Gwen Chase",
    role: "AI Strategist",
    img: "images/100 (3).jpeg ",
    socials: {
      twitter: "https://twitter.com/gwen",
      instagram: "https://instagram.com/gwen",
      linkedin: "https://linkedin.com/in/gwen",
    },
  },
  {
    name: "James Bond",
    role: "Automation Engineer",
    img: "images/100.jpeg ",
    socials: {
      twitter: "https://twitter.com/jamesbond",
      instagram: "https://instagram.com/jamesbond",
      linkedin: "https://linkedin.com/in/jamesbond",
    },
  },
  {
    name: "Jenny Will",
    role: "SEO / Others",
    img: "images/100 (1).jpeg ",
    socials: {
      twitter: "https://twitter.com/jenny",
      instagram: "https://instagram.com/jenny",
      linkedin: "https://linkedin.com/in/jenny",
    },
  },
  {
    name: "Jan Wink",
    role: "Integration Specialist",
    img: "images/100 (2).jpeg ",
    socials: {
      twitter: "https://twitter.com/jan",
      instagram: "https://instagram.com/jan",
      linkedin: "https://linkedin.com/in/jan",
    },
  },
  {
    name: "Lilli Math",
    role: "Client Manager",
    img: "images/100 (3).jpeg ",
    socials: {
      twitter: "https://twitter.com/lilli",
      instagram: "https://instagram.com/lilli",
      linkedin: "https://linkedin.com/in/lilli",
    },
  },
];

export default function TeamSection() {
  return (
    <section className="relative bg-[#04070D] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* TOP BUTTON */}
        <div className="mb-6 inline-block">
  <span className="px-5 py-2 rounded-full text-sm font-medium bg-[#0B0F17] border border-white/10 text-gray-300 inline-flex items-center gap-2">
    <Users size={16} className="text-white" /> OUR AMAZING TEAM
  </span>
</div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Get to Know <span className="italic text-gray-300">Us</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Everything you need to collaborate, create, and scale, all in one
          place.
        </p>

        {/* Grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-[#0B0F17] h-[200px] rounded-2xl border border-white/10 p-6 flex items-center justify-between gap-6 hover:border-white/20 transition"
            >
              {/* Left Side: Text + Socials */}
              <div className="flex flex-col items-start justify-between h-full">
                <div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-400 text-sm">{member.role}</p>
                </div>

                {/* Social Icons */}
                <div className="flex gap-3 mt-4">
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg cursor-pointer bg-black/40 border border-white/10 hover:border-white/30"
                  >
                    <FaXTwitter className="w-4 h-4" />
                  </a>
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg cursor-pointer bg-black/40 border border-white/10 hover:border-white/30"
                  >
                    <FaInstagram className="w-4 h-4" />
                  </a>
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg cursor-pointer bg-black/40 border border-white/10 hover:border-white/30"
                  >
                    <FaLinkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Side: Profile Image */}
              <img
                src={member.img}
                alt={member.name}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-cover rounded-2xl max-w-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* White Shadow Separation */}
      <div className="absolute -bottom-3 left-0 w-full">
        <div className="relative w-full h-px bg-white/10">
          <div className="absolute inset-x-0 bottom-0 h-8 pb-2 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
