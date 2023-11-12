import { Link } from "react-router-dom";
import Lottie from 'lottie-react';
// import animationData from '../../public/Animation - 1695569741195.json';
import animationData from '../../public/Animation - 1699746119925.json'

const ErrorPage = () => {
    return (
        <div className="w-8/12 mx-auto">
           
            <Lottie
            className="w-4/12 mx-auto"
                animationData={animationData}
                loop
                autoplay
            />
             <Link to='/'>
                <button className="bg-black w-full mx-auto font-poppins text-white text-xl font-bold py-2">Click to Go Back Home</button></Link>
        </div>
    );
};

export default ErrorPage;
