"use client";
import { Menu, X } from "lucide-react"; 
import { useState } from "react";
import { Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-15 py-4 border-b border-gray-800">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
         <img width={120} src="https://framerusercontent.com/images/04vJJZ3D2ponPv6rzLBq6sf2PZU.svg" alt="" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 border border-gray-900 shadow-md px-6 rounded-full py-2">
          <li><a href="#" className="hover:text-gray-300">Services</a></li>
          <li><a href="#" className="hover:text-gray-300">Process</a></li>
          <li><a href="#" className="hover:text-gray-300">Pricing</a></li>
          <li><a href="#" className="hover:text-gray-300">Blog</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact</a></li>
        </ul>
            <button className="hidden sm:flex gap-2 px-5 py-2 rounded-md bg-gray-900 border border-gray-800 items-center">
  <Sparkles className="w-5 h-5 text-gray-400" />
  Get Template
</button>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 ">
          <a href="#" className="block hover:text-gray-300">Home</a>
          <a href="#" className="block hover:text-gray-300">About</a>
          <a href="#" className="block hover:text-gray-300">Services</a>
          <a href="#" className="block hover:text-gray-300">Contact</a>
            <button className="border-1 flex gap-2 px-5 py-2 rounded-md  bg-gray-900 border-gray-800">
              <Sparkles className="w-5 h-5 text-grey-400" />
            Get Template</button>
        </div>
      )}
    </nav>
  );
}
