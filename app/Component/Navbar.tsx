// "use client";
// import { Menu, X, Sparkles } from "lucide-react";
// import { useState } from "react";
// import Link from "next/link";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="text-white px-15 py-4 border-b border-gray-800 bg-[#04070D]">
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <Link href="/">
//           <img width={200} src="./incologo.png" alt="Logo" />
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6 border border-gray-900 shadow-md px-6 rounded-full py-2">
//           <li><a href="#" className="hover:text-gray-300">Services</a></li>
//           <li><a href="#" className="hover:text-gray-300">Process</a></li>
//           <li><a href="#" className="hover:text-gray-300">Pricing</a></li>
//           {/* <li><a href="#" className="hover:text-gray-300">Blog</a></li> */}
//           <li>
//             <Link href="/contact" className="hover:text-gray-300">
//               Contact
//             </Link>
//           </li>
//           <li>
//             <Link href="/About" className="hover:text-gray-300">
//               About Us
//             </Link>
//           </li>
//         </ul>

//         {/* Desktop Button */}
//         <button className="hidden sm:flex gap-2 px-5 py-2 rounded-md bg-gray-900 border border-gray-800 items-center">
//           <Sparkles className="w-5 h-5 text-gray-400" />
//           Get Template
//         </button>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden mt-4 space-y-3">
//           <a href="#" className="block hover:text-gray-300">Services</a>
//           <a href="#" className="block hover:text-gray-300">Process</a>
//           <a href="#" className="block hover:text-gray-300">Pricing</a>
//           {/* <a href="#" className="block hover:text-gray-300">Blog</a> */}
//           <Link href="/contact" className="block hover:text-gray-300">
//             Contact
//           </Link>
//           <Link href="/About" className="block hover:text-gray-300">
//             About Us
//           </Link>
//           <button className="border-1 flex gap-2 px-5 mt-3 py-2 rounded-md bg-gray-900 border-gray-800">
//             <Sparkles className="w-5 h-5 text-gray-400" />
//             Get Template
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// }







// "use client";
// import { Menu, X, Sparkles, ChevronDown } from "lucide-react";
// import { useState } from "react";
// import Link from "next/link";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false); // Dropdown ke liye state

//   return (
//     <nav className="relative z-40 text-white px-15 py-4 border-b border-gray-800 bg-[#04070D]">
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <Link href="/">
//           <img width={200} src="./incologo.png" alt="Logo" />
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6 border border-gray-900 shadow-md px-6 rounded-full py-2 relative">
//           {/* Services Dropdown */}
//           <li
//             className="relative group"
//             onMouseEnter={() => setIsServicesOpen(true)}
//             onMouseLeave={() => setIsServicesOpen(false)}
//           >
//             <button className="flex items-center gap-1 :text-gray-300">
//               Services <ChevronDown size={16} />
//             </button>

//             {/* Dropdown Menu */}
//             {isServicesOpen && (
//               <ul className="absolute left-0 mt-2 w-50 bg-[#0A0E14] border border-gray-800 rounded-md shadow-lg py-2 z-50">
//                 <li>
//                   <Link
//                     href="/webdevelopment"
//                     className="block px-4 py-2 hover:bg-gray-800"
//                   >
//                     Web Development

//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/mobile"
//                     className="block px-4 py-2 hover:bg-gray-800"
//                   >
//                     Mobile Application Development
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/services/uiux"
//                     className="block px-4 py-2 hover:bg-gray-800"
//                   >
//                     UI/UX Design
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>

//           <li><a href="#" className="hover:text-gray-300">Process</a></li>
//           <li><a href="#" className="hover:text-gray-300">Pricing</a></li>
//           <li>
//             <Link href="/contact" className="hover:text-gray-300">
//               Contact
//             </Link>
//           </li>
//           <li>
//             <Link href="/About" className="hover:text-gray-300">
//               About Us
//             </Link>
//           </li>
//         </ul>

//         {/* Desktop Button */}
//         <button className="hidden sm:flex gap-2 px-5 py-2 rounded-md bg-gray-900 border border-gray-800 items-center">
//           <Sparkles className="w-5 h-5 text-gray-400" />
//           Get Template
//         </button>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden mt-4 space-y-3">
//           {/* Services Dropdown for Mobile */}
//           <div>
//             <button
//               className="flex justify-between items-center w-full hover:text-gray-300"
//               onClick={() => setIsServicesOpen(!isServicesOpen)}
//             >
//               Services <ChevronDown size={16} />
//             </button>
//             {isServicesOpen && (
//               <div className="ml-4 mt-2 space-y-2">
//                 <Link href="/services/web" className="block hover:text-gray-300">
//                   Web Development
//                 </Link>
//                 <Link href="/services/mobile" className="block hover:text-gray-300">
//                   Mobile Apps
//                 </Link>
//                 <Link href="/services/uiux" className="block hover:text-gray-300">
//                   UI/UX Design
//                 </Link>
//               </div>
//             )}
//           </div>

//           <a href="#" className="block hover:text-gray-300">Process</a>
//           <a href="#" className="block hover:text-gray-300">Pricing</a>
//           <Link href="/contact" className="block hover:text-gray-300">
//             Contact
//           </Link>
//           <Link href="/About" className="block hover:text-gray-300">
//             About Us
//           </Link>
//           <button className="border-1 flex gap-2 px-5 mt-3 py-2 rounded-md bg-gray-900 border-gray-800">
//             <Sparkles className="w-5 h-5 text-gray-400" />
//             Get Template
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// }




"use client";
import { Menu, X, Sparkles, ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // Dropdown ke liye state

  return (
    <nav className="relative z-40 text-white px-15 py-4 border-b border-gray-800 bg-[#04070D]">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <img width={200} src="./incologo.png" alt="Logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 border border-gray-900 shadow-md px-6 rounded-full py-2 relative">
          {/* Services Dropdown */}
          <li className="relative">
            <button
              className="flex items-center gap-1 cursor-pointer hover:text-gray-300"
              onClick={() => setIsServicesOpen(!isServicesOpen)} // ✅ click toggle
            >
              Services <ChevronDown size={16} />
            </button>

            {/* Dropdown Menu */}
            {isServicesOpen && (
              <ul className="absolute left-0 mt-2 w-56 bg-[#0A0E14] border border-gray-800 rounded-md shadow-lg py-2 z-50">
                <li>
                  <Link
                    href="/webdevelopment"
                    className="block px-4 py-2 hover:bg-gray-800"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mobileapplication"
                    className="block px-4 py-2 hover:bg-gray-800"
                  >
                    Mobile Application Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/uiux"
                    className="block px-4 py-2 hover:bg-gray-800"
                  >
                    UI/UX Design
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a href="#" className="hover:text-gray-300">Process</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">Pricing</a>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/About" className="hover:text-gray-300">
              About Us
            </Link>
          </li>
        </ul>

        {/* Desktop Button */}
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
        <div className="md:hidden mt-4 space-y-3">
          {/* Services Dropdown for Mobile */}
          <div>
            <button
              className="flex justify-between items-center w-full hover:text-gray-300 cursor-pointer"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services <ChevronDown size={16} />
            </button>
            {isServicesOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link href="/webdevelopment" className="block hover:text-gray-300">
                  Web Development
                </Link>
                <Link href="/mobileapplication" className="block hover:text-gray-300">
                  Mobile Application
                </Link>
                <Link href="/services/uiux" className="block hover:text-gray-300">
                  UI/UX Design
                </Link>
              </div>
            )}
          </div>

          <a href="#" className="block hover:text-gray-300">Process</a>
          <a href="#" className="block hover:text-gray-300">Pricing</a>
          <Link href="/contact" className="block hover:text-gray-300">
            Contact
          </Link>
          <Link href="/About" className="block hover:text-gray-300">
            About Us
          </Link>
          <button className="border-1 flex gap-2 px-5 mt-3 py-2 rounded-md bg-gray-900 border-gray-800">
            <Sparkles className="w-5 h-5 text-gray-400" />
            Get Template
          </button>
        </div>
      )}
    </nav>
  );
}
