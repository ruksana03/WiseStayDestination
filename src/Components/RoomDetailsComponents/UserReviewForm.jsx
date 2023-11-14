import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Rating from "react-rating-stars-component";
import axios from "axios";
import Swal from "sweetalert2";

const UserReviewForm = () => {
    const reviewFor = useLoaderData();
    console.log(reviewFor);
    const goto = useNavigate();
    const { user } = useAuth();
    const { roomNum } = reviewFor || {};

    const [username, setUsername] = useState('');
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     // Get the current timestamp
    //     const timestamp = new Date().toLocaleString();

    //     // Create a review object with form data
    //     const review = {
    //         username,
    //         rating,
    //         comment,
    //         timestamp,
    //         roomNum
    //     };

    //     // Log the review for now
    //     console.log(review);

    //     axios
    //         .post("https://wise-stay-destination-server.vercel.app/userReviewsForRoom", review)
    //         .then((res) => {
    //             console.log(res);
    //             Swal.fire({
    //                 icon: 'success',
    //                 title: 'Review Successful!',
    //                 text: 'Your review was saved successfully.',
    //             });
    //             goto('/myBookings');
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //             Swal.fire({
    //                 icon: 'error',
    //                 title: 'Review Error',
    //                 text: 'An error occurred while processing your review. Please try again later.',
    //             });
    //         })
    //         .finally(() => {
    //             // Clear the form fields regardless of success or failure
    //             setUsername('');
    //             setRating(0);
    //             setComment('');
    //         });

    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    
    //     // Get the current timestamp
    //     const timestamp = new Date().toLocaleString();
    
    //     // Create a review object with form data
    //     const review = {
    //         username,
    //         rating,
    //         comment,
    //         timestamp,
    //         roomNum,
    //     };
    
    //     // Log the review for now
    //     console.log(review);
    
    //     try {
    //         // Check if the user has already reviewed this room
    //         const existingReview = await axios.get(`https://wise-stay-destination-server.vercel.app/userReviewsForRoom?username=${username}&roomNum=${roomNum}`);
    
    //         if (existingReview.data.length > 0) {
    //             // User has already reviewed this room, show a Swal error message
    //             Swal.fire({
    //                 icon: 'error',
    //                 title: 'Review Error',
    //                 text: 'You have already reviewed this room.',
    //             });
    //             goto('/myBookings');
    //         } else {
    //             // User hasn't reviewed this room yet, proceed with submission
    //             const res = await axios.post("https://wise-stay-destination-server.vercel.app/userReviewsForRoom", review);
    //             console.log(res);
    //             Swal.fire({
    //                 icon: 'success',
    //                 title: 'Review Successful!',
    //                 text: 'Your review was saved successfully.',
    //             });
    //             goto('/myBookings');
    //         }
    //     } catch (error) {
    //         console.error(error);
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Review Error',
    //             text: 'An error occurred while processing your review. Please try again later.',
    //         });
    //     } finally {
    //         // Clear the form fields regardless of success or failure
    //         setUsername('');
    //         setRating(0);
    //         setComment('');
    //     };
    // };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Get the current timestamp
        const timestamp = new Date().toLocaleString();
    
        // Create a review object with form data
        const review = {
            username,
            rating,
            comment,
            timestamp,
            roomNum,
        };
    
        // Log the review for now
        console.log(review);
    
        try {
            const res = await axios.post("https://wise-stay-destination-server.vercel.app/userReviewsForRoom", review);
            console.log(res);
    
            // Check for the error property in the response
            if (res.data.error) {
                // User has already reviewed this room, show a Swal error message
                Swal.fire({
                    icon: 'error',
                    title: 'Review Error',
                    text: res.data.error,
                });
                goto('/myBookings');
            } else {
                // User hasn't reviewed this room yet, proceed with submission
                Swal.fire({
                    icon: 'success',
                    title: 'Review Successful!',
                    text: 'Your review was saved successfully.',
                });
                goto('/myBookings');
            }
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Review Error',
                text: 'An error occurred while processing your review. Please try again later.',
            });
        } finally {
            // Clear the form fields regardless of success or failure
            setUsername('');
            setRating(0);
            setComment('');
        }
    };
    

    return (
        <div className="max-w-lg mx-auto">
            <h1 className="text-2xl font-bold text-center border border-black my-4 py-1">Share your review for Room No: {roomNum}</h1>

            <div>
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-between gap-2 w-full my-2">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Your Name:
                            </label>
                            <input
                                type="text"
                                value={user.displayName}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div>
                            <label>
                                Room No:
                                <input type="number"
                                    value={roomNum}
                                    name='roomNum'
                                    readOnly
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </label>
                        </div>
                    </div>

                    <div className="flex justify-between gap-2 w-full my-2">
                        <div className="w-1/2">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Rating:
                            </label>
                            <Rating
                                count={5}
                                value={rating}
                                size={40}
                                activeColor="#F59E0B"
                                onChange={(newRating) => setRating(newRating)}
                                required
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Comment:
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Write your Comment here..."
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                required
                            />
                        </div>
                    </div>



                    <button
                        className="w-full bg-[#53624E] hover:bg-neutral-focus text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit Review
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserReviewForm;
