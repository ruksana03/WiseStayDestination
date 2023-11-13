// import React, { useState } from 'react';

import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ roomNo, price, discount }) => {
  const { user } = useAuth();
  const formRef = useRef();
  const goto = useNavigate();

  const [booked, setBooked] = useState(false);

  const handleBooking = async (e) => {
    e.preventDefault();
    const form = e.target;

    const booking = {
      userEmail: form.userEmail?.value || "Not-Given",
      checkInDate: form.checkInDate?.value || "not-Given",
      checkOutDate: form.checkOutDate?.value || "not-Given",
      guestNumber: form.guestNumber?.value || "Not-Given",
      roomNum: form.roomNum?.value || "not-Given",
      roomPrice: form.roomPrice?.value || "not-Given",
      discount: form.discount?.value || "not-Given",
    };

    // Step 1: Check Room Availability
    const isRoomAvailable = await checkRoomAvailability(booking.roomNum, booking.checkInDate, booking.checkOutDate);

    // Step 2: Handle Booking
    if (isRoomAvailable) {
      // Room is available, proceed with booking
      try {
        const response = await axios.post('http://localhost:5000/booking', booking);
        console.log('Booking successful:', response.data);
        Swal.fire({
          icon: 'success',
          title: 'Booking Successful!',
          text: 'Your booking has been confirmed.',
        });
        goto('/myBookings');
        setBooked(true);
        
      } catch (error) {
        console.error('Error while booking:', error);
        Swal.fire({
          icon: 'error',
          title: 'Booking Error',
          text: 'An error occurred while processing your booking. Please try again later.',})
      }
    } else {
      // Room is not available, handle accordingly (e.g., show an error message)
      console.log('Room not available for the selected dates');
      Swal.fire({
        icon: 'error',
        title: 'Room Not Available',
        text: 'The selected room is not available for the specified dates. Please choose a different room or date range.',})
    }
    goto('/rooms');
  };

  // Function to check room availability
  const checkRoomAvailability = async (roomNum, checkInDate, checkOutDate) => {
    try {
      const response = await axios.get(`http://localhost:5000/checkAvailability?roomNum=${roomNum}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`);
      return response.data.available; // Assuming the server returns { available: true/false }
    } catch (error) {
      console.error('Error while checking room availability:', error);
      Swal.fire({
        icon: 'error',
        title: 'Availability Check Error',
        text: 'An error occurred while checking room availability. Please try again later.',
      });
      return false; // Handle error scenario
    }
  };


  return (
    <div>
      <h2 className='text-center my-4 border border-zinc-900'>Booking Form</h2>
      <form className='flex flex-col' ref={formRef} onSubmit={handleBooking}>
        <label>
          Your Email:
          <input
            type="email"
            name='userEmail'
            readOnly
            value={user.email}
            className="border-b py-2 bg-[#E0E1DF] focus:outline-none transition-colors peer w-full pl-3 font-poppins text-sm"
          />
        </label>
        <label>
          Check-in Date:
          <input
            type="date"
            name='checkInDate'
            className="border-b py-2 bg-[#E0E1DF] focus:outline-none transition-colors peer w-full pl-3 font-poppins text-sm"
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
        <label>
          Number of guest:
          <input
            type="number"
            name='guestNumber'
            placeholder="Number of guest?"
            className="border-b py-2 bg-[#E0E1DF] focus:outline-none transition-colors peer w-full pl-3 font-poppins text-sm"
          />
        </label>
        <label>
          Room No:
          <input type="number"
            value={roomNo}
            name='roomNum'
            readOnly
            className="border-b py-2 bg-[#E0E1DF] focus:outline-none transition-colors peer w-full pl-3 font-poppins text-sm" />
        </label>
        <label>
          Price /Night (BDT):
          <input
            type="number"
            value={price}
            name='roomPrice'
            readOnly
            className="border-b py-2 bg-[#E0E1DF] focus:outline-none transition-colors peer w-full pl-3 font-poppins text-sm" />
        </label>
        {
          discount ? (
            <>
              <label>
                Discount (in %):
                <input
                  type="number"
                  name='discount'
                  readOnly
                  value={discount}
                  className="border-b py-2 bg-[#E0E1DF] focus:outline-none transition-colors peer w-full pl-3 font-poppins text-sm" />
              </label>
            </>
          ) : null
        }
        <button type="submit">Book Now</button>
      </form>
      {booked && <p>Booking successful!</p>}
    </div>
  );
};

export default BookingForm;
