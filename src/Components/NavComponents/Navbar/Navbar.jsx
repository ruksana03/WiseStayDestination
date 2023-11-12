import { Link } from "react-router-dom";
import NavDropdown from "../NavComp/NavDropdown";
import Menus from "../NavComp/Menus";
import useAuth from "../../../Hooks/useAuth";
import ProfileButton from "../NavComp/ProfileButton";
import Logo from "../../Shared/Logo";




const Navbar = () => {

    const { user } = useAuth();
    return (
        <div className="flex justify-between gap-4 bg-[#53624E] text-white py-4 text-lg px-16">
            <div className="relative flex justify-center  items-center">
                <div className="lg:hidden">
                    <NavDropdown></NavDropdown>
                </div>
                <div className="hidden lg:flex lg:gap-2">
                    <Link to="/"><Logo></Logo></Link>
                    {/* <ThemMood></ThemMood> */}
                </div>
            </div>
            <div className="hidden lg:block">
                <div>
                    <ul className="flex justify-center items-center text-center">
                        <Menus></Menus>
                    </ul>
                </div>

            </div>
            <div className="flex gap-2 lg:hidden">
                <Link to="/"><Logo></Logo></Link>
                {/* <ThemMood></ThemMood> */}
            </div>
            <div className="hidden lg:block">
               
                {
                    user?.email ? <div>
                        <Link to="/"><ProfileButton></ProfileButton></Link>
                    </div>
                        :
                        <Link to='/login'>
                            <button className="border-2 px-4 py-2 rounded-lg"

                            >Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;