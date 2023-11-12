import ReactDatePicker from "react-datepicker";

const AvailableRoomDate = ({
 startDate, setStartDate, endDate, setEndDate, isRoomUnavailable, setIsRoomUnavailable }) => {
  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <div className="flex flex-col">
      <p className="text-base">Room Availability</p>

      <p className="text-base">Start Date</p>
      <ReactDatePicker
        selected={startDate}
        onChange={handleStartDateChange}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        disabled={isRoomAvailable}
        // Add the next line to disable reserved dates
        filterDate={(date) => !reservedDates.some((rd) => rd.toDateString() === date.toDateString())}
      />

      <p className="text-base">End Date</p>
      <ReactDatePicker
        selected={endDate}
        onChange={handleEndDateChange}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        disabled={isRoomAvailable}
        // Add the next line to disable reserved dates
        filterDate={(date) => !reservedDates.some((rd) => rd.toDateString() === date.toDateString())}
      />
    </div>
  );
};

export default AvailableRoomDate;
