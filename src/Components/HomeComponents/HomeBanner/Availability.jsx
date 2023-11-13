// import axios from "axios";
// import { useState } from "react";

import { Link } from "react-router-dom";

const Availability = () => {
    // const [checkInDate, setCheckInDate] = useState('');
    // const [checkOutDate, setCheckOutDate] = useState('');
    // const [availableRooms, setAvailableRooms] = useState([]);

    const handleSearch = async (e) => {

        e.preventDefault();
        const form = e.target;

        const getDate = {
            checkInDate: form.checkInDate?.value || "not-Given",
            checkOutDate: form.checkOutDate?.value || "not-Given",
        };
        console.log(getDate)

        try {
            // console.log('Received request with checkInDate:', checkInDate, 'and checkOutDate:', checkOutDate);

            // const response = await axios.get(`http://localhost:5000//availableRooms`, {
            //     params: {
            //         checkInDate,
            //         checkOutDate,
            //     },
            // });
            // console.log('Response from backend:', response.data);
            // setAvailableRooms(response.data.availableRooms);
            // console.log(availableRooms)
        } catch (error) {
            console.error('Error while searching for available rooms:', error);
        }
    };

    // console.log(availableRooms)

    return (
        <div>
            <div className="bg-transparent w-11/12 mx-auto flex justify-between relative z-10  text-white">
                <div className="w-4/12">
                    <h1 className="my-8 text-4xl font-dancing-script font-bold ">Book Your Vacation</h1>
                    <p className="mb-5">Explore new experiences with Hotale</p>
                    <Link
                        to='/login'
                        className="px-6 py-3 my-12 text-center font-bold bg-[#53624E] hover:bg-[#d4c9ba]"
                    >
                        Get Started
                    </Link>
                </div>
                <div>
                    <form onSubmit={handleSearch}>
                        <label className="bg-black  text-xl py-2 px-4 ">
                            Check-in Date:
                            <input
                                type="date"
                                name='checkInDate'
                                className="border-b py-2 bg-black focus:outline-none transition-colors peer w-full pl-3 font-poppins text-sm"
                            />
                        </label>
                        <label>
                            Check-out Date:
                            <input
                                type="date"
                                name='checkOutDate'
                                className="border-b py-2 bg-[#E0E1DF] focus:outline-none transition-colors peer w-full pl-3 font-poppins text-sm"
                            />
                        </label>
                        <div>
                            <button

                                type="submit"
                                className="px-6 py-3  text-center font-bold bg-[#53624E] hover:bg-[#AB916C]"
                            >
                                Check Availability
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Availability;


//  for md and sm
//  <div className="bg-transparent w-8/12 mx-auto flex flex-col justify-center items-center text-center relative z-10 -top-96 -left-0 text-white lg:hidden">
//                 <div>
//                     <h1 className="text-xl">Check In</h1>
//                     <input type="date" name="" id="" />
//                 </div>
//                 <div>
//                     <h1>|</h1>
//                 </div>
//                 <div>
//                     <h1 className="text-xl">Check In</h1>
//                     <input type="date" name="" id="" />
//                 </div>
//                 <div>
//                     <h1>|</h1>
//                 </div>
//                 <div>
//                     <h1 className="text-xl">Check In</h1>
//                     <input type="date" name="" id="" />
//                 </div>
//                 <div>
//                     <h1>|</h1>
//                 </div>
//                 <div>
//                     <button className="px-6 py-3 text-center font-bold bg-[#53624E] hover:bg-[#AB916C]">Check Availability</button>
//                 </div>
//             </div> 