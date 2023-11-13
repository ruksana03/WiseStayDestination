import { useState } from 'react';
import { Link } from 'react-router-dom';


const BannerSwiper = ({ image }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      data-aos="zoom-in"
      className="min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${image.url})`,
        transformOrigin: 'center center',
        backgroundSize: 'cover',
        position: 'relative',
        cursor: isHovered ? 'default' : 'pointer',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-opacity-50 bg-[#53624E]"></div>
      <div className="w-4/12 mx-auto my-12 text-center">
        <div>
          <h1 className="my-8 text-4xl font-dancing-script font-bold text-white">
            Book Your Vacation
          </h1>
          <p className="mb-5 text-white">Explore new experiences with Hotale</p>
          <Link
            to="/login"
            className="px-6 py-3 my-12 text-center font-bold bg-[#53624E] hover:bg-[#d4c9ba]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerSwiper;
