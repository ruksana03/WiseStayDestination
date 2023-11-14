import { useQuery } from "@tanstack/react-query";
import Loader from "../Shared/Loader";
import RoomCard from "./RoomCard";


const AllRoom = () => {

    const { isPending, error, data } = useQuery({
        queryKey: ['allRoomData'],
        queryFn: () =>
            fetch('https://wise-stay-destination-server.vercel.app/rooms').then(
                (res) => res.json(),
            ),
    })
    console.log(data)


    if (isPending) return <Loader></Loader>

    if (error) return 'An error has occurred: ' + error.message
    return (
        <div>
            {
                <div className="bg-white shadow-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-10/12 mx-auto border-2 p-2">
                    {
                        data.map((singleRoom) => (<RoomCard key={singleRoom._id} singleRoom={singleRoom}></RoomCard>))
                    }
                </div>
            }
        </div>
    );
};

export default AllRoom;