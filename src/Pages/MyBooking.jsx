import BookingList from "../Components/MyBookingComponents/BookingList";
import useAuth from "../Hooks/useAuth";


const MyBooking = () => {
    const { user } = useAuth();
    const userEmail = user.email;
    return (
        <div>
            <BookingList email={userEmail}></BookingList>
        </div>
    );
};

export default MyBooking;
