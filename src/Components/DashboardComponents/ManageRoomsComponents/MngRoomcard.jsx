import { Carousel } from "react-responsive-carousel";
import ImageCarousel from "./ImageCarousel";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineUpdate } from "react-icons/md";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const MngRoomcard = ({ room, refetch }) => {
  // console.log(room)

  const goto = useNavigate();

  const { _id, roomCategory, roomNo, discount, bathroom, roomBed, roomView, price, area, guestNumber, description, selectedOptions, selectedAmenities, imageUrls } = room || {};

  const handleDelete = (_id) => {
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
          .delete(`http://localhost:5000/rooms/${_id}`)
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
    <div className="grid grid-cols-12  w-10/12 mx-auto max-h-50 my-4 border-2 p-2 font-poppins">
      <div className="col-span-4 flex justify-center" >
        <Carousel showArrows={true} autoPlay={true} interval={5000}>
          {imageUrls.length > 0 &&
            imageUrls.map((img) => (
              <ImageCarousel key={img._id} img={img}></ImageCarousel>
            ))}
        </Carousel>
      </div>
      <div className="col-span-7 m-2 border border-orange-800 p-2">
        <div className="flex justify-between">
          <h1 className="text-sm  font-bold">{roomCategory}</h1>
          <h1 className="text-sm  font-bold">Room Number : {roomNo}</h1>
        </div>
        <div className="flex justify-between text-sm font-poppins gap-4">
          <p>Price Par Day: {price} BDT</p>
          <p>Discount: {discount} %</p>
        </div>

        <p className="font-bold">{roomView}</p>
        <div className="flex justify-between text-sm font-poppins gap-4">
          <p>Bathroom: {bathroom}</p>
          <p>Area: {area} m<sup>2</sup></p>
          <p>Guest Number: {guestNumber}</p>
        </div>
        <p>BadRoom: {roomBed}</p>
        <div className="flex gap4">
          {
            selectedAmenities.map((amenities) => <p className="border-2 mx-2 px-1 font-bold" key={amenities._id}>{amenities}</p>)
          }
        </div>
        {/* <div className="flex justify-between text-sm font-poppins gap-4">
          <p>Bathroom: {selectedOptions}</p>
          <p>BadRoom: {selectedAmenities}</p>
        </div> */}
        <p className="truncate text-sm font-poppins">{description}</p>
      </div>
      <div className="col-span-1 flex flex-col justify-center gap-4 items-center max-h-32 my-auto ">
        <button onClick={() => handleDelete(_id)}><AiFillDelete className="text-xl text-white bg-red-900 w-full rounded-full "></AiFillDelete></button>
        <button onClick={() => goto(`/dashboard/updateRoom/${_id}`)}><MdOutlineUpdate className="text-2xl text-white bg-green-900 rounded-full w-full"></MdOutlineUpdate></button>
      </div>
    </div>
  );
};

export default MngRoomcard;