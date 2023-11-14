import { useQuery } from "@tanstack/react-query";
import Loader from "../../Components/Shared/Loader";
import SubscriptionCard from "../../Components/DashboardComponents/ManageSubscriptionComponets/SubscriptionCard";
// import SubscriptionCard from "../../Components/DashboardComponents/ManageSubscriptionComponets/SubscriptionCard";


const ManageSubscriptions = () => {
    const { isPending, error, data, refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('https://wise-stay-destination-server.vercel.app/subscription').then(
                (res) => res.json(),
            ),
    })

    if (isPending) return <Loader></Loader>
    if (error) return 'An error has occurred: ' + error.message
    return (
        <div className="border-2 border-[#B99D75] p-2 m-2">
            <p className="text-xl font-poppins font-semibold text-center my-4">Total Subscribe users {data.length}</p>
            <div className="grid grid-cols-1 gap-2 w-full my-2">
            <div className="border-2 border-[#4E5C4A] grid grid-cols-1 justify-between text-left mx-4 px-4 py-2 lg:grid-cols-12">
            <h1 className="col-span-3 text-xl font-poppins font-bold">id</h1>
            <p>|</p>
            <h1  className="col-span-3 text-xl font-poppins font-bold">email</h1>
            <p>|</p>
            <p  className="col-span-3 text-xl font-poppins font-bold">check Policy</p>
        </div>
                {
                    data?.map((subscription) => (<SubscriptionCard refetch={refetch} key={subscription._id} subscription={subscription}></SubscriptionCard>))
                }
            </div>
        </div>
    );
};

export default ManageSubscriptions;