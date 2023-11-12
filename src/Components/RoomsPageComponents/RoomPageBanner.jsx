import { Link } from "react-router-dom";


const RoomPageBanner = () => {
    return (
        <div className="hero h-60 font-poppins" style={{ backgroundImage: 'url(https://i.ibb.co/sQHrw2c/image101.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Book Your Stay</h1>
                    <p className="mb-5">A stay infused with creativity and culture.</p>
                   <Link to='/aboutTheHotel'> <button className="underline px-4 py-2 hover:text-lg">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default RoomPageBanner;