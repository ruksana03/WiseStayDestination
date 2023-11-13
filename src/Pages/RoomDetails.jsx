import { Navigate, useLoaderData } from "react-router-dom";
import RoomDetailsBanner from "../Components/RoomDetailsComponents/RoomDetailsBanner";
import { MdOutlineBathroom, MdOutlineEmojiNature, MdOutlineKingBed } from "react-icons/md";
import { BiArea } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import Reservation from "../Components/RoomDetailsComponents/Reservation";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import axios from "axios";
import Rating from "react-rating-stars-component";



const RoomDetails = () => {
    const roomInfo = useLoaderData();
    console.log(roomInfo);
    const [roomReviews, setRoomReviews] = useState([]);
    const [averageRating, setAverageRating] = useState(0);


    const { _id, roomCategory, roomNo, discount, bathroom, roomBed, roomView, price, area, guestNumber, description, selectedOptions, selectedAmenities, imageUrls } = roomInfo || {};



    useEffect(() => {
        const fetchRoomReviews = async () => {
            try {
                const response = await axios.get("http://localhost:5000/userReviewsForRoom");
                const allRoomReviews = response.data;

                const filteredReviews = allRoomReviews.filter(review => review.roomNum === roomNo);
                setRoomReviews(filteredReviews);

                const totalRating = filteredReviews.reduce((sum, review) => sum + review.rating, 0);
                const avgRating = totalRating / filteredReviews.length;

                // Remove duplicate declarations here
                setAverageRating(avgRating || 0);

            } catch (error) {
                console.error("Error fetching room reviews:", error);
            }
        };

        fetchRoomReviews();
    }, [roomNo]);

    console.log(roomReviews)
    console.log(averageRating)


    return (
        <div className="font-poppins">
            <Helmet>
                <title>Room details </title>
                <meta name="description" content="Description for the home page" />
            </Helmet>
            <div>
                <RoomDetailsBanner imageUrls={imageUrls}></RoomDetailsBanner>
            </div>
            <div className="w-10/12 mx-auto grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-8">
                    <h1 className="text-4xl font-bold ">{roomCategory}</h1>
                    <p className=" mx-auto flex justify-start gap-2">
                        <Rating
                            count={5}
                            value={averageRating}
                            size={24}
                            edit={false}
                            activeColor="#FFD700"
                            isHalf={true}
                        />
                    </p>
                    <div className="flex justify-between">
                        <h1 className="text-xl font-semibold">Room No: {roomNo}</h1>
                        <h1 className="flex justify-center items-center gap-3 text-2xl"><span><MdOutlineEmojiNature className="text-3xl text-[#53624E]"></MdOutlineEmojiNature></span>{roomView}</h1>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mx-2 my-3">
                        <div className="flex justify-center text-center items-center gap-2 border border-[#AB916C] p-1">
                            <BiArea></BiArea>
                            <p>{area} m<sup>2</sup></p>
                        </div>
                        <div className="flex justify-center text-center items-center gap-2 border border-[#AB916C] p-1">
                            <BsPeople></BsPeople>
                            <p>{guestNumber} Guest</p>
                        </div>
                        <div className="flex justify-center text-center items-center gap-2 border border-[#AB916C] p-1">
                            <MdOutlineKingBed></MdOutlineKingBed>
                            <p>{roomBed} Bad</p>
                        </div>
                        <div className="flex justify-center text-center items-center gap-2 border border-[#AB916C] p-1">
                            <MdOutlineBathroom></MdOutlineBathroom>
                            <p>{bathroom} Bathroom</p>
                        </div>
                    </div>
                    <p>{description}</p>
                    <div className="border border-[#AB916C] my-4">
                        <h1 className="text-center my-2 font-bold text-xl">Extra Services</h1>
                        <div className="flex justify-between p-2">
                            <ul className="">
                                {
                                    selectedOptions.map((service) => (<li key={service._id}>{service}</li>))
                                }
                            </ul>
                            <ul>
                                {
                                    selectedAmenities.map((amenities) => (<li key={amenities._id}>{amenities}</li>))
                                }
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="col-span-12 lg:col-span-4">
                    <Reservation roomNo={roomNo} price={price} discount={discount}></Reservation>
                </div>

            </div>


        </div>
    );
};

export default RoomDetails;