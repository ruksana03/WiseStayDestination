// import React, { useState } from 'react';

import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ roomNo, price, discount }) => {
  const { user } = useAuth();
  console.log(user)
  const formRef = useRef()

  const goto = useNavigate();


  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;

    

    const booking = {
      userEmail: form.userEmail?.value || "Not-Given",
      checkInDate: form.checkInDate?.value || "not-Given",
      checkOutDate: form.checkOutDate?.value || "not-Given",
      guestNumber: form.guestNumber?.value || "Not=Given",
      roomNum: form.roomNum?.value || "not-Given",
      roomPrice: form.roomPrice?.value || "not-Given",
      discount: form.discount?.value || "not-Given",
    };

    console.log(booking);

    axios.post('http://localhost:5000/booking', booking)
      .then((res) => {
        console.log(res);
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Room Booked successfully.',
        }).then(() => {
          form.reset();
          goto('/myBookings')
        });
      })
      .catch((error) => {
        console.error(error)
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'An error occurred while posting data.',
        });
      });
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
    </div>
  );
};

export default BookingForm;
