import React from 'react'

const Section7 = () => {
    return (
        <>

            <section className="bg-black bg-gradient-to-t border-b-2  border-gray-700 from-gray-700/50 to-black h-[110vh] w-full">

                {/* Centered content */}
                <div className="relative z-10 flex h-full items-center justify-center px-4">
                    <div className="text-white text-center flex flex-col items-center gap-6">
                        <em className='text-md'>____Reach out anytime____</em>

                        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                            Ready to Automate Smarter? <br /> Let&apos;s <em>Build Together</em>
                        </h1>
                        <p className='text-md'>Schedule a Call and Begin Automating</p>
                        {/* Button */}
                        <button className="relative border flex gap-2 justify-center px-5 py-3 rounded-xl bg-black border-gray-700 overflow-hidden">
                            BOOK A FREE CALL
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF">
                                    <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
                                </svg>
                            </i>
                            <span className="absolute bottom-0 left-0 w-full h-[3px] 
                   bg-gradient-to-r from-transparent via-white to-transparent 
                   opacity-90"></span>
                        </button>

                        {/* Icons */}
                        <div className="flex justify-center items-center py-2 gap-4 text-gray-400 text-2xl">
                            <i className="fa-brands fa-x-twitter"></i>
                            <span className="text-gray-500">|</span>
                            <i className="fa-brands fa-instagram"></i>
                            <span className="text-gray-500">|</span>
                            <i className="fa-brands fa-facebook-f"></i>
                        </div>

                        <p className="max-w-xl text-sm sm:text-base text-gray-200">
                            landio@support.com
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section7