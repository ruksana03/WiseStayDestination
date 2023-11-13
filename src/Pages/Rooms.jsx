import { useQuery } from "@tanstack/react-query";
import RoomPageBanner from "../Components/RoomsPageComponents/RoomPageBanner";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import RoomCard from "../Components/RoomsPageComponents/RoomCard";
import Loader from "../Components/Shared/Loader";
import { useState } from "react";
import FilteredRooms from "../Components/RoomsPageComponents/FilteredRooms";
import { Helmet } from "react-helmet";

const Rooms = () => {

   

    const { isPending, error, data } = useQuery({
        queryKey: ['allRoomData'],
        queryFn: () =>
            fetch('http://localhost:5000/rooms').then(
                (res) => res.json(),
            ),
    })
    console.log(data)


    if (isPending) return <Loader></Loader>

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className="font-poppins">
            <Helmet>
                <title>Rooms </title>
                <meta name="description" content="Description for the home page" />
            </Helmet>
            <div>
                <RoomPageBanner></RoomPageBanner>
            </div>

            <div className="w-10/12 mx-auto my-6 grid grid-cols-12 gap-4 justify-between">
                <div className="col-span-4 lg:col-span-6">
                    <img className="w-full" src="https://i.ibb.co/Cs1fdmy/image102.jpg" alt="" />
                </div>
                <div className="text-left pl-6 col-span-8 lg:col-span-6 ">
                    <h1 className="text-xs  my-4 font-bold lg:text-sm">WELCOME TO WISH STAY DESTINATION</h1>
                    <p className="text-lg lg:text-4xl font-bold"> Luxury Penthouses </p>
                    <p className="hidden lg:block lg:text-base lg:my-8 lg:pr-12">Indulge in opulence at Wish Stay Destination, where luxury meets comfort in our exquisite penthouses. Elevate your stay with unparalleled views, sophisticated interiors, and a blend of modern amenities. Experience a world of extravagance as we redefine the art of luxury living in our exclusive penthouse accommodations.</p>
                    <Link
                        to='/contact'>
                        <div
                            className="flex items-center gap-4 justify-start my-8">
                            <div>
                                <FiPhoneCall
                                    className="text-4xl">
                                </FiPhoneCall>
                            </div>
                            <div>
                                <p>
                                    CALL US FOR MORE INFORMATION
                                </p>
                                <p>
                                    +880 22 345 66 77
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link
                        className="underline text-xl px-4 py-2 hover:text-2xl"
                        to='/contact'>
                        Contact Us
                    </Link>
                </div>
            </div>

            <div>
                <h1 className="text-center text-5xl font-bold my-5 border border-red-800 w-10/12 mx-auto">Our Total Rooms Collection : {data.length}</h1>
                <div>
                   <FilteredRooms data={data}></FilteredRooms>
                </div>
                {/* {
                    <div className="bg-white shadow-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-10/12 mx-auto border-2 p-2">
                        {
                            data.map((singleRoom) => (<RoomCard key={singleRoom._id} singleRoom={singleRoom}></RoomCard>))
                        }
                    </div>
                } */}
            </div>

        </div>
    );
};

export default Rooms;