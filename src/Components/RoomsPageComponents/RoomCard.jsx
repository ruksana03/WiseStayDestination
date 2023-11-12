import { BiArea } from "react-icons/bi";
import FilterCardImages from "../HomeComponents/WithDescountFeaturedRooms/FilterCardImages";
import { BsPeople } from "react-icons/bs";
import { MdOutlineBathroom, MdOutlineKingBed } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineFolderView } from "react-icons/ai";


const RoomCard = ({ singleRoom }) => {
    console.log(singleRoom)
    const { _id, roomCategory, roomNo, discount, bathroom, roomBed, roomView, price, area, guestNumber, description, selectedOptions, selectedAmenities, imageUrls } = singleRoom || {}

    return (
        <div data-aos="flip-left" className="border border-[#242C22] font-poppins bg-[#E0E1DF] shadow-lg">
            <div className="flex justify-between gap-2 text-black font-bold text-xs">
                <h1 className="bg-[#AB916C] px-2 py-2 ">{price} BDT per Night</h1>
                {typeof discount === 'number' && discount > 0 && (
                    <p className="bg-[#AB916C] px-2 py-2">{discount}% Off</p>
                )}
            </div>
            <div>
            <Link to={`/roomDetails/${_id}`}><FilterCardImages imageUrls={imageUrls} ></FilterCardImages></Link>
            </div>

            <div className="flex justify-between mx-4">
                <h1 className="text-xl font-bold font-poppins text-center">{roomCategory}</h1>
                <h1 className="text-xl font-bold font-poppins text-center">{roomNo}</h1>
            </div>
            <hr className="border-t-2 border-[#AB916C] " />

            <div className="grid grid-cols-2 gap-2 mx-2 my-3 text-sm font-bold">
                <div className="col-span-2 flex justify-center text-center items-center gap-2 border border-[#AB916C] p-1">
                    <MdOutlineKingBed></MdOutlineKingBed>
                    <p>{roomBed}</p>
                </div>
                <div className="col-span-2 flex justify-center text-center items-center gap-2 border border-[#AB916C] p-1">
                    <AiOutlineFolderView></AiOutlineFolderView>
                    <p>{roomView}</p>
                </div>
                <div className="flex justify-center text-center items-center gap-2 border border-[#AB916C] p-1">
                    <BiArea></BiArea>
                    <p>Area: {area} m<sup>2</sup></p>
                </div>
                <div className="flex justify-center text-center items-center gap-2 border border-[#AB916C] p-1">
                    <BsPeople></BsPeople>
                    <p>Guest no: {guestNumber} </p>
                </div>

                <div className="col-span-2 flex justify-center text-center items-center gap-2 border border-[#AB916C] p-1">
                    <MdOutlineBathroom></MdOutlineBathroom>
                    <p>{bathroom} Bathroom</p>
                </div>
            </div>

            <p className="truncate m-2">{description}</p>
            <div className="ml-2 font-poppins text-sm">
                <Link to={`/roomDetails/${_id}`}>
                    <button
                        className="underline flex justify-center items-center my-4 hover:text-xl">
                        View Details
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
export default RoomCard;