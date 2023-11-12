import { Outlet } from "react-router-dom";
import Navbar from "../Components/NavComponents/Navbar/Navbar";
import InfoNavbar from "../Components/NavComponents/Navbar/InfoNavbar";
import { useEffect, useState } from "react";
import Footer from "../Components/FooterComponents/Footer/Footer";

const MainLayout = () => {
  const [isNavbarFixed, setNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarFixed(true);
      } else {
        setNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = isNavbarFixed
    ? "lg:fixed top-0 left-0 w-full z-50"
    : "lg:static"; // You can define your own styles for the fixed and non-fixed states.

  return (
    <div>
      <InfoNavbar></InfoNavbar>

      <div className={navbarClasses}>
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <div>
      <hr className="border-t-2 border-[#53624E] my-4 w-1/3" />
      <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
