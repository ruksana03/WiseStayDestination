import { useEffect, useState } from "react";
import UserReview from "./UserReview";
import axios from "axios";
import Rating from "react-rating-stars-component";
import useAuth from "../Hooks/useAuth";
import { BiDownArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const OurTestimonial = () => {
    const [data, setData] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios
            .get('http://localhost:5000/reviews')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    return (
        <div>
            <Helmet>
                <title>Our Testimonials</title>
                <meta name="description" content="Description for the home page" />
            </Helmet>
            <div className="w-11/12 mx-auto flex justify-between font-poppins">
                <div className="w-1/2">
                    {
                        user?.email ? <div>
                            <UserReview />
                        </div>
                            :
                            <div className="m-10 border border-lime-900 p-4">
                                <h1 className="text-2xl font-bold text-center">Share Your WishStay Experience</h1>
                                <p className="text-center font-semibold text-lg">Leave a Review and Make Memories Last Forever</p>
                                <p className="flex justify-center gap-4 my-4"> Click the the button and review us <BiDownArrowAlt className="text-2xl border-2 border-lime-800 rounded-full"></BiDownArrowAlt></p>
                                <Link to='/login'> <button className="text-lg font-bold w-full py-2 my-4 bg-[#53624E] text-white hover:bg-[#AB916C] hover:text-black">Review Us</button></Link>
                            </div>
                    }

                </div>
                <div className="w-1/2 my-10" style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 200px)' }}>
                    {
                        data.map((eachTestimonial) => (
                            <div className=" text-black text-center border border-lime-800 my-4" key={eachTestimonial.id}>
                                <p className="w-1/5 mx-auto my-6">
                                    <Rating
                                        count={5}
                                        value={eachTestimonial.rating}
                                        size={24}
                                        edit={false}
                                        activeColor="#FFD700"
                                        isHalf={true}
                                    />
                                </p>

                                <p className="text-lg font-bold font-poppins my-2">“ {eachTestimonial.comment} ”</p>

                                <div className="w-1/6 mx-auto">
                                    <img className="mx-auto rounded-full" src={eachTestimonial.image} alt="" />
                                </div>
                                <h1 className="text-xl font-poppins">{eachTestimonial.name}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    );
};

export default OurTestimonial;
