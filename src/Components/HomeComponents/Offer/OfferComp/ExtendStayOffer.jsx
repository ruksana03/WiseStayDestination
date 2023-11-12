import { Link } from "react-router-dom";


const ExtendStayOffer = () => {
    return (
        <div className="hero w-full h-full py-10" style={{ backgroundImage: 'url(https://i.ibb.co/L6WGgDB/offer4.jpg)' }}>
        <div className="hero-overlay  bg-opacity-50 bg-[#273026] m-4"></div>

        <div className=" text-white p-4">
            <h1 className="w-full text-base font-bold font-poppins border-2 border-[#B99D75] px-4">Complimentary Upgrades</h1>

            <div className="ml-6 my-4 text-sm font-bold font-poppins ">
                <ul>
                    <li>1. Spa and Wellness</li>
                    <li>2. Dining Packages</li>
                    <li>3. Local Experiences</li>
                    <li>4. Complimentary Upgrades</li>
                </ul>
            </div>

           
            <div>
                    <Link>
                        <button
                            className="bg-[#273026] px-2 py-1 rounded-md font-bold font-poppins text-sm hover:bg-[#B99D75] hover:text-base mr-2 ">
                            Read More..
                        </button>
                    </Link>
                    <Link>
                        <button
                            className="bg-[#273026] px-2 py-1 rounded-md font-bold font-poppins text-sm hover:bg-[#B99D75] hover:text-base ">
                            Take This Offer
                        </button>
                    </Link>
                </div>
        </div>

    </div>
    );
};

export default ExtendStayOffer;