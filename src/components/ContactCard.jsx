const ContactCard = ({ icon, title, desc, desc2 }) => {
    return (
        <div className="py-[40px] px-[30px] bg-[#EAF4E6] rounded-2xl">
            <div className="icon text-5xl mb-4  text-[#73B458]">
                <i className={icon}></i>
            </div>
            <div className="content">
                <span className="text-xl font-semibold text-[#11221C]">{title}</span>
                <p className="text-[#737373] my-3">{desc}</p>
                <h4 className="font-semibold text-[#11221C] text-[22px]">{desc2}</h4>
            </div>
        </div>
    )
}

export default ContactCard