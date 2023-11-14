import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Profile from "../Pages/Profile";
import DashboardLayout from "../Layout/DashboardLayout";
import AddRooms from "../Pages/Dashnoard/AddRooms";
import ManageRooms from "../Pages/Dashnoard/ManageRooms";
import UpdateRoom from "../Pages/Dashnoard/UpdateRoom";
import AboutTheHotel from "../Pages/AboutTheHotel";
import ManageSubscriptions from "../Pages/Dashnoard/ManageSubscriptions";
import ManageReview from "../Pages/Dashnoard/ManageReview";
import RoomDetails from "../Pages/RoomDetails";
import Rooms from "../Pages/Rooms";
import Contact from "../Pages/Contact";
import Dashboard from "../Pages/Dashnoard/Dashboard";
import AllRoom from "../Components/RoomsPageComponents/AllRoom";
import LowToHighPriceRooms from "../Components/RoomsPageComponents/LowToHighPriceRooms";
import HighToLowPriceRooms from "../Components/RoomsPageComponents/HighToLowPriceRooms";
import PrivateRouter from "./PrivateRouter";
import MyBooking from "../Pages/MyBooking";
// import BookingForm from "../Components/RoomDetailsComponents/BookingForm";
// import Reservation from "../Components/RoomDetailsComponents/Reservation";
import ReservationRoom from "../Pages/ReservationRoom";
import UpdateBookingInfo from "../Components/MyBookingComponents/UpdateBookingInfo";
import UserReviewForm from "../Components/RoomDetailsComponents/UserReviewForm";
import OurTestimonial from "../Pages/OurTestimonial";
import DisplayAvailableRoom from "../Pages/DisplayAvailableRoom";



const MainRouter = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/profile',
                element:<PrivateRouter><Profile></Profile></PrivateRouter>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/testimonials',
                element:<OurTestimonial></OurTestimonial>
            },
            {
                path:'/aboutTheHotel',
                element:<AboutTheHotel></AboutTheHotel>
            },
            {
                path:'/reservation/:id',
                element:<ReservationRoom></ReservationRoom>
            },
            {
                path:'/rooms',
                element:<PrivateRouter><Rooms></Rooms></PrivateRouter>,
                children:[
                    {
                        path:'/rooms/allRooms',
                        element:<PrivateRouter><AllRoom></AllRoom></PrivateRouter>
                    },
                    {
                        path:'/rooms/lowToHighPriceRooms',
                        element:<PrivateRouter><LowToHighPriceRooms></LowToHighPriceRooms></PrivateRouter>
                    },
                    {
                        path:'/rooms/highToLowPriceRooms',
                        element:<PrivateRouter><HighToLowPriceRooms></HighToLowPriceRooms></PrivateRouter>
                    },
                    {
                        path:'/rooms/availableRoom',
                        element:<PrivateRouter><DisplayAvailableRoom></DisplayAvailableRoom></PrivateRouter>
                    },
                ]
                
            },
            {
                path:'/roomDetails/:id',
                element:<PrivateRouter><RoomDetails></RoomDetails></PrivateRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/rooms/${params.id}`)
            },
            {
                path:'/reviewForm/:id',
                element:<PrivateRouter><UserReviewForm></UserReviewForm></PrivateRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
            {
                path:'/myBookings',
                element:<PrivateRouter><MyBooking></MyBooking></PrivateRouter>,
            },
            {
                path:'/updateBooking/:id',
                element:<PrivateRouter><UpdateBookingInfo></UpdateBookingInfo></PrivateRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
        ]
    },
    {
        path: '/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path:'/dashboard',
                element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>
            },
            {
                path:'/dashboard/addRooms',
                element:<PrivateRouter><AddRooms></AddRooms></PrivateRouter>
            },
            {
                path:'/dashboard/manageRooms',
                element:<PrivateRouter><ManageRooms></ManageRooms></PrivateRouter>,
                loader: () => fetch("http://localhost:5000/rooms")
            },
            {
                path:'/dashboard/updateRoom/:id',
                element:<PrivateRouter><UpdateRoom></UpdateRoom></PrivateRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/rooms/${params.id}`)
            },
            {
                path:'/dashboard/manageSubscriptions',
                element:<PrivateRouter><ManageSubscriptions></ManageSubscriptions></PrivateRouter>,
                loader: () => fetch("http://localhost:5000/subscription")
            },
            {
                path:'/dashboard/manageReview',
                element:<PrivateRouter><ManageReview></ManageReview></PrivateRouter>,
                loader: () => fetch("http://localhost:5000/reviews")
            }
        ]
    }
])

export default MainRouter;