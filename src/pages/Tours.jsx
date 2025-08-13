import { tourCard } from "../components/tourCard"
import  ToursCard  from "../components/ToursCard"


const Tours = () => {
    return (
        <section className="pt-[100px]">
            <div className="container mx-auto">
                <div className="flex flex-wrap   py-[40px]">
                    {
                        tourCard.map((tour, idx)=>{
                            return  <ToursCard key={idx} id={idx} img={tour.img} title={tour.title} country={tour.country} desc={tour.desc} price={tour.price} place={tour.place} guest={tour.guest} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Tours