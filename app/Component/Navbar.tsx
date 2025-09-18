"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white px-15 py-4 border-b border-gray-800">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}

        <Link href="/"> <img width={200} src="./incologo.png" alt="" /></Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 border border-gray-900 shadow-md px-6 rounded-full py-2">
          <Link href="/Servicespage"><li className="hover:text-gray-300">Services</li></Link>
          {/* <li className="hover:text-gray-300 flex">Services <svg xmlns="http://www.w3.org/2000/svg" className="mt-1" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z"/></svg> </li> */}
          <Link href="/Process"><li className="hover:text-gray-300">Process</li></Link>
          <Link href="/Pricing"><li className="hover:text-gray-300">Pricing</li></Link>
          {/* <li><a href="#" className="hover:text-gray-300">Blog</a></li> */}
          <Link href="/Contact"> <li className="hover:text-gray-300">Contact</li></Link>
          <Link href="/About"> <li className="hover:text-gray-300">About Us</li></Link>
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

          <a href="#" className="block hover:text-gray-300">Services</a>
          <a href="#" className="block hover:text-gray-300">Process</a>
          <a href="#" className="block hover:text-gray-300">Pricing</a>
          {/* <a href="#" className="block hover:text-gray-300">Blog</a> */}
          <Link href="/Contact"> <a href="#" className="block hover:text-gray-300">Contact</a> </Link>
          <Link href="/About"> <a href="#" className="block hover:text-gray-300">About Us</a> </Link>
          <button className="border-1 flex gap-2 px-5 mt-3 py-2 rounded-md  bg-gray-900 border-gray-800">
            <Sparkles className="w-5 h-5 text-grey-400" />
            Get Template</button>

        </div>
      )}
    </nav>
  );
}



// "use client";
// import { Menu, X } from "lucide-react";
// import { useState, useRef, useEffect } from "react";
// import { Sparkles } from "lucide-react";
// import Link from "next/link";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);      // mobile menu
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false); // services dropdown
//   // 👇 Explicitly type the ref as HTMLLIElement or HTMLDivElement
//   const dropdownRef = useRef<HTMLLIElement | null>(null);

//   useEffect(() => {
//     const handleClickOutside = (e: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <nav className="text-white px-15 py-4 border-b border-gray-800">
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <Link href="/">
//           <img width={200} src="./incologo.png" alt="Logo" />
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6 border border-gray-900 shadow-md px-6 rounded-full py-2">
//           {/* Services Dropdown */}
//           <li className="relative" ref={dropdownRef}>
//             <button
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//               className="hover:text-gray-300 flex items-center"
//             >
//               Services
//               <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF">
//                 <path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z" />
//               </svg>
//             </button>

//             {isDropdownOpen && (
//               <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg z-20">
//                 <Link href="/WebDev" className="block px-4 py-2 hover:bg-gray-700">
//                   Web Development
//                 </Link>
//                 <Link href="/mobile-apps" className="block px-4 py-2 hover:bg-gray-700">
//                   Mobile Apps
//                 </Link>
//                 <Link href="/design" className="block px-4 py-2 hover:bg-gray-700">
//                   Digital Design
//                 </Link>
//               </div>
//             )}
//           </li>

//           <Link href="/Process"><li className="hover:text-gray-300">Process</li></Link>
//           <Link href="/Pricing"><li className="hover:text-gray-300">Pricing</li></Link>
//           <Link href="/Contact"><li className="hover:text-gray-300">Contact</li></Link>
//           <Link href="/About"><li className="hover:text-gray-300">About Us</li></Link>
//         </ul>

//         <button className="hidden sm:flex gap-2 px-5 py-2 rounded-md bg-gray-900 border border-gray-800 items-center">
//           <Sparkles className="w-5 h-5 text-gray-400" />
//           Get Template
//         </button>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden mt-4 space-y-3">
//           <a href="#" className="block hover:text-gray-300">Services</a>
//           <a href="#" className="block hover:text-gray-300">Process</a>
//           <a href="#" className="block hover:text-gray-300">Pricing</a>
//           <Link href="/Contact"><a className="block hover:text-gray-300">Contact</a></Link>
//           <Link href="/About"><a className="block hover:text-gray-300">About Us</a></Link>
//           <button className="border-1 flex gap-2 px-5 mt-3 py-2 rounded-md bg-gray-900 border-gray-800">
//             <Sparkles className="w-5 h-5 text-grey-400" />
//             Get Template
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// }
