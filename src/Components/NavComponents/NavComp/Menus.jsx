import { Link } from "react-router-dom";


const Menus = () => {
    const links = ['','rooms','aboutTheHotel','myBookings','dashboard','contact','testimonials'];
    const menuNames = ['Home','Rooms', 'About The Hotel','My Bookings' ,'Dashboard','Contact Us','Testimonial'];
    return (
        <div className="font-poppins flex flex-col lg:flex-row lg:gap-4">
            {
                links.map((link,index) => 
                <li key={link}>
                    <Link to={`/${link}`}>{menuNames[index]}</Link>
                </li>)
            }
        </div>
    )
}


export default Menus;