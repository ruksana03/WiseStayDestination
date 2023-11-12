import { Outlet } from "react-router-dom";
import InfoNavbar from "../Components/NavComponents/Navbar/InfoNavbar";
import Navbar from "../Components/NavComponents/Navbar/Navbar";
import DashNav from "../Components/DashboardComponents/DashboardNavbar/DashNav";
import Footer from "../Components/FooterComponents/Footer/Footer";


const DashboardLayout = () => {
    return (
        <div>
            <InfoNavbar></InfoNavbar>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div
                    className="lg:col-span-3 lg:h-80 flex flex-col items-center mx-4 my-12">
                    <DashNav></DashNav>
                </div>
                <div className="lg:col-span-9 bg-white shadow-xl mx-6 mb-8 lg:my-8  p-4 rounded-md">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;