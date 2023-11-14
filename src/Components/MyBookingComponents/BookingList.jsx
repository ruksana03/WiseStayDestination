import axios from "axios";
import Swal from "sweetalert2";
import { FaBan } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

import { MdReviews } from "react-icons/md";


const BookingList = ({ CurrentUserBooking,refetch }) => {
  const { _id, userEmail, checkInDate, checkOutDate, guestNumber, roomNum, roomPrice, discount } = CurrentUserBooking || {};

  const goto = useNavigate();


  // Convert check-in and check-out dates to JavaScript Date objects
  const checkIn = new Date(checkInDate);
  const checkOut = new Date(checkOutDate);

  // Calculate the total days of stay
  const totalDays = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));

  // Calculate the total price without discount
  const totalPriceWithoutDiscount = totalDays * roomPrice;

  // Initialize variables for discount-related calculations
  let discountAmount = 0;
  let finalTotalPrice = totalPriceWithoutDiscount;

  // Check if a discount is provided
  if (!isNaN(parseFloat(discount)) && isFinite(discount)) {
    // Calculate the discounted amount
    discountAmount = (discount / 100) * totalPriceWithoutDiscount;

    // Calculate the final total price after applying the discount
    finalTotalPrice = totalPriceWithoutDiscount - discountAmount;
  }


  const today = new Date();
  const isCancellationAllowed = today < checkIn - 24 * 60 * 60 * 1000; // 24 hours before check-in

  const handleCancelBooking = (_id) => {
    console.log(_id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://wise-stay-destination-server.vercel.app/bookings/${_id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire("has been deleted!", "success");
              refetch();
            }
          })
          .catch((error) => {
            console.error('Error deleting the room:', error);
            Swal.fire('Error', 'An error occurred while deleting the room.', 'error');
          });
      }
    });
  };

  return (
    <tr className="text-center border-b border-black">
      <td>{roomNum}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td>
      <td>{roomPrice}</td>
      <td>{totalDays}</td>
      <td>{totalPriceWithoutDiscount}</td>
      <td>{discount}</td>
      <td>{!isNaN(finalTotalPrice) ? finalTotalPrice : totalPriceWithoutDiscount}</td> 
      <td>{isCancellationAllowed ? <button onClick={() => handleCancelBooking(_id)} className="border-2 border-red-950 rounded-full p-2 bg-red-950 text-white"><AiFillDelete></AiFillDelete></button> : <FaBan className="mx-auto"></FaBan>}</td>
      <td><button onClick={()=>goto(`/updateBooking/${_id}`)}><GrUpdate></GrUpdate></button></td>
      <td><button onClick={()=>goto(`/reviewForm/${_id}`)}><MdReviews></MdReviews></button></td>
    </tr>
  );
};

export default BookingList;
