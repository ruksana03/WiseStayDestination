// import axios from "axios";
// import { useState } from "react";



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

        <div className="bg-black w-11/12 mx-auto text-white p-2">


            <form onSubmit={handleSearch} className="grid grid-cols-12 gap-4">
                <div className="col-span-8 flex flex-col md:flex-row md:justify-between md:gap-4 lg:flex-row lg:justify-between lg:gap-4">
                    <label>
                        Check-in Date:
                        <input
                            type="date"
                            name='checkOutDate'
                            className="border-b py-2 bg-[#E0E1DF] text-black focus:outline-none transition-colors peer w-full pl-3 font-poppins text-sm"
                        />
                    </label>
                    <label>
                        Check-out Date:
                        <input
                            type="date"
                            name='checkOutDate'
                            className="border-b py-2 bg-[#E0E1DF] text-black focus:outline-none transition-colors peer w-full pl-3 font-poppins text-sm"
                        />
                    </label>
                </div>
                <div className="col-span-4 flex items-center justify-end">
                    <button
                        type="submit"
                        className="px-6 py-3 text-center font-bold bg-[#53624E] hover:bg-[#AB916C] hover:text-black"
                    >
                        Check Availability
                    </button>
                </div>


            </form>

        </div>
    );
};

export default Availability;

