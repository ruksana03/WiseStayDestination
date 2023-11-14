import { useQuery } from "@tanstack/react-query";


const ReviewSummary = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ['reviewsSummary'],
        queryFn: () =>
            fetch('https://wise-stay-destination-server.vercel.app/reviews').then(
                (res) => res.json(),
            ),
    })

    console.log(data)

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    return (
        <div className="p-4 bg-[#DDD8B8] text-black text-center text-2xl">
            Total Review <span className="underline">{data.length}</span>
        </div>
    );
};

export default ReviewSummary;