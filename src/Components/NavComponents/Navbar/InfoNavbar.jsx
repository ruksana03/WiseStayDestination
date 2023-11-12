import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import ProfileButton from "../NavComp/ProfileButton";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import { FaXTwitter, FaPinterestP } from "react-icons/fa6";

const InfoNavbar = () => {
    const { user } = useAuth();

    return (
        <div className="flex justify-between gap-4 bg-transparent text-black py-4 text-lg px-16">
            {/* 1 */}
            <div className="hidden lg:flex lg:gap-4">
                <h1>info@hotel.com</h1>
                <h1>+880 1772389</h1>
            </div>

            
                

            {/* 2 */}
            <div className="block mx-auto items-center lg:hidden">
                <div>
                    {user?.email ? (
                        <div>
                            <Link to="/"><ProfileButton></ProfileButton></Link>
                        </div>
                    ) : (
                        <Link to='/login'>
                            <button className="border-2 px-4 py-2 rounded-lg">
                                Login
                            </button>
                        </Link>
                    )}
                </div>
                <Link className="text-center">Know more...</Link>
            </div>

            {/* 3 */}
            <div className="hidden lg:flex justify-center items-center gap-3">
                <AiOutlineInstagram></AiOutlineInstagram>
                <AiOutlineFacebook></AiOutlineFacebook>
                <FaXTwitter></FaXTwitter>
                <FaPinterestP></FaPinterestP>
                {user?.email ? (
                    <div>
                        <Link to="/">Hi, {user.displayName} </Link>
                    </div>
                ) : (
                    <div>
                        <Link className="mx-2" to='/login'>
                            Login
                        </Link>
                        |
                        <Link className="mx-2" to='/register'>
                            Sign Up
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InfoNavbar;
