import RoomCard from "./RoomCard";


const LowToHighPriceRooms = ({data}) => {
    console.log(data)
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

export default LowToHighPriceRooms;