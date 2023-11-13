import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";
import Loader from "../Components/Shared/Loader";


const Login = () => {
    const { signIn, loading } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || '/';
            
    const handleSubmit = (event) => {
        event.preventDefault();

        // get field values 
        const email = event.target.email.value;
        const password = event.target.password.value;

        // validation 
        if (password.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password must be at least 6 characters',
                footer: '<a href="">Why do I have this issue?</a>'
            })
            return;
        }

        // creating a new user
        signIn(email, password)
            .then(res => {
                console.log(res);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login successFully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from)

            })
            .catch(error => console.log(error))


    }

    return (
        <div className="font-poppins">

            {loading ? <Loader /> : null}
            <div className="flex flex-col items-center lg:flex-row  gap-4 bg-[#EEF1F6] dark:bg-[#363739] w-full lg:justify-between lg:pr-28">
                <div className=" w-full lg:w-1/2 lg:p-28 "
                >

                    <div className="text-lg text-center py-6">
                        <h1 className="text-2xl  py-4"> Your Gateway to Tranquil Luxury.</h1>
                        <p className="py-4">Indulge in the epitome of hospitality at WishStay Destination Hotel, where luxury meets tranquility. Unwind in our lavish accommodations, where every detail is meticulously curated to provide you with an unforgettable stay. Immerse yourself in a world of comfort and sophistication, and let us redefine your travel experience. From personalized service to exquisite amenities, WishStay Destination Hotel is not just a destination; it is a journey into unparalleled hospitality. Book your stay now and discover the allure of a truly wishful retreat.
                        </p>
                    </div>


                </div>
                <div className="w-full lg:w-1/2 dark:text-white">
                    <div className="text-center text-2xl font-semibold">
                        <h1 className="text-4xl my-2">Welcome Again</h1>
                        <p>Sign In Your Account</p>
                    </div>
                    <div className="my-12 mx-8">
                        <form onSubmit={handleSubmit} className="flex flex-col">
                            <input type="text" placeholder="email" className="bg-white pl-4 py-3 text-lg" name='email' />

                            <input type="text" placeholder="password" className="bg-white pl-4 py-3 my-4 text-lg" name='password' />

                            <div className="flex justify-between text-lg mt-2 mb-6">
                                <div className=" flex gap-2">
                                    <input type="checkbox" name="" id="" />
                                    <h1> Remember me</h1>
                                </div>
                                <button className="">Forgot Password?</button>
                            </div>

                            <button 
                            className="py-3 bg-[#FFA637] rounded-sm text-lg text-white font-semibold" 
                            type='submit'>
                                Login
                                </button>

                            <div className="flex justify-between mt-6 text-lg">
                                <h1>New here?</h1>
                                <Link to="/register" className="label-text-alt link link-hover">Please Register</Link>
                            </div>
                            <div className="text-center">
                                <SocialLogin></SocialLogin>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;