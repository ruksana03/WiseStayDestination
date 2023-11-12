import MyTimer from "../../Shared/MyTimer";
import ExtendStayOffer from "./OfferComp/ExtendStayOffer";
import MemberExclusiveOffer from "./OfferComp/MemberExclusiveOffer";
import SeasonalOffer from "./OfferComp/SeasonalOffer";
import WeekendOffer from "./OfferComp/WeekendOffer";


const SpecialOffer = () => {
    return (
        <div>
            <div className="w-8/12 mx-auto text-center font-poppins">
                <h1 className="text-2xl font-bold hover:text-[#B99D75]">
                    Unwind and Save: Exclusive Weekend Getaway Deals!
                </h1>
                <p>
                    Escape the routine and indulge in a memorable weekend retreat with our exclusive Weekend Offer. Enjoy special discounts on luxurious accommodations, delightful amenities, and personalized services. Whether it is a romantic escape, a family adventure, or a solo relaxation, make your weekends extraordinary with WiseStay Destination. Book now and create lasting memories at unbeatable prices!
                </p>
            </div>
            <div className="w-6/12 mx-auto">
                <h1 className="text-center my-4 text-5xl font-bold font-poppins">Upcoming Offer</h1>
                <MyTimer></MyTimer>
            </div>
            <div className="grid grid-cols-12 gap-4 w-10/12 mx-auto">
                <div className="col-span-12 md:col-span-6 lg:col-span-3 flex justify-center">
                    <WeekendOffer></WeekendOffer>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3 flex justify-center">
                    <ExtendStayOffer></ExtendStayOffer>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3 flex justify-center">
                    <SeasonalOffer></SeasonalOffer>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3 flex justify-center">
                    <MemberExclusiveOffer></MemberExclusiveOffer>
                </div>
            </div>

        </div>
    );
};

export default SpecialOffer;