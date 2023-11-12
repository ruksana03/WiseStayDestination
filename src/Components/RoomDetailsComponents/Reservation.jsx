import BookingForm from "./BookingForm";


const Reservation = ({roomNo, price, discount }) => {

  
    return (
        <div className="bg-white shadow-2xl rounded-md font-poppins p-3">
            <div className="flex flex-col justify-center border border-[#AB916C] p-4 ">
                <h1 className=" font-bold">Reservation for room number: {roomNo}</h1>
                <div className="font-bold">
                    <h1>Room Price: {price}BDT /Night</h1>
                    {discount && <h1> Discount: {discount}% Off</h1>}
                </div>
            </div>
            <div>
                <BookingForm  roomNo={roomNo} price={price} discount={discount}></BookingForm>
            </div>
        </div>
    );
};

export default Reservation;