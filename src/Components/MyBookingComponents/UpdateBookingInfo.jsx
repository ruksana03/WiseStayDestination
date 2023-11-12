import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";


const UpdateBookingInfo = () => {
    const updateInfo = useLoaderData();
    console.log(updateInfo)

    const formRef = useRef();
    const goto = useNavigate();
    // const { user } = useAuth();

    const { _id, userEmail, checkInDate, checkOutDate, guestNumber, roomNum, roomPrice, discount } = updateInfo || {};

    const handleUpdateBookingInfo = (e) => {
        e.preventDefault();
        const form = e.target;

        const updateBooking = {
            userEmail: form.userEmail?.value || "Not-Given",
            checkInDate: form.checkInDate?.value || "not-Given",
            checkOutDate: form.checkOutDate?.value || "not-Given",
            guestNumber: form.guestNumber?.value || "Not-Given",
            roomNum: form.roomNum?.value || "not-Given",
            roomPrice: form.roomPrice?.value || "not-Given",
            discount: form.discount?.value || "not-Given",
        };
        console.log(updateBooking);

        axios
        .put(`http://localhost:5000/bookings/${_id}`, updateBooking)

        .then((res) => {
            console.log(res);
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Data  updated successfully.',
            }).then(() => {
                form.reset();
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
    goto("/myBookings");
    }


    return (
        <div className="w-6/12 mx-auto">
            <h2 className='text-center my-4 border border-zinc-900'>Update Booking Form info</h2>
            <form className='flex flex-col ' ref={formRef} onSubmit={handleUpdateBookingInfo}>
                <label>
                    Your Email:
                    <input
                        type="email"
                        name='userEmail'
                        readOnly
                        defaultValue={userEmail}
                        className="border-b py-2 bg-white focus:outline-none transition-colors peer w-full pl-3 font-poppins text-sm"
                    />
                </label>
                <div className="flex justify-between gap-2">
                    <label>
                        Check-in Date:
                        <input
                            type="date"
                            name='checkInDate'
                            defaultValue={checkInDate}
                            className="border-b py-2 bg-white focus:outline-none transition-colors peer w-full pl-3 font-poppins text-sm"
                        />
                    </label>
                    <label>
                        Check-out Date:
                        <input
                            type="date"
                            name='checkOutDate'
                            defaultValue={checkOutDate}
                            className="border-b py-2 bg-white focus:outline-none transition-colors peer w-full pl-3 font-poppins text-sm"
                        />
                    </label>
                    <label>
                    Number of guest:
                    <input
                        type="number"
                        name='guestNumber'
                        defaultValue={guestNumber}
                        placeholder="Number of guest?"
                        className="border-b py-2 bg-white focus:outline-none transition-colors peer w-full pl-3 font-poppins text-sm"
                    />
                </label>
                </div>
              
                <div className="flex justify-between gap-2">
                <label>
                    Room No:
                    <input type="number"
                        // value={roomNo}
                        defaultValue={roomNum}
                        name='roomNum'
                        readOnly
                        className="border-b py-2 bg-white focus:outline-none transition-colors peer w-full pl-3 font-poppins text-sm" />
                </label>
                <label>
                    Price /Night (BDT):
                    <input
                        type="number"
                        // value={price}
                        defaultValue={roomPrice}
                        name='roomPrice'
                        readOnly
                        className="border-b py-2 bg-white focus:outline-none transition-colors peer w-full pl-3 font-poppins text-sm" />
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
                                    //   value={discount}
                                    defaultValue={discount}
                                    className="border-b py-2 bg-white focus:outline-none transition-colors peer w-full pl-3 font-poppins text-sm" />
                            </label>
                        </>
                    ) : null
                }
                </div>
                <button type="submit" className="w-full py-2 border border-black my-2">Update booking Info</button>
            </form>
            {/* {booked && <p>Booking successful!</p>} */}
        </div>
    );
};

export default UpdateBookingInfo;