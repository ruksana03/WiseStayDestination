import { Carousel } from "react-responsive-carousel";


const RoomDetailsBanner = ({imageUrls}) => {
    console.log(imageUrls)
    if (imageUrls.length > 0) {
        return (
            <div className="">
                <Carousel showArrows={true} autoPlay={true} interval={5000}>
                    {imageUrls.map((image) => (
                        <div data-aos="zoom-in-up" key={image._id} className="h-60">
                            <img className="h-full object-cover w-full" src={image} alt="" />
                        </div>
                    ))}
                </Carousel>
            </div>
        );
    } else {
        return <div className="h-60"></div>;
    }
};

export default RoomDetailsBanner;