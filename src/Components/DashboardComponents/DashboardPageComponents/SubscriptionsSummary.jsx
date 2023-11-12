import { useQuery } from "@tanstack/react-query";


const SubscriptionsSummary = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ['subscriptionSummary'],
        queryFn: () =>
            fetch('http://localhost:5000/subscription').then(
                (res) => res.json(),
            ),
    })

    console.log(data)

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    return (
        <div className="p-4 bg-[#57886C] text-white text-center text-2xl">
            Total Available Subscriber <span className="underline">{data.length}</span>
        </div>
    );
};

export default SubscriptionsSummary;