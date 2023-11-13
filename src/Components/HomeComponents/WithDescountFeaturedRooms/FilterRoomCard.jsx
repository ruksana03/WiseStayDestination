import { Carousel } from "react-responsive-carousel";
import { BiArea } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { MdOutlineKingBed, MdOutlineBathroom } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
// import { BsImages } from "react-icons/bs";
import FilterCardImages from "./FilterCardImages";
import { Link } from "react-router-dom";

const FilterRoomCard = ({ filteredRoom }) => {
    const { _id, roomCategory, roomNo, discount, bathroom, roomBed, roomView, price, area, guestNumber, description, selectedOptions, selectedAmenities, imageUrls } = filteredRoom || {}

    return (
        <div  data-aos="zoom-in" className="border-2 border-[#242C22] font-poppins">
            <div className=" flex justify-between gap-2 font-bold text-white">
                <h1 className=" bg-[#AB916C] px-2 py-2 ">{price} BDT par Night</h1>
                <p className=" bg-[#AB916C] px-2 py-2">{discount}% Off</p>
            </div>
            <Link to={`/roomDetails/${_id}`}><FilterCardImages imageUrls={imageUrls} ></FilterCardImages></Link>
            <h1 className="text-xl font-bold font-poppins text-center">{roomCategory}</h1>
            <h1 className="text-xl font-bold font-poppins text-center">{roomNo}</h1>
            <hr className="border-t-2 border-[#AB916C] " />

            <div className="grid grid-cols-4 gap-2 mx-2 my-3  ">
                <div className="col-span-2 flex justify-center text-center items-center gap-2 border border-[#AB916C] p-1 text-sm font-bold">
                    <BiArea></BiArea>
                    <p>{area} m<sup>2</sup></p>
                </div>
                <div className="col-span-2 flex justify-center text-center items-center gap-2 border border-[#AB916C]  text-sm font-bold">
                    <BsPeople></BsPeople>
                    <p> Guest no: {guestNumber} </p>
                </div>
                <div className="col-span-4 flex justify-center gap-2 border border-[#AB916C]  text-sm font-bold">
                    <MdOutlineBathroom className="text-base"></MdOutlineBathroom>
                    <p className=""> Bathroom no:{bathroom} </p>
                </div>
                <div className="col-span-4 flex  justify-center text-center items-center gap-2 border border-[#AB916C] p-1 text-xs font-bold">
                    <MdOutlineKingBed></MdOutlineKingBed>
                    <p>{roomBed} Bad</p>
                </div>
              
            </div>

            <p className="truncate m-2">{description}</p>
            <div className="ml-2 font-poppins text-sm">
                <Link to={`/roomDetails/${_id}`}>
                    <button
                        className="underline flex justify-center items-center my-4 hover:text-xl">
                        Book Now
                        <span>
                            <IoIosArrowForward>
                            </IoIosArrowForward>
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FilterRoomCard;



