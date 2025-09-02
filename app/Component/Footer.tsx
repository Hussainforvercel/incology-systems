import { FaFacebookF, FaInstagram, FaTwitter, FaDribbble } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-[#04070D] text-gray-300 px-6 md:px-20 py-10">

            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
                <div className="flex w-full items-center mt-5 justify-between">
                    {/* Logo */}
                    <div>
                        <img width={120} src="https://framerusercontent.com/images/04vJJZ3D2ponPv6rzLBq6sf2PZU.svg" alt="" />
                    </div>
                    <div className="flex gap-5 mt-2">
                        <a href="#"><FaFacebookF className="text-gray w-6 h-6 transition" /></a>
                        <a href="#"><FaInstagram className="text-gray w-6 h-6 transition" /></a>
                        <a href="#"><FaTwitter className="text-gray w-6 h-6 transition" /></a>
                        <a href="#"><FaDribbble className="text-gray w-6 h-6 transition" /></a>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-6 mt-13 flex-wrap">
                <a href="#" className="hover:text-white transition">Services</a>
                <a href="#" className="hover:text-white transition">Pricing</a>
                <a href="#" className="hover:text-white transition">Contact</a>
                <a href="#" className="hover:text-white transition">Blog</a>
                <a href="#" className="hover:text-white transition">Privacy</a>
                <a href="#" className="hover:text-white transition">Terms</a>
            </div>
            
            <hr className="mt-13 border-gray-800" />

            <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                <p className="text-base">© 2025 Landio Template</p>
                <p className="text-base ">Made by <span className="text-white me-7">Framebase</span>  landio@support.com</p>
            </div>
        </footer>
    );
}


export default Footer