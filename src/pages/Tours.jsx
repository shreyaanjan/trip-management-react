import { tourCard } from "../components/tourCard"
import ToursCard from "../components/ToursCard"

const Tours = () => {
    return (
        <section className="pt-[100px]">
            <div className="container mx-auto">
                <h3 className="text-center tour-title text-[#F29727] text-4xl">Explore Packages</h3>
                <div className="flex flex-wrap justify-center py-[10px]">
                    {
                        tourCard.map((tour, idx) => {
                            return <ToursCard key={idx} id={idx} img={tour.img} title={tour.title} country={tour.country} desc={tour.desc} price={tour.price} place={tour.place} person={tour.person} days={tour.days} season={tour.season} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Tours