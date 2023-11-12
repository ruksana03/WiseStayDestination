import { useQuery } from "@tanstack/react-query";


const RoomsSummary = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ['RoomSummary'],
        queryFn: () =>
            fetch('http://localhost:5000/rooms').then(
                (res) => res.json(),
            ),
    })

    console.log(data)

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
  
    return (
        <div className="p-4 bg-[#9F2305] text-white text-center text-2xl">
            Total Available Room <span className="underline">{data.length}</span>
        </div>
    );
};

export default RoomsSummary;