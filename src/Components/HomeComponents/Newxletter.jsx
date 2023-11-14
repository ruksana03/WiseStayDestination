import axios from "axios";
import { useState } from "react";
import { GiPaperPlane } from "react-icons/gi";

const Newxletter = () => {
    const [isSubscribed, setIsSubscribed] = useState(true);

    const handleSubscriptions = async (e) => {
        e.preventDefault();
        const form = e.target;

        const subscriptions = {
            email: form.email?.value || "Not Given",
            check: isSubscribed,
        };

        try {
            const response = await axios.post("https://wise-stay-destination-server.vercel.app/subscription", subscriptions);
            console.log("Subscription success:", response.data);
        } catch (error) {
            console.error("Subscription error:", error);
        }
    };

    const handleCheckboxChange = () => {
        setIsSubscribed(!isSubscribed); // Toggle the checkbox value
    };

    return (
        <div className="text-center mt-14">
            <p className="text-xl font-poppins font-bold">STAY TUNED WITH WISH STAY DESTINATION</p>
            <h1 className="text-sm font-dancing-script font-semibold my-4">
                Sign up for our newsletter to receive our news, deals, and special offers.
            </h1>
            <form onSubmit={handleSubscriptions}>
                <div>
                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            id=""
                            placeholder="Your email address"
                            className="border-b py-2 bg-[#E0E1DF] focus:outline-none transition-colors peer w-full pl-3 font-poppins text-sm"
                        />
                        <hr className="border-t border-[#53624E]" />
                        <button className="absolute top-0 right-0 font-poppins flex justify-center items-center gap-2">
                            Subscribe
                            <span>
                                <GiPaperPlane></GiPaperPlane>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="flex justify-start text-left gap-2 my-4 font-poppins">
                    <input
                        type="checkbox"
                        name="check"
                        id=""
                        required
                        checked={isSubscribed}
                        onChange={handleCheckboxChange}
                    />
                    <p>I agree to the Privacy Policy</p>
                </div>
            </form>
        </div>
    );
};

export default Newxletter;
