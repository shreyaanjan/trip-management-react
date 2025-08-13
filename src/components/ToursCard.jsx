const ToursCard = () => {
    return (
        <div className="max-w-sm bg-white rounded-2xl shadow p-4">
            <div className="relative">
                <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Diamond Beach"
                    className="rounded-xl w-full h-52 object-cover" />
                <span className="absolute bottom-2 right-2 bg-white text-gray-800 text-sm font-medium px-3 py-1 rounded-full shadow">
                    3 days - 2 night
                </span>
            </div>
            <div className="mt-4 flex items-center gap-1">
                <div className="text-yellow-400 text-lg">★★★★★</div>
                <span className="text-sm text-gray-600 ml-1">4.8(3k reviews)</span>
            </div>
            <h3 className="text-lg font-semibold mt-1">Beautiful Diamond Beach</h3>
            <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                <i className="bi bi-geo-alt"></i>
                <span>Bali, Indonesia</span>
            </div>
            <p className="text-gray-500 text-sm mt-2">
                Rising dramatically 200 meters above the surrounding jungle, this ancient royal
            </p>
            <div className="grid grid-cols-3 border rounded-xl mt-4 text-sm overflow-hidden">
                <div className="flex flex-col items-center justify-center py-3">
                    <span className="flex items-center gap-1 text-orange-500">
                        <i className="bi bi-cash-stack"></i> Price
                    </span>
                    <span className="font-semibold text-lg text-gray-900">$150</span>
                </div>
                <div className="flex flex-col items-center justify-center border-x py-3">
                    <span className="flex items-center gap-1 text-orange-500">
                        <i className="bi bi-geo"></i> Place
                    </span>
                    <span className="font-semibold text-lg text-gray-900">7-8</span>
                </div>
                <div className="flex flex-col items-center justify-center py-3">
                    <span className="flex items-center gap-1 text-orange-500">
                        <i className="bi bi-people"></i> Guest
                    </span>
                    <span className="font-semibold text-lg text-gray-900">2-5</span>
                </div>
            </div>
            <button className="mt-4 w-full bg-green-100 text-green-700 font-medium py-3 rounded-full flex items-center justify-center gap-2 hover:bg-green-200 transition">
                Book Now <i className="bi bi-arrow-right"></i>
            </button>
        </div>

    )
}

export default ToursCard