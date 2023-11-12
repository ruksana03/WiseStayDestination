import { MdDashboardCustomize } from "react-icons/md";
import ReviewSummary from "../../Components/DashboardComponents/DashboardPageComponents/ReviewSummary";
import RoomsSummary from "../../Components/DashboardComponents/DashboardPageComponents/RoomsSummary";
import SubscriptionsSummary from "../../Components/DashboardComponents/DashboardPageComponents/SubscriptionsSummary";
import UserSummary from "../../Components/DashboardComponents/DashboardPageComponents/UserSummary";


const Dashboard = () => {
    return (
        <div className="font-poppins">
            <div className="text-left text-4xl font-bold my-8 mx-4">
                <h1 className="flex justify-start gap-4 items-center"> <span><MdDashboardCustomize></MdDashboardCustomize></span>Dashboard Summary</h1>
            </div>
            <div>
                <div className="grid grid-cols-1 mx-auto lg:grid-cols-2 gap-4 w-10/12  border border-[#B99D75] p-4">
                    <div className="border border-[#B99D75]"><RoomsSummary></RoomsSummary></div>
                    <div className="border border-[#B99D75]"><SubscriptionsSummary></SubscriptionsSummary></div>
                    <div className="border border-[#B99D75]"><ReviewSummary></ReviewSummary></div>
                    <div className="border border-[#B99D75]"><UserSummary></UserSummary></div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;