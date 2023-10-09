import Separator from "~/components/commons/Separator";
import Header from "~/components/commons/Header";
import SeatImg from "~/assets/images/background-map-contact-page.jpg"

function Contact(){
    return <>
    <Header title='Contact' />
    <Separator />
    <div className="d-flex justify-content-center align-items-center flex-column mt-7 font-space-grotesk">
        <i className="flaticon flaticon-film-roll text-primary fs-4"></i>
        <div className="text-nickel fw-medium">Contact With Us</div>
        <div className="text-black fw-bolder fs-0 mb-5 w-40 text-center">Feel Free to Write us Anytime</div>
        <form className="d-flex align-items-center flex-column mb-8">
            <div>
                <input type="text" className="bg-anti-flash-white border-0 py-3 ps-4 pe-9 me-4 mb-4" placeholder="Your Name" />
                <input type="text" className="bg-anti-flash-white border-0 py-3 ps-4 pe-9" placeholder="Email Adress" />
            </div>
            <div>
                <input type="text" className="bg-anti-flash-white border-0 py-3 ps-4 pe-9 me-4 mb-4" placeholder="Phone" />
                <input type="text" className="bg-anti-flash-white border-0 py-3 ps-4 pe-9" placeholder="Subject" />
            </div>
            <textarea name="" id="" cols="20" rows="5" placeholder="Write a Comment" className="bg-anti-flash-white border-0 mb-4"></textarea>
            <button className="text-white fw-bolder bg-primary px-5 py-3">Send a Message</button>
        </form>
    </div>
    <div className="d-flex justify-content-center align-items-center h-50vh w-100 position-relative font-space-grotesk">
        <img src={SeatImg} alt="Seat Background" className="position-absolute top-25 h-100 w-100 contact-image"/> 
        <div className="d-flex position-absolute justify-content-evenly top-0 px-7">
            <div className="bg-white d-flex flex-row p-5 w-30 info-block shadow-lg">
                <div className="">
                    <div className="fs-3 fw-bold mb-4">About</div>
                    <div className="w-100 text-nickel">Morbi ut tellus ac leo mol stie luctus nec vehicula sed</div>
                </div>
                <i className="text-primary flaticon flaticon-contact-us" style={{fontSize: '65px'}}></i>
            </div>
            <div className="bg-white d-flex flex-row p-5 w-30 info-block shadow-lg">
                <div className="">
                    <div className="fs-3 fw-bold mb-4">Address</div>
                    <div className="w-100 text-nickel">68 Road Broklyn Street, New York, UnitedStates of America</div>
                </div>
                <i className="text-primary flaticon flaticon-location" style={{fontSize: '65px'}}></i>
            </div>
            <div className="bg-white d-flex flex-row p-5 w-30 info-block shadow-lg">
                <div className="">
                    <div className="fs-3 fw-bold mb-4">Contact</div>
                    <div className="w-100 text-nickel">+92 ( 8800 ) - 6780 needhelp@qrowd.com info@qrowd.com</div>
                </div>
                <i className="text-primary flaticon flaticon-call" style={{fontSize: '65px'}}></i>
            </div>
        </div>
    </div>
    <div className="position-relative">
        <div className="bg-black opacity-25 position-absolute z-1"></div>
        <iframe className='w-100 h-50vh position-absolute mb-7' style={{filter: `grayscale(100%)`}} src="https://maps.google.com/maps?q=%C4%90%C6%B0%E1%BB%9Dng%20H%C3%A0n%20Thuy%C3%AAn,%20khu%20ph%E1%BB%91%206%20P,%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c,%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh,%20Vi%E1%BB%87t%20Nam&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no"></iframe>
    </div>
    </>
}

export default Contact