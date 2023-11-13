import { useQuery } from "@tanstack/react-query";
import BookingList from "../Components/MyBookingComponents/BookingList";
import Loader from "../Components/Shared/Loader";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";



const MyBooking = () => {
    const { user } = useAuth();
    // const userEmail = user.email;

    const [currentUserBookings, setCurrentUserBookings] = useState([]);

    const { isPending, error, data, refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('http://localhost:5000/bookings').then(
                (res) => res.json(),
            ),
    })
    console.log(data)

    useEffect(() => {
        if (data) {
            const filterResults = data.filter(userBooking => userBooking.userEmail === user.email);
            setCurrentUserBookings(filterResults);
        }
    }, [data]);


    console.log(currentUserBookings);

    if (isPending) return <Loader></Loader>

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <h2>Bookings for {user.email}</h2>

            <div>
                <table className="border border-zinc-900 w-10/12 mx-auto ">
                    <thead className="border-b border-black">
                        <tr>
                            <th>Room No</th>
                            <th>CheckIn</th>
                            <th>CheckOut</th>
                            <th>Price(BDT)</th>
                            <th>TotalDays</th>
                            <th>Total Price </th>
                            <th>DisCount(%)</th>
                            <th>FinalTotalPrice</th>
                            <th>Cancelation</th>
                            <th>Update</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUserBookings.map((currentUserBooking) => (
                            <BookingList key={currentUserBooking._id} CurrentUserBooking={currentUserBooking} refetch={refetch} />
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyBooking;
