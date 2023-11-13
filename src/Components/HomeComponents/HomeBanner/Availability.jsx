import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import Swal from 'sweetalert2';
import Loader from '../../Shared/Loader';
import { useNavigate } from 'react-router-dom';


const Availability = () => {
    const navigate = useNavigate();
    const [availableRooms, setAvailableRooms] = useState([]);
    const { isPending: isRoomPending, error: roomError, data: roomData } = useQuery({
        queryKey: ['allRoomData'],
        queryFn: () =>
            fetch('http://localhost:5000/rooms').then((res) => res.json()),
            onSuccess: (data) => {
                // Handle logic after room data is successfully fetched
                console.log('Room data fetched successfully:', data);
            },
    });

    const { isPending: isBookingsPending, error: bookingsError, data: bookingsData } = useQuery({
        queryKey: ['allBookings'],
        queryFn: () =>
            fetch('http://localhost:5000/bookings').then((res) => res.json()),
            onSuccess: (data) => {
                // Handle logic after bookings data is successfully fetched
                console.log('Bookings data fetched successfully:', data);
            },
    });

    const findAvailableRooms = (allRooms, allBookings, checkInDate, checkOutDate) => {
        const bookedRooms = allBookings.filter((booking) => {
            const bookingCheckIn = new Date(booking.checkInDate);
            const bookingCheckOut = new Date(booking.checkOutDate);

            return (
                (bookingCheckIn >= new Date(checkInDate) &&
                    bookingCheckIn < new Date(checkOutDate)) ||
                (bookingCheckOut > new Date(checkInDate) &&
                    bookingCheckOut <= new Date(checkOutDate))
            );
        });

        const availableRooms = allRooms.filter((room) => {
            return !bookedRooms.some((booking) => booking.roomNo === room.roomNum);
        });

        return availableRooms;
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        const form = e.target;
        const checkInDate = form.checkInDate.value;
        const checkOutDate = form.checkOutDate.value;

        // Find available rooms
        const rooms = findAvailableRooms(roomData, bookingsData, checkInDate, checkOutDate);

        // Set available rooms in state
        setAvailableRooms(rooms);
        navigate('/availableRoom', { state: { availableRooms } });

        // Do something with availableRooms, e.g., set it in a state
        console.log('Available Rooms:', availableRooms);
    };

    if (isRoomPending || isBookingsPending) return <Loader></Loader>;

    if (roomError || bookingsError)
        return 'An error has occurred: ' + (roomError || bookingsError).message;

    return (
        <div className="bg-black w-11/12 mx-auto text-white p-2">
            <form onSubmit={handleSearch} className="grid grid-cols-12 gap-4">
                <div className="col-span-8 flex flex-col md:flex-row md:justify-between md:gap-4 lg:flex-row lg:justify-between lg:gap-4">
                    <label>
                        Check-in Date:
                        <input
                            type="date"
                            name="checkInDate"
                            className="border-b py-2 bg-[#E0E1DF] text-black focus:outline-none transition-colors peer w-full pl-3 font-poppins text-sm"
                        />
                    </label>
                    <label>
                        Check-out Date:
                        <input
                            type="date"
                            name="checkOutDate"
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
