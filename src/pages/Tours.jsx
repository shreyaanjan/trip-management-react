import ToursCard from "../components/ToursCard"

const Tours = () => {
    let tourCard = [
        {
            img: "/images/tour-1.jpg",
            title: "White Boats on Body of Water",
            country: "County, Croatia",
            desc: "Rising dramatically 200 meters above the surrounding jungle, this ancient royal",
            
        }
    ]
    return (
        <section className="pt-[100px]">
            <div className="container mx-auto">
                <div className="flex flex-wrap py-[40x]">
                    <ToursCard />
                </div>
            </div>
        </section>
    )
}

export default Tours