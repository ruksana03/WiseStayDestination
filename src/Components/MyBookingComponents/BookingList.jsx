

const BookingList = ({ CurrentUserBooking }) => {
  const { _id, userEmail, checkInDate, checkOutDate, guestNumber, roomNum, roomPrice, discount } = CurrentUserBooking || {};


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

  return (
    <tr className="text-center">
      <td>{roomNum}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td>
      <td>{roomPrice}</td>
      <td>{totalDays}</td>
      <td>{totalPriceWithoutDiscount}</td>
      <td>{discount}</td>
      <td>{!isNaN(finalTotalPrice) ? finalTotalPrice : totalPriceWithoutDiscount}</td> 
    </tr>
  );
};

export default BookingList;
