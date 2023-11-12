import HomeBanner from "../Components/HomeComponents/HomeBanner/HomeBanner";
import NewsletterMap from "../Components/HomeComponents/NewsletterMap";
import SpecialOffer from "../Components/HomeComponents/Offer/SpecialOffer";
import Testimonial from "../Components/HomeComponents/Testimonial";
import WelcomeToHotel from "../Components/HomeComponents/WelcomeToHotel";
import FilterFeaturedRooms from "../Components/HomeComponents/WithDescountFeaturedRooms/FilterFeaturedRooms";




const Home = () => {
    return (
        <div>
            <div>
                <HomeBanner></HomeBanner>
            </div>
            <hr className="border-t-2 border-[#53624E] my-4 w-1/3" />

            <div data-aos="fade-up" className="">
                <WelcomeToHotel></WelcomeToHotel>
            </div>
            <hr className="border-t-2 border-[#53624E] my-4 w-1/3" />

            <div>
                <FilterFeaturedRooms></FilterFeaturedRooms>
            </div>
            <hr className="border-t-2 border-[#53624E] my-4 w-1/3" />

            <div data-aos="fade-up">
                <SpecialOffer></SpecialOffer>
            </div>
            <hr className="border-t-2 border-[#53624E] my-4 w-1/3" />

            <div data-aos="fade-up">
                <div className="text-center my-6">
                    <h1 className="text-4xl font-dancing-script">Testimonial</h1>
                    <p className="w-1/2 mx-auto text-xl font-poppins my-4">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                </div>
                <Testimonial></Testimonial>
            </div>
            <hr className="border-t-2 border-[#53624E] my-4 w-1/3" />

            <div data-aos="fade-up">
                <NewsletterMap></NewsletterMap>
            </div>

        </div>
    );
};

export default Home;