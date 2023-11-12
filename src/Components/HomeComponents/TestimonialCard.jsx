
import Rating from "react-rating-stars-component";

const TestimonialCard = ({ testimonial }) => {
    const { rating, comment, name, email, image } = testimonial || {};

    const starColor = rating >= 4 ? "text-green-500" : "text-red-500";

    return (
        <div className="p-9 w-6/12 mx-auto text-white text-center">
            <p className="w-1/5 mx-auto my-6">
                <Rating
                    count={5}
                    value={rating}
                    size={24}
                    edit={false}
                    activeColor="#FFD700"
                    isHalf={true}
                    classNames={starColor}
                />
            </p>

            <p className="text-lg font-bold font-poppins my-2">“ {comment} ”</p>

            <div className="w-1/6 mx-auto">
                <img className="mx-auto rounded-full" src={image} alt="" />
            </div>
            <h1 className="text-xl font-poppins">{name}</h1>
        </div>
    );
};

export default TestimonialCard;

