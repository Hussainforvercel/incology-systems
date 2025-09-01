import React from 'react'

const Section3 = () => {
    return (
        <>
            <section className="relative bg-gradient-to-t  from-gray-700/30 to-black  w-full bg-black border-b-2 border-gray-800 text-white py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    {/* Badge */}
                    <div className="inline-block px-4 py-1 rounded-full border border-gray-700 text-xs uppercase tracking-wide text-gray-300 mb-6">
                        FEATURES
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-5xl font-bold mb-4">
                        All features in <span className="italic font-serif text-gray-200">one place</span>
                    </h2>

                    {/* Subheading */}
                    <p className="text-gray-400 max-w-2xl mx-auto mb-14">
                        Everything you need to automate operations, boost productivity
                    </p>

                    {/* Features Grid */}
                    <div className="grid mb-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="p-8 rounded-2xl border border-t-3 border-gray-800 border-b-gray-900  transition">
                            <div className="flex pt-8 pb-15 rounded-2xl border border-t-2 bg-gradient-to-bl  from-gray-700/30 to-black  border-gray-900  justify-center mb-6">
                                <div className="flex  items-center bg-[#12151E] gap-5 p-4 mt-4 rounded-xl border border-t-2  border-gray-800 cursor-pointer transition-transform duration-500 hover:scale-115 ">
                                    <i className="fa-solid fa-diagram-project text-3xl text-gray-400"></i>
                                    <i className="fa-solid fa-diagram-project text-3xl text-gray-400"></i>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-3">Workflow Automation</h3>
                            <p className="text-gray-400 text-sm">
                                Automate complex business processes to boost speed, clarity, and efficiency.
                            </p>
                        </div>



                        {/* Card 2 */}

                        <div className="p-8 rounded-2xl border border-t-3 border-gray-800 border-b-gray-900  transition">
                            <div className="flex pt-8 pb-15 rounded-2xl border border-t-2 bg-gradient-to-bl  from-gray-700/30 to-black  border-gray-900  justify-center mb-6">
                                <div className="flex  items-center bg-[#12151E] gap-5 p-4 mt-4 rounded-xl border border-t-2  border-gray-800 cursor-pointer transition-transform duration-500 hover:scale-115 ">
                                    <i className="fa-solid fa-sliders text-3xl text-gray-400"></i>
                                    <i className="fa-solid fa-sliders text-3xl text-gray-400"></i>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-3">Custom AI Solutions</h3>
                            <p className="text-gray-400 text-sm">
                                Build tailored AI systems that align with your business goals and challenges.
                            </p>
                        </div>


                        {/* Card 3 */}

                        <div className="p-8 rounded-2xl border border-t-3 border-gray-800 border-b-gray-900 transition">
                            <div className="flex pt-8 pb-15 rounded-2xl border border-t-2 bg-gradient-to-bl  from-gray-700/30 to-black  border-gray-900 justify-center mb-6">
                                <div className="flex  items-center bg-[#12151E] gap-5 p-4 mt-4 rounded-xl border border-t-2  border-gray-800 cursor-pointer transition-transform duration-500 hover:scale-115 ">
                                    <i className="fa-solid fa-robot text-3xl text-gray-400"></i>
                                    <i className="fa-solid fa-robot text-3xl text-gray-400"></i>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-3">AI Assistant</h3>
                            <p className="text-gray-400 text-sm">
                                Deploy intelligent virtual agents to streamline tasks.
                            </p>
                        </div>
                    </div>



                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="p-8 rounded-2xl border border-t-3 border-gray-800 border-b-gray-900 transition">
                            <div className="flex pt-8 pb-15 rounded-2xl border border-t-2 bg-gradient-to-bl  from-gray-700/30 to-black  border-gray-900  justify-center mb-6">
                                <div className="flex  items-center bg-[#12151E] gap-5 p-4 mt-4 rounded-xl border border-t-2  border-gray-800 cursor-pointer transition-transform duration-500 hover:scale-115 ">
                                    <i className="fa-solid fa-diagram-project text-3xl text-gray-400"></i>
                                    <i className="fa-solid fa-diagram-project text-3xl text-gray-400"></i>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-3">Workflow Automation</h3>
                            <p className="text-gray-400 text-sm">
                                Automate complex business processes to boost speed, clarity, and efficiency.
                            </p>
                        </div>



                        {/* Card 2 */}

                        <div className="p-8 rounded-2xl border border-t-3 border-gray-800 border-b-gray-900 transition">
                            <div className="flex pt-8 pb-15 rounded-2xl border border-t-2 bg-gradient-to-bl  from-gray-700/30 to-black  border-gray-900  justify-center mb-6">
                                <div className="flex  items-center bg-[#12151E] gap-5 p-4 mt-4 rounded-xl border border-t-2  border-gray-800 cursor-pointer transition-transform duration-500 hover:scale-115 ">
                                    <i className="fa-solid fa-sliders text-3xl text-gray-400"></i>
                                    <i className="fa-solid fa-sliders text-3xl text-gray-400"></i>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-3">Custom AI Solutions</h3>
                            <p className="text-gray-400 text-sm">
                                Build tailored AI systems that align with your business goals and challenges.
                            </p>
                        </div>


                        {/* Card 3 */}

                        <div className="p-8 rounded-2xl border border-t-3 border-gray-800 border-b-gray-900 transition">
                            <div className="flex pt-8 pb-15 rounded-2xl border border-t-2 bg-gradient-to-bl  from-gray-700/30 to-black  border-gray-900 justify-center mb-6">
                                <div className="flex  items-center bg-[#12151E] gap-5 p-4 mt-4 rounded-xl border border-t-2  border-gray-800 cursor-pointer transition-transform duration-500 hover:scale-115 ">
                                    <i className="fa-solid fa-robot text-3xl text-gray-400"></i>
                                    <i className="fa-solid fa-robot text-3xl text-gray-400"></i>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-3">AI Assistant</h3>
                            <p className="text-gray-400 text-sm">
                                Deploy intelligent virtual agents to streamline tasks.
                            </p>
                        </div>
                    </div>



                </div>
            </section>
        </>
    )
}

export default Section3