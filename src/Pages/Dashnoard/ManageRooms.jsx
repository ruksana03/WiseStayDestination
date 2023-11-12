import { useQuery } from "@tanstack/react-query";
import MngRoomcard from "../../Components/DashboardComponents/ManageRoomsComponents/MngRoomcard";
import Loader from "../../Components/Shared/Loader";



const ManageRooms = () => {
    // const { isPending, error, data,refetch } = useQuery({
    const { isPending, error, data, refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('http://localhost:5000/rooms').then(
                (res) => res.json(),
            ),
    })

    if (isPending) return <Loader></Loader>

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className="border-2 border-[#B99D75] p-2 m-2">
            <p className="text-xl font-poppins font-semibold text-center my-4">Total Available Rooms {data.length}</p>

            <div >
                <div>
                    {
                        data?.map((room) => (
                            <MngRoomcard refetch={refetch} key={room._id} room={room}></MngRoomcard>
                        ))
                    }
                </div>
             
            </div>
        </div>
    );
};

export default ManageRooms;