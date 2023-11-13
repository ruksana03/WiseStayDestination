
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { AiFillGoogleCircle } from "react-icons/ai";
import Loader from "../Components/Shared/Loader";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {

    const { googleLogin, loading } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from || '/';


    const handleSocialLogin = (media) => {
        media()
            .then(res => {
                console.log(res);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your social login successfully saved',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from)

            })
            .catch(err => {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'some error happen in social side',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            })
    }

    return (
        <div>
            {loading ? <Loader></Loader> : null}
            <div className=" flex gap-4 justify-center items-center py-4 text-4xl">
                <h1 className="text-xl font-bold">Or Continue With</h1>
                <button
                    onClick={() => handleSocialLogin(googleLogin)}
                    className=" px-4 py-2 ">
                    <AiFillGoogleCircle
                        className="text-[#900431]">
                    </AiFillGoogleCircle>
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;