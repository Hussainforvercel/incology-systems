<<<<<<< HEAD
// "use client";
// import { Menu, X } from "lucide-react";
// import {  ChevronDown } from "lucide-react";
// import { useState, useRef, useEffect } from "react";
// import { Sparkles } from "lucide-react";
=======


// "use client";
// import { Menu, X, Sparkles, ChevronDown } from "lucide-react";
// import { useState } from "react";
>>>>>>> ae812c919de218668ac6aaa9eaa86d1974080e8f
// import Link from "next/link";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
<<<<<<< HEAD
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
=======
//   const [isServicesOpen, setIsServicesOpen] = useState(false); // Dropdown ke liye state

//   return (
//     <nav className="relative z-40 text-white px-15 py-4 border-b border-gray-800 bg-[#04070D]">
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <Link href="/">
>>>>>>> ae812c919de218668ac6aaa9eaa86d1974080e8f
//           <img width={200} src="./incologo.png" alt="Logo" />
//         </Link>

//         {/* Desktop Menu */}
<<<<<<< HEAD
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
=======
//         <ul className="hidden md:flex space-x-6 border border-gray-900 shadow-md px-6 rounded-full py-2 relative">
//           {/* Services Dropdown */}
//           <li className="relative">
//             <button
//               className="flex items-center gap-1 cursor-pointer hover:text-gray-300"
//               onClick={() => setIsServicesOpen(!isServicesOpen)} // ✅ click toggle
//             >
//               Services <ChevronDown size={16} />
//             </button>

//             {/* Dropdown Menu */}
//             {isServicesOpen && (
//               <ul className="absolute left-0 mt-2 w-56 bg-[#0A0E14] border border-gray-800 rounded-md shadow-lg py-2 z-50">
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
//                     href="/mobileapplication"
//                     className="block px-4 py-2 hover:bg-gray-800"
//                   >
//                     Mobile Application Development
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/uiux"
//                     className="block px-4 py-2 hover:bg-gray-800"
//                   >
//                     UI/UX Design
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>

//           <li>
//             <a href="#" className="hover:text-gray-300">Process</a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-gray-300">Pricing</a>
//           </li>
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
>>>>>>> ae812c919de218668ac6aaa9eaa86d1974080e8f
//           <div>
//             <button
//               className="flex justify-between items-center w-full hover:text-gray-300 cursor-pointer"
//               onClick={() => setIsServicesOpen(!isServicesOpen)}
//             >
//               Services <ChevronDown size={16} />
//             </button>
//             {isServicesOpen && (
//               <div className="ml-4 mt-2 space-y-2">
<<<<<<< HEAD
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
=======
//                 <Link href="/webdevelopment" className="block hover:text-gray-300">
//                   Web Development
//                 </Link>
//                 <Link href="/mobileapplication" className="block hover:text-gray-300">
//                   Mobile Application
//                 </Link>
//                 <Link href="/uiux" className="block hover:text-gray-300">
//                   UI/UX Design
//                 </Link><Link href="/digitalmarketing" className="block hover:text-gray-300">
//                  Digital Marketing & SEO
//                 </Link>
//                 <Link href="/uiux" className="block hover:text-gray-300">
//                   WordPress & Shopify Development
//                 </Link>
//                <Link href="/uiux" className="block hover:text-gray-300">
>>>>>>> ae812c919de218668ac6aaa9eaa86d1974080e8f
//                   Blockchain Solutions
//                 </Link>
//               </div>
//             )}
//           </div>

<<<<<<< HEAD

//           <Link href="/Contact"><li className="hover:text-gray-300 cursor-pointer">Contact Us</li></Link>
//           <Link href="/About"><li className="hover:text-gray-300 cursor-pointer">About Us</li></Link>
//         </ul>

//         {/* Get Template Button */}
=======
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







// "use client";
// import { Menu, X, Sparkles, ChevronDown } from "lucide-react";
// import { useState } from "react";
// import Link from "next/link";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);

//   // ✅ Ek hi list services ki
//   const services = [
//     { name: "Web Development", href: "/webdevelopment" },
//     { name: "Mobile Application Development", href: "/mobileapplication" },
//     { name: "UI/UX Design", href: "/uiux" },
//     { name: "Digital Marketing & SEO", href: "/digitalmarketing" },
//     { name: "WordPress & Shopify Development", href: "/wordpress-shopify" },
//     { name: "Blockchain Solutions", href: "/blockchain" },
//   ];

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
//           <li className="relative">
//             <button
//               className="flex items-center gap-1 cursor-pointer hover:text-gray-300"
//               onClick={() => setIsServicesOpen(!isServicesOpen)}
//             >
//               Services <ChevronDown size={16} />
//             </button>

//             {isServicesOpen && (
//               <ul className="absolute left-0 mt-2 w-56 bg-[#0A0E14] border border-gray-800 rounded-md shadow-lg py-2 z-50">
//                 {services.map((service) => (
//                   <li key={service.href}>
//                     <Link
//                       href={service.href}
//                       className="block px-4 py-2 hover:bg-gray-800"
//                       onClick={() => setIsServicesOpen(false)} // ✅ click par close
//                     >
//                       {service.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>

//           <li><a href="#" className="hover:text-gray-300">Process</a></li>
//           <li><a href="#" className="hover:text-gray-300">Pricing</a></li>
//           <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
//           <li><Link href="/About" className="hover:text-gray-300">About Us</Link></li>
//         </ul>

//         {/* Desktop Button */}
>>>>>>> ae812c919de218668ac6aaa9eaa86d1974080e8f
//         <button className="hidden sm:flex gap-2 px-5 py-2 rounded-md bg-gray-900 border border-gray-800 items-center">
//           <Sparkles className="w-5 h-5 text-gray-400" />
//           Get Template
//         </button>

<<<<<<< HEAD
//         {/* Hamburger Menu */}
//         <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
=======
//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden"
//           onClick={() => setIsOpen(!isOpen)}
//         >
>>>>>>> ae812c919de218668ac6aaa9eaa86d1974080e8f
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
<<<<<<< HEAD
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


      
=======
//       {isOpen && (
//         <div className="md:hidden mt-4 space-y-3">
//           {/* Services Dropdown */}
//           <div>
//             <button
//               className="flex justify-between items-center w-full hover:text-gray-300 cursor-pointer"
//               onClick={() => setIsServicesOpen(!isServicesOpen)}
//             >
//               Services <ChevronDown size={16} />
//             </button>
//             {isServicesOpen && (
//               <div className="ml-4 mt-2 space-y-2">
//                 {services.map((service) => (
//                   <Link
//                     key={service.href}
//                     href={service.href}
//                     className="block hover:text-gray-300"
//                     onClick={() => {
//                       setIsServicesOpen(false); // ✅ close dropdown
//                       setIsOpen(false); // ✅ mobile menu bhi band ho
//                     }}
//                   >
//                     {service.name}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>

//           <a href="#" className="block hover:text-gray-300">Process</a>
//           <a href="#" className="block hover:text-gray-300">Pricing</a>
//           <Link href="/contact" className="block hover:text-gray-300">Contact</Link>
//           <Link href="/About" className="block hover:text-gray-300">About Us</Link>
//           <button className="flex gap-2 px-5 mt-3 py-2 rounded-md bg-gray-900 border border-gray-800">
//             <Sparkles className="w-5 h-5 text-gray-400" />
//             Get Template
//           </button>
//         </div>
//       )}
>>>>>>> ae812c919de218668ac6aaa9eaa86d1974080e8f
//     </nav>
//   );
// }








<<<<<<< HEAD





"use client";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { useState, useRef, useEffect } from "react";
=======
"use client";
import { Menu, X, Sparkles, ChevronDown } from "lucide-react";
import { useState } from "react";
>>>>>>> ae812c919de218668ac6aaa9eaa86d1974080e8f
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
<<<<<<< HEAD
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
=======
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Dropdown close karne wala function
  const handleServiceClick = () => {
    setIsServicesOpen(false);
    setIsOpen(false); // mobile menu bhi close ho jaye agar mobile pe ho
  };

  return (
    <nav className="relative z-40 text-white px-15 py-4 border-b border-gray-800 bg-[#04070D]">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
>>>>>>> ae812c919de218668ac6aaa9eaa86d1974080e8f
        <Link href="/">
          <img width={200} src="./incologo.png" alt="Logo" />
        </Link>

        {/* Desktop Menu */}
<<<<<<< HEAD
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
=======
        <ul className="hidden md:flex space-x-6 border border-gray-900 shadow-md px-6 rounded-full py-2 relative">
          {/* Services Dropdown */}
          <li className="relative">
            <button
              className="flex items-center gap-1 cursor-pointer hover:text-gray-300"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
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
        onClick={handleServiceClick}
      >
        Web Development
      </Link>
    </li>
    <li>
      <Link
        href="/mobileapplication"
        className="block px-4 py-2 hover:bg-gray-800"
        onClick={handleServiceClick}
      >
        Mobile Application Development
      </Link>
    </li>
    <li>
      <Link
        href="/uiux"
        className="block px-4 py-2 hover:bg-gray-800"
        onClick={handleServiceClick}
      >
        UI/UX Design
      </Link>
    </li>
    <li>
      <Link
        href="/digitalmarketing"
        className="block px-4 py-2 hover:bg-gray-800"
        onClick={handleServiceClick}
      >
        Digital Marketing & SEO
      </Link>
    </li>
    <li>
      <Link
        href="/wordpress-shoptify"
        className="block px-4 py-2 hover:bg-gray-800"
        onClick={handleServiceClick}
      >
        WordPress & Shopify Development
      </Link>
    </li>
    <li>
      <Link
        href="/blockchain"
        className="block px-4 py-2 hover:bg-gray-800"
        onClick={handleServiceClick}
      >
        Blockchain Solutions
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
>>>>>>> ae812c919de218668ac6aaa9eaa86d1974080e8f
        <button className="hidden sm:flex gap-2 px-5 py-2 rounded-md bg-gray-900 border border-gray-800 items-center">
          <Sparkles className="w-5 h-5 text-gray-400" />
          Get Template
        </button>

        {/* Hamburger Menu */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
<<<<<<< HEAD
=======

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
                <Link href="/webdevelopment" className="block hover:text-gray-300" onClick={handleServiceClick}>
                  Web Development
                </Link>
                <Link href="/mobileapplication" className="block hover:text-gray-300" onClick={handleServiceClick}>
                  Mobile Application
                </Link>
                <Link href="/uiux" className="block hover:text-gray-300" onClick={handleServiceClick}>
                  UI/UX Design
                </Link>
                <Link href="/digitalmarketing" className="block hover:text-gray-300" onClick={handleServiceClick}>
                  Digital Marketing & SEO
                </Link>
                <Link href="/wordpress-shoptify" className="block hover:text-gray-300" onClick={handleServiceClick}>
                  WordPress & Shopify Development
                </Link>
                <Link href="/blockchain" className="block hover:text-gray-300" onClick={handleServiceClick}>
                  Blockchain Solutions
                </Link>
              </div>
            )}
          </div>

          <a href="#" className="block hover:text-gray-300">Process</a>
          <a href="#" className="block hover:text-gray-300">Pricing</a>
          <Link href="/contact" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link href="/About" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <button className="border-1 flex gap-2 px-5 mt-3 py-2 rounded-md bg-gray-900 border-gray-800">
            <Sparkles className="w-5 h-5 text-gray-400" />
            Get Template
          </button>
        </div>
      )}
>>>>>>> ae812c919de218668ac6aaa9eaa86d1974080e8f
    </nav>
  );
}
