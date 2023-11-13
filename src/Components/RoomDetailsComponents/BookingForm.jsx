// import React, { useState } from 'react';

import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ roomNo, price, discount }) => {
  const { user } = useAuth();
  const formRef = useRef();
  const goto = useNavigate();

  const [booked, setBooked] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [withDiscountTotalPrice, setWithDiscountTotalPrice] = useState(0);
  const [showBookingSummary, setShowBookingSummary] = useState(false);




  const handleBookingSummary = () => {
    // Calculate total and discounted total price for display in the summary
    const checkInDate = new Date(formRef.current.checkInDate.value);
    const checkOutDate = new Date(formRef.current.checkOutDate.value);
    const oneDayMilliseconds = 24 * 60 * 60 * 1000;
    const totalDays = Math.round((checkOutDate - checkInDate) / oneDayMilliseconds);
    const numericPrice = parseFloat(formRef.current.roomPrice.value);
    const numericDiscount = !isNaN(parseFloat(formRef.current.discount.value))
      ? parseFloat(formRef.current.discount.value)
      : 0;

    // Calculate the total price
    const calculatedTotalPrice = totalDays * numericPrice;
    setTotalPrice(calculatedTotalPrice)

    // Apply discount if available
    let calculatedWithDiscountTotalPrice = calculatedTotalPrice;
    if (!isNaN(numericDiscount) && isFinite(numericDiscount)) {
      const discountAmount = (numericDiscount / 100) * calculatedTotalPrice;
      calculatedWithDiscountTotalPrice = calculatedTotalPrice - discountAmount;
    }
    setWithDiscountTotalPrice(calculatedWithDiscountTotalPrice)
    // console.log(calculatedTotalPrice, calculatedWithDiscountTotalPrice);

    setShowBookingSummary(true);
  };



  const handleBooking = async (e) => {
    e.preventDefault();
    const form = e.target;

    const booking = {
      userEmail: form.userEmail?.value || "Not-Given",
      checkInDate: form.checkInDate?.value || "not-Given",
      checkOutDate: form.checkOutDate?.value || "not-Given",
      guestNumber: form.guestNumber?.value || "Not-Given",
      roomNum: form.roomNum?.value || "not-Given",
      roomPrice: form.roomPrice?.value || 0,
      discount: form.discount?.value || 0,
    };

    const isRoomAvailable = await checkRoomAvailability(booking.roomNum, 
      booking.checkInDate, 
      booking.checkOutDate
      );
    if (isRoomAvailable) {
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
        <button type="button" className="border border-red-950 my-4 py-2 hover:font-bold hover:border-2" onClick={handleBookingSummary}>Booking Summary</button>
        {showBookingSummary && (
          <div className="booking-summary border border-amber-800 p-2 mb-4">
            <h3 className="text-center font-bold">Your Booking</h3>
            <p>Email: {user.email}</p>
            <p>Check-in Date: {formRef.current.checkInDate.value}</p>
            <p>Check-out Date: {formRef.current.checkOutDate.value}</p>
            <p>Number of Guests: {formRef.current.guestNumber.value}</p>
            {/* <p>{response.data.available}</p> */}
            <p>Room No: {roomNo}</p>
            <p>Price/Night (BDT): {price}</p>
            <p>Total Price: {totalPrice}</p>
            {discount && <p>Discount (%): {discount}</p>}
            <p>Total Price (With discount): {withDiscountTotalPrice}</p>
          </div>
        )}
        <button type="submit" className="border border-red-950 mb-4 py-2 hover:font-bold hover:border-2">Book Now</button>
      </form>
      {booked && <p>Booking successful!</p>}
    </div>
  );
};

export default BookingForm;
