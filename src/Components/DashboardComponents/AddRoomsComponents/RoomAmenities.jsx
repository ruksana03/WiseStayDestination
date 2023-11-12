

const RoomAmenities = ({ amenities, selectedAmenities, onChange }) => {

   
    return (
        <div>
        <p className="block text-sm font-poppins text-gray-600 mb-1">Select Your Room Services:</p>
        <div className="flex flex-wrap gap-2 font-poppins text-sm">
          {amenities.map((amenity) => (
            <label key={amenity}>
              <input
                type="checkbox"
                value={amenity}
                checked={selectedAmenities.includes(amenity)}
                onChange={onChange}
                className="mx-1"
              /> {amenity.charAt(0).toUpperCase() + amenity.slice(1)}
            </label>
          ))}
        </div>
      </div>
    );
};

export default RoomAmenities;