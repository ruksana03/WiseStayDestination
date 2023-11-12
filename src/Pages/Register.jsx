import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loader from "../Components/Shared/Loader";


const Register = () => {

    const { createUser, loading } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        // get field values 
        const name = event.target.name.value;
        const email = event.target.email.value;
        const img = event.target.img.value;
        const password = event.target.password.value;
        console.log(name, email, img, password);

        // validation 
        if (password.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password must be at least 6 characters',
                footer: '<a href="">Why do I have this issue?</a>'
            })
            // toast.error('Password must be at least 6 characters');
            return;
        }

        // creating a new user
        createUser(email, password)
            .then(res => {
                console.log(res);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => console.log(error))


    }


    return (
        <div className="font-poppins">
            {loading ? <Loader /> : null}

            <div className="flex flex-col items-center lg:flex-row  gap-4 bg-[#EEF1F6]  w-full lg:justify-between lg:pr-28" >

                <div className=" w-full lg:w-1/2 lg:p-28 "
                //  style={{
                //     backgroundImage: `url(${bgImg3})`,
                //     backgroundSize: 'cover',

                // }}
                >

                    <div className="text-lg text-center py-6">
                        <h1 className="text-2xl  py-4"> Your Gateway to Tranquil Luxury.</h1>
                        <p className="py-4">Indulge in the epitome of hospitality at WishStay Destination Hotel, where luxury meets tranquility. Unwind in our lavish accommodations, where every detail is meticulously curated to provide you with an unforgettable stay. Immerse yourself in a world of comfort and sophistication, and let us redefine your travel experience. From personalized service to exquisite amenities, WishStay Destination Hotel is not just a destination; it is a journey into unparalleled hospitality. Book your stay now and discover the allure of a truly wishful retreat.
                        </p>
                    </div>


                </div>
                <div className="w-full lg:w-1/2 dark:bg-[#363739]">
                    <div className="text-center text-2xl font-semibold">
                        <h1 className="text-4xl my-2">Welcome to WishStay Destination Hotel</h1>
                        <p>Create An Account</p>
                    </div>
                    <div className="my-12 mx-8">
                        <form onSubmit={handleSubmit} className="flex flex-col">
                            <input type="text" placeholder="Full name" className="bg-white pl-4 py-3 text-lg" name='name' />

                            <input type="text" placeholder="email" className="bg-white pl-4 py-3 my-2 text-lg" name='email' />

                            <input type="text" placeholder="image url" className="bg-white pl-4 py-3 mb-2 text-lg" name='img' />

                            <input type="text" placeholder="password" className="bg-white pl-4 py-3 mb-2 text-lg" name='password' />

                            <div className=" flex gap-2 text-lg mt-2 mb-6">
                                <input type="checkbox" name="" id="" />
                                <h1> Remember me</h1>
                            </div>

                            <button className="py-3 bg-[#FFA637] rounded-sm text-lg text-white font-semibold" type='submit'>Register</button>

                            <div className="flex justify-between mt-6 text-lg">
                                <h1>Have an account?</h1>
                                <Link to="/login" className="label-text-alt link link-hover">Please Login</Link>
                            </div>
                            <div >
                                <SocialLogin></SocialLogin>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;