


const AvailableRoomStatus = ({ isRoomAvailable, setIsRoomAvailable, isreservedDates, setIsReservedDates }) => {
    
    const handleRadioChange = (event) => {
        setIsRoomAvailable(event.target.value === 'true');
    };
    const handleRadioChangeReserve = (event) => {
        setIsReservedDates(event.target.value === 'true');
    };
    return (
        <div className="flex flex-col">
                    <p className="text-base">Is Room Available?</p>
                    <label>
                        <input
                            type="radio"
                            name="roomAvailability"
                            value="true"
                            checked={isRoomAvailable}
                            onChange={handleRadioChange}
                        /> Room is available
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="roomAvailability"
                            value="false"
                            checked={!isRoomAvailable}
                            onChange={handleRadioChange}
                        /> Room is not available
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="roomAvailability"
                            value="false"
                            checked={!isreservedDates}
                            onChange={handleRadioChangeReserve}
                        /> Room is reserved
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="roomAvailability"
                            value="false"
                            checked={!isreservedDates}
                            onChange={handleRadioChangeReserve}
                        /> Room is not reserved
                    </label>
                    
                </div>

    );
};

export default AvailableRoomStatus;