import Map from "../Shared/Map";
import Newxletter from "./Newxletter";


const NewsletterMap = () => {
    return (
        <div
            className="flex flex-col w-10/12 mx-auto my-8 lg:flex-row gap-4 lg:mx-auto lg:my-12">
            <div
                className="w-full lg:w-1/2">
                <h1
                    className="text-xl font-poppins my-4">
                    Location
                </h1>
                <Map></Map>
            </div>

            <div
                className="w-full lg:w-1/2">
                <h1
                    className="text-xl font-poppins my-4">
                    Newsletter
                </h1>
                <Newxletter></Newxletter>
            </div>
        </div>
    );
};

export default NewsletterMap;