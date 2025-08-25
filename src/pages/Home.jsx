const Home = () => {
    return (
        <div className="md:p-[25px] overflow-hidden">
            <section className="back-color-image md:h-[92vh] sm:h-screen md:rounded-2xl overflow-hidden home-section h-screen pt-32">
                <div className="bg-img ">
                    <div className="container mx-auto">
                        <div className="flex flex-col justify-center h-[50vh]">
                        <h1 className="text-center text-white text-7xl capitalize">
                            <span className="capitalize text-8xl">explore the</span> <br />
                            beauty of worlds
                        </h1>
                        <p className="text-center mt-20 text-white text-2xl ">More then <span>10,300+</span> most popular destinations package </p>
                        </div>
                        <div className="flex justify-center flex-wrap">
                            <form className="mt-12 w-10/12 xl:flex hidden bg-white gap-4 rounded-xl p-4  justify-between flex-wrap items-center">
                                <div className="flex items-center gap-3 border-r  xl:p-0 p-4  xl:w-3/12 md:w-6/12 w-full">
                                    <i className="bi bi-geo-alt text-lg text-gray-500"></i>
                                    <div className="flex flex-col">
                                        <label className="text-[14px] text-gray-400">Destinations</label>
                                        <select className="text-sm font-semibold focus:outline-none bg-transparent">
                                            <option value="">Where to next</option>
                                            <option value="1">Thailand</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 border-r xl:p-0 p-4  xl:w-2/12 md:w-6/12 w-full">
                                    <i className="bi bi-flag text-lg text-gray-500"></i>
                                    <div className="flex flex-col">
                                        <label className="text-[14px] text-gray-400">All Activity</label>
                                        <select className="text-sm font-semibold focus:outline-none bg-transparent">
                                            <option>Trip Type</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex items-center border-r  xl:p-0 p-4  gap-3 xl:w-2/12 md:w-6/12 w-full">
                                    <div className="flex items-center gap-3 ">
                                        <i className="bi bi-calendar-event text-lg text-gray-500"></i>
                                        <div className="flex flex-col">
                                            <label className="text-[14px] text-gray-400">Duration</label>
                                            <select className="text-sm font-semibold focus:outline-none bg-transparent">
                                                <option>1 days - 3 days</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex items-center gap-3 lg:p-0 p-4 xl:w-2/12 md:w-6/12  w-full border-r  pr-6">
                                    <i className="bi bi-person text-lg text-gray-500"></i>
                                    <div className="flex flex-col">
                                        <label className="text-[14px] text-gray-400">Guests</label>
                                        <select className="text-base font-medium focus:outline-none">
                                            <option>01 - 02 People</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex justify-center w-2/12">
                                    <button type="submit" className="bg-[#73B458]  hover:bg-[#5c9c3f] text-white flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300">
                                        Search <i className="bi bi-search"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home