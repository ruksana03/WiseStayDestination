import { useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import Loader from '../../Shared/Loader';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
// import { useEffect } from 'react';

const Availability = () => {
    const [availableRooms, setAvailableRooms] = useState([]);
    const navigate = useNavigate();

    
    const handleSearch = async (e) => {
        e.preventDefault();
        const form = e.target;
        const checkInDate = form.checkInDate.value;
        const checkOutDate = form.checkOutDate.value;
      
        try {
          // Fetch data using axios directly inside the event handler
          const response = await axios.get('http://localhost:5000/availableRooms', {
            params: { checkInDate, checkOutDate },
          });
      
          // Set availableRooms state with the response data
          setAvailableRooms(response.data);
          console.log(availableRooms);
      
          // Navigate to '/availableRoom' with the updated state
          navigate('/rooms/availableRoom', { state: { availableRooms: response.data } });
        } catch (error) {
          console.error('Error searching for available rooms:', error);
          Swal.fire({
            icon: 'error',
            title: 'Search Error',
            text: 'An error occurred while searching for available rooms. Please try again later.',
          });
        }
      };
      
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
            Check Available Rooms
          </button>
        </div>
      </form>
    </div>
  );
};

export default Availability;
