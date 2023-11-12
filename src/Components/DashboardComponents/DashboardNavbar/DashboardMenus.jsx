import { NavLink } from "react-router-dom";


const DashboardMenus = () => {
    const links = ['addRooms', 'manageRooms', 'manageSubscriptions', 'manageReview'];
    const menuNames = ['Add Rooms', 'Manage Rooms', 'Manage Subscriptions', 'Manage Review'];
    return (
        <div className="flex flex-col lg:flex-row lg:gap-4">
            <ul className="">
                {
                    links.map((link, index) =>
                        <li className=" my-1 text-lg font-poppins"
                            key={link}>

                            <NavLink
                                className={({ isActive, isPending }) => {
                                    if (isPending) {
                                        return "pending";
                                    } else if (isActive) {
                                        return "active bg-[#53624E] font-bold text-sm text-white px-2 py-1 rounded-md";
                                    }
                                    return "border-b border-[#53624E] text-black "; 
                                }}
                                to={`/dashboard/${link}`}
                            >
                                {menuNames[index]}
                            </NavLink>
                        </li>)
                }
            </ul>
        </div>
    )
};

export default DashboardMenus;