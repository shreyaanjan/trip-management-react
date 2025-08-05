const Home = () => {
    return (
        <section className="home-section h-screen pt-32">
            <div className="bg-img">
                <div className="container mx-auto">
                    <h1 className="text-center text-white text-7xl capitalize">
                        <span className="capitalize text-8xl">explore the</span> <br />
                        beauty of worlds
                    </h1>
                    <p className="text-center mt-20 text-white text-2xl ">More then <span>10,300+</span> most popular destinations package </p>
                    <div className="pb-32">
                        <form className="mt-12 bg-white rounded-xl shadow-lg px-6 py-4 flex flex-wrap md:flex-nowrap items-center justify-between gap-4 md:gap-6">
                            <div className="flex gap-2 border-r pr-6">
                                <i className="bi bi-geo-alt text-lg text-gray-500"></i>
                                <div className="flex flex-col">
                                    <label className="text-sm text-gray-400">Destinations</label>
                                    <select className="text-base font-medium focus:outline-none">
                                        <option value="">Where to next</option>
                                        <option value="1">Thailand</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex gap-2 border-r pr-6">
                                <i className="bi bi-flag text-lg text-gray-500"></i>
                                <div className="flex flex-col">
                                    <label className="text-sm text-gray-400">All Activity</label>
                                    <select className="text-base font-medium focus:outline-none">
                                        <option>Trip Type</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex gap-2 border-r pr-6">
                                <i className="bi bi-calendar-event text-lg text-gray-500"></i>
                                <div className="flex flex-col">
                                    <label className="text-sm text-gray-400">Duration</label>
                                    <select className="text-base font-medium focus:outline-none">
                                        <option>1 days - 3 days</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex gap-2 border-r pr-6">
                                <i className="bi bi-person text-lg text-gray-500"></i>
                                <div className="flex flex-col">
                                    <label className="text-sm text-gray-400">Guests</label>
                                    <select className="text-base font-medium focus:outline-none">
                                        <option>01 - 02 People</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className="bg-[#73B458] hover:bg-[#5c9c3f] text-white flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300">
                                Search <i className="bi bi-search"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home