import axios from "axios";
import { useEffect, useState } from "react";


const BookingList = ({email}) => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/bookings?email=${email}`);
          setBookings(response.data);
        } catch (error) {
          console.error('Error fetching bookings:', error);
        }
      };
  
      fetchData();
    }, [email]);
  
    console.log(email)
    return (
        <div>
        <h2>Bookings for {email}</h2>
        <ul>
          {bookings.map((booking) => (
            <li key={booking._id}>
              Check-in: {booking.checkInDate}, Check-out: {booking.checkOutDate}, Room: {booking.roomNum}
            </li>
          ))}
        </ul>
      </div>
    );
};

export default BookingList;