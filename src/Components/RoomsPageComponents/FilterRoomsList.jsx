

const FilterRoomsList = ({ rooms, sortOrder }) => {
    const sortedRooms = sortOrder === 'asc' ? rooms : [...rooms].reverse();

    return (
      <div>
        {sortedRooms.map((room) => (
          <div key={room._id}>
            <p>{room.roomCategory}</p>
            <p>{room.price}</p>
            {/* Add more room details */}
          </div>
        ))}
      </div>
    );
};

export default FilterRoomsList;