import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillLinkedin, AiFillGithub, AiOutlineSearch } from "react-icons/ai";
import Logo from "../../Shared/Logo";
// import { GiPaperPlane } from "react-icons/gi";

const Footer = () => {
    return (
        <div className="hero " style={{ backgroundImage: 'url(https://i.ibb.co/CnQqpP8/img-66.jpg)' }}>
            <div className="hero-overlay  bg-opacity-80 bg-[#273026]"></div>
            <div className="text-white">

                <div className="py-3">
                    <Logo></Logo>
                </div>

                <div className="flex justify-center">
                    <input
                        type="search"
                        name=""
                        id=""
                        className="relative w-1/2 border-b py-2 bg-transparent focus:outline-none transition-colors peer pl-3 font-poppins text-sm" />
                    <button className="border px-4 rounded-e-lg flex justify-between items-center gap-2 font-poppins text-lg">
                        Search
                        <span>
                            <AiOutlineSearch className="text-xl font-bold "></AiOutlineSearch>
                        </span>
                    </button>
                </div>

                <div className=" flex gap-2 justify-center py-4 text-2xl">
                    <a href=""><AiFillFacebook></AiFillFacebook></a>
                    <a href=""><AiFillTwitterSquare></AiFillTwitterSquare></a>
                    <a href=""><AiFillInstagram></AiFillInstagram></a>
                    <a href=""><AiFillLinkedin></AiFillLinkedin></a>
                    <a href=""><AiFillGithub></AiFillGithub></a>

                </div>
                <p className="text-xs font-dancing-script font-bold">Copyright © 2023 - All right reserved by <span className="text-sm">Wish Stay Destination</span></p>
            </div>
        </div>
    );
};

export default Footer;