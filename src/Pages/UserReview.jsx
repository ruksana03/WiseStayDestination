import { useState } from "react";
import Rating from "react-rating-stars-component";
import useAuth from "../Hooks/useAuth";
import axios from "axios";



const UserReview = () => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const { user } = useAuth()
    console.log(user)

    const handleSubmit = (e) => {

        e.preventDefault();
        const reviewData = {
            rating,
            comment,
            name: user?.displayName || "not-Given",
            email: user?.email || "not-Given",
            image: user?.photoURL || "not-Given",
        };
        console.log("Review Data:", reviewData);

        axios
              .post("http://localhost:5000/reviews", reviewData)
              .then((res) => console.log(res))
              .catch((error) => console.error(error));
        setRating(0);
        setComment("");
    };

    return (
        <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4">Submit a Review</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Your Name:
                    </label>
                    <input
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Your Name"
                        name="name"
                        value={user?.displayName || "not-Given"}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Your Email:
                    </label>
                    <input
                        type="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Your Email"
                        name="email"
                        value={user?.email || "not-Given"}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Your image:
                    </label>
                    <input
                        type="url"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Your Email"
                        name="image"
                        value={user?.photoURL || "not-Given"}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Rating:
                    </label>
                    <Rating
                        count={5}
                        value={rating}
                        size={40}
                        activeColor="#F59E0B"
                        onChange={(newValue) => setRating(newValue)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Review:
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Write your review here..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit Review
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserReview;