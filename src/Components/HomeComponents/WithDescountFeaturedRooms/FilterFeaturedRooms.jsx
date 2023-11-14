import { useQuery } from "@tanstack/react-query";
import Loader from "../../Shared/Loader";
import { useEffect, useState } from "react";
import FilterRoomCard from "./FilterRoomCard";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";


const FilterFeaturedRooms = () => {

    const [filteredRooms, setFilteredRooms] = useState([]);

    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('https://wise-stay-destination-server.vercel.app/rooms').then(
                (res) => res.json(),
            ),
    })
    console.log(data)

    useEffect(() => {
        if (data) {
            const filterResults = data.filter(room => room.discount !== "not-Given");
            setFilteredRooms(filterResults);
        }
    }, [data]);


    console.log(filteredRooms);


    if (isPending) return <Loader></Loader>
    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <div className="w-8/12 mx-auto text-center font-poppins my-6">
                <h1 className="font-bold text-2xl my-2"> Discover Our Exclusive Featured Rooms</h1>
                <p className="text-sm">Indulge in a luxurious stay with our specially curated featured rooms. Each room is thoughtfully designed to provide a unique and unforgettable experience. From stunning views to premium amenities, our featured rooms are crafted to elevate your stay and create lasting memories. Explore a selection of handpicked rooms that redefine luxury and comfort. Your extraordinary getaway begins with our exclusive featured rooms.</p>
                <div className="flex justify-between">
                    <Link to='/rooms'><button className="underline flex justify-center items-center my-4 hover:text-xl">VIEW OUR ALL ROOMS <IoIosArrowForward></IoIosArrowForward></button></Link>
                    <Link to='/login'><button className="underline flex justify-center items-center my-4 hover:text-xl">Book Now <IoIosArrowForward></IoIosArrowForward></button></Link>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-10/12 mx-auto border-2">
                {
                    filteredRooms.map((filteredRoom) => (<FilterRoomCard key={filteredRoom._id} filteredRoom={filteredRoom}></FilterRoomCard>))
                }
            </div>
        </div>

    );
};

export default FilterFeaturedRooms;