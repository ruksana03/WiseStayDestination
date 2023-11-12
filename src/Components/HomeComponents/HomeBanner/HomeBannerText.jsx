import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";

const HomeBannerText = () => {
  return (
    <Parallax
      bgImage="path/to/your/parallax-image.jpg"
      strength={500}
      className="lg:hero-content text-center text-white"
    >
      <div className="max-w-md">
        <h1 className="my-8 text-4xl font-dancing-script font-bold ">Book Your Vacation</h1>
        <p className="mb-5">Explore new experiences with Hotale</p>
        <Link
          to='/aboutTheHotel'
          className="px-6 py-3 my-12 text-center font-bold bg-[#53624E] hover:bg-[#AB916C]"
        >
          About Us
        </Link>
      </div>
    </Parallax>
  );
};

export default HomeBannerText;
