import { Helmet } from "react-helmet";


const DisplayAvailableRoom = ({availableRooms}) => {
    console.log(availableRooms)
    return (
        <div>
             <Helmet>
                <title>Available Rooms</title>
                <meta name="description" content="Description for the home page" />
            </Helmet>
               no data found
           
        </div>
    );
};

export default DisplayAvailableRoom;