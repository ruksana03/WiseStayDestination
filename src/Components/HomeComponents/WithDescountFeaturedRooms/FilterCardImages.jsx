import { Carousel } from "react-responsive-carousel";

const FilterCardImages = ({ imageUrls }) => {
    if (imageUrls.length > 0) {
        return (
            <div className="">
                <Carousel showArrows={true} autoPlay={true} interval={5000}>
                    {imageUrls.map((image) => (
                        <div key={image._id} className="max-h-40">
                            <img src={image} alt="" />
                        </div>
                    ))}
                </Carousel>
            </div>
        );
    } else {
        return <div className="max-h-40"></div>;
    }
};

export default FilterCardImages;
