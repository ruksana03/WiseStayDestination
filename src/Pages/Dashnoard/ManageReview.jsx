import { useQuery } from "@tanstack/react-query";
import Loader from "../../Components/Shared/Loader";
import ManageReviewCard from "../../Components/DashboardComponents/ManageReviewComponets/ManageReviewCard";

const ManageReview = () => {

    const { isPending, error, data, refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('http://localhost:5000/reviews').then(
                (res) => res.json(),
            ),
    })

    if (isPending) return <Loader></Loader>
    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className="border-2 border-[#B99D75] p-2 m-2">
            <p className="text-xl font-poppins font-semibold text-center my-4">Total users review {data.length}</p>
            <div className="grid grid-cols-1 gap-2 w-full my-2">
                <div className="border-2 border-[#4E5C4A] grid grid-cols-1 justify-between text-left mx-4 px-4 py-2 lg:grid-cols-12">
                    <h1 className="col-span-2 text-xl font-poppins font-bold">Image</h1>
                    <p>|</p>
                    <h1 className="col-span-2 text-xl font-poppins font-bold">Name</h1>
                    <p>|</p>
                    <p className="col-span-4 text-xl font-poppins font-bold">Comment</p>
                    <p>|</p>
                    <p className="col-span-1 text-xl font-poppins font-bold">Rating</p>
                </div>

                <div>
                    {
                        data?.map((review) => (
                            <ManageReviewCard refetch={refetch} key={review._id} review={review}></ManageReviewCard>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default ManageReview;