// "use client";
// import { Menu, X } from "lucide-react";
// import {  ChevronDown } from "lucide-react";
// import { useState, useRef, useEffect } from "react";
// import { Sparkles } from "lucide-react";
// import Link from "next/link";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
//   const portfolioRef = useRef<HTMLLIElement | null>(null);

//   // Close desktop dropdown if clicked outside
//   useEffect(() => {
//     const handleClickOutside = (e: MouseEvent) => {
//       if (portfolioRef.current && !portfolioRef.current.contains(e.target as Node)) {
//         setIsPortfolioOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <nav className="text-white px-4 py-4 border-b border-gray-800">
//       <div className="container mx-auto flex items-center justify-between">

//         <Link href="/"> 
//           <img width={200} src="./incologo.png" alt="Logo" />
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex space-x-6 border border-gray-900 shadow-md px-6 rounded-full py-2 items-center">
//             <Link href="/Home"><li className="hover:text-gray-300 cursor-pointer">Home</li></Link>

//           {/* Portfolio Dropdown */}
//           <li className="relative flex items-center hover:text-gray-300 cursor-pointer" ref={portfolioRef}>
//             <button
//               onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
//               className="flex items-center focus:outline-none"
//             >
//               Portfolio
//               <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 mt-1" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF">
//                 <path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z"/>
//               </svg>
//             </button>

//             {isPortfolioOpen && (
//               <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg z-20">
//                 <Link href="/mernportfolio" className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">Mern Portfolio</Link>
//                 <Link href="/wordpressportfolio" className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">Wordpress Portfolio</Link>
//                 <Link href="/mobileportfolio" className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">Mobile Portfolio</Link>
//               </div>
//             )}
//           </li>

         
//          {/* <Link href="/Servicespage"><li className="hover:text-gray-300 cursor-pointer">Services</li></Link> */}
        
//              {/* Services Dropdown for Mobile */}
//           <div>
//             <button
//               className="flex justify-between items-center w-full hover:text-gray-300 cursor-pointer"
//               onClick={() => setIsServicesOpen(!isServicesOpen)}
//             >
//               Services <ChevronDown size={16} />
//             </button>
//             {isServicesOpen && (
//               <div className="ml-4 mt-2 space-y-2">
//                 <Link href="/webdevelopment" className="block hover:text-gray-300" onClick={handleServiceClick}>
//                   Web Development
//                 </Link>
//                 <Link href="/mobileapplication" className="block hover:text-gray-300" onClick={handleServiceClick}>
//                   Mobile Application
//                 </Link>
//                 <Link href="/uiux" className="block hover:text-gray-300" onClick={handleServiceClick}>
//                   UI/UX Design
//                 </Link>
//                 <Link href="/digitalmarketing" className="block hover:text-gray-300" onClick={handleServiceClick}>
//                   Digital Marketing & SEO
//                 </Link>
//                 <Link href="/wordpress-shoptify" className="block hover:text-gray-300" onClick={handleServiceClick}>
//                   WordPress & Shopify Development
//                 </Link>
//                 <Link href="/blockchain" className="block hover:text-gray-300" onClick={handleServiceClick}>
//                   Blockchain Solutions
//                 </Link>
//               </div>
//             )}
//           </div>


//           <Link href="/Contact"><li className="hover:text-gray-300 cursor-pointer">Contact Us</li></Link>
//           <Link href="/About"><li className="hover:text-gray-300 cursor-pointer">About Us</li></Link>
//         </ul>

//         {/* Get Template Button */}
//         <button className="hidden sm:flex gap-2 px-5 py-2 rounded-md bg-gray-900 border border-gray-800 items-center">
//           <Sparkles className="w-5 h-5 text-gray-400" />
//           Get Template
//         </button>

//         {/* Hamburger Menu */}
//         <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//     {isOpen && (
//   <div className="lg:hidden mt-2 space-y-1 border-t border-gray-800 pt-2">
//     <Link href="/Home" className="block px-4 py-2 hover:text-gray-300">Home</Link>

//     {/* Portfolio Accordion */}
//     <div className="px-4">
//       <button
//         className="w-full flex justify-between items-center py-2 hover:text-gray-300 focus:outline-none"
//         onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
//       >
//         Portfolio
//         <svg xmlns="http://www.w3.org/2000/svg" className="ml-1" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF">
//           <path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z"/>
//         </svg>
//       </button>

//       {isPortfolioOpen && (
//         <div className="pl-4 space-y-1">
//           <Link href="/mernportfolio" className="block py-1 hover:text-gray-300">Mern Portfolio</Link>
//           <Link href="/wordpressportfolio" className="block py-1 hover:text-gray-300">Wordpress Portfolio</Link>
//           <Link href="/mobileportfolio" className="block py-1 hover:text-gray-300">Mobile Portfolio</Link>
//         </div>
//       )}
//     </div>

//     <Link href="/Servicespage" className="block px-4 py-2 hover:text-gray-300">Services</Link>
//     <Link href="/Contact" className="block px-4 py-2 hover:text-gray-300">Contact Us</Link>
//     <Link href="/About" className="block px-4 py-2 hover:text-gray-300">About Us</Link>
//   </div>
// )}


      
//     </nav>
//   );
// }













"use client";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // ✅ Add this
  const portfolioRef = useRef<HTMLLIElement | null>(null);

  // ✅ handleServiceClick function
  const handleServiceClick = () => {
    setIsServicesOpen(false);
    setIsOpen(false); // mobile menu bhi close ho jaye
  };

  // Close desktop dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (portfolioRef.current && !portfolioRef.current.contains(e.target as Node)) {
        setIsPortfolioOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="text-white px-4 py-4 border-b border-gray-800">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <img width={200} src="./incologo.png" alt="Logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 border border-gray-900 shadow-md px-6 rounded-full py-2 items-center">
          <Link href="/Home"><li className="hover:text-gray-300 cursor-pointer">Home</li></Link>

          {/* Portfolio Dropdown */}
          <li className="relative flex items-center hover:text-gray-300 cursor-pointer" ref={portfolioRef}>
            <button
              onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
              className="flex items-center focus:outline-none"
            >
              Portfolio
              <ChevronDown size={16} className="ml-1" />
            </button>
            {isPortfolioOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg z-20">
                <Link href="/mernportfolio" className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">Mern Portfolio</Link>
                <Link href="/wordpressportfolio" className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">Wordpress Portfolio</Link>
                <Link href="/mobileportfolio" className="block px-4 py-2 hover:bg-gray-700 cursor-pointer">Mobile Portfolio</Link>
              </div>
            )}
          </li>

          {/* Services Dropdown */}
          <li className="relative">
            <button
              className="flex items-center hover:text-gray-300 cursor-pointer"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services <ChevronDown size={16} className="ml-1" />
            </button>
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-lg z-20">
                <Link href="/webdevelopment" className="block px-4 py-2 hover:bg-gray-700" onClick={handleServiceClick}>
                  Web Development
                </Link>
                <Link href="/mobileapplication" className="block px-4 py-2 hover:bg-gray-700" onClick={handleServiceClick}>
                  Mobile Application
                </Link>
                <Link href="/uiux" className="block px-4 py-2 hover:bg-gray-700" onClick={handleServiceClick}>
                  UI/UX Design
                </Link>
                <Link href="/digitalmarketing" className="block px-4 py-2 hover:bg-gray-700" onClick={handleServiceClick}>
                  Digital Marketing & SEO
                </Link>
                <Link href="/wordpress-shoptify" className="block px-4 py-2 hover:bg-gray-700" onClick={handleServiceClick}>
                  WordPress & Shopify Development
                </Link>
                <Link href="/blockchain" className="block px-4 py-2 hover:bg-gray-700" onClick={handleServiceClick}>
                  Blockchain Solutions
                </Link>
              </div>
            )}
          </li>

          <Link href="/Contact"><li className="hover:text-gray-300 cursor-pointer">Contact Us</li></Link>
          <Link href="/About"><li className="hover:text-gray-300 cursor-pointer">About Us</li></Link>
        </ul>

        {/* Get Template Button */}
        <button className="hidden sm:flex gap-2 px-5 py-2 rounded-md bg-gray-900 border border-gray-800 items-center">
          <Sparkles className="w-5 h-5 text-gray-400" />
          Get Template
        </button>

        {/* Hamburger Menu */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
}
