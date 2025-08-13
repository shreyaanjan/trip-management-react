import ContactCard from "../components/ContactCard"

const Contact = () => {
    let cardContent = [
        {   
            icon: "bi bi-envelope",
            title: "Email Us 24/7",
            desc: "Have any question? Send a message",
            desc2: "support@gmail.com",
        },
        {
            icon: "bi bi-telephone",
            title: "Online Booking",
            desc: "Need online tour reservations",
            desc2: "+1 (234) 456 8888",
        }
    ]
    return (
        <section className="pt-[100px]">
            <div className="container mx-auto ">
                <div className="flex gap-5">
                    <div className="w-4/12">
                        <div className="contact-title">
                            <span className="text-3xl">Contact Us</span>
                            <h2 className="text-5xl my-4 font-semibold">Adventure Begins Here Contact Us</h2>
                        </div>
                        <div className="contact-card mt-16">
                            <div className="py-[40px] px-[30px] bg-[#EAF4E6] rounded-2xl">
                                <div className="icon text-5xl mb-4 text-[#73B458]">
                                    <i className="bi bi-geo-fill"></i>
                                </div>
                                <div className="content">
                                    <span className="text-xl font-semibold text-[#11221C]">Location</span>
                                    <p className="text-[#737373] my-3">Ready to visit out main office?</p>
                                    <h4 className="font-semibold text-[#11221C] text-[22px]">55 Clark St, Brooklyn, USA</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-4/12">
                        <div>
                            <img src="/images/contact-img.jpg" className="rounded-full" alt="plane" />
                        </div>
                    </div>
                    <div className="w-4/12">
                        <div className="contact-card flex flex-col gap-5">
                            {
                                cardContent.map((card, idx) => {
                                    return <ContactCard key={idx} icon={card.icon} title={card.title} desc={card.desc} desc2={card.desc2} />
                                })
                            }
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact