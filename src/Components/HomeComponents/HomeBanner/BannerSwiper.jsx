import HomeBannerText from "./HomeBannerText";


const BannerSwiper = ({ image }) => {
    return (
    
            <div
                data-aos="zoom-in"
                className="min-h-screen"
                style={{
                    backgroundImage: `url(${image.url})`,
                    transformOrigin: "center center",
                    backgroundSize: "cover"}}>
                <div className="bg-opacity-50 bg-[#53624E]"></div>
                <div><HomeBannerText></HomeBannerText></div>
            </div>

         
     






    );
};

export default BannerSwiper;



