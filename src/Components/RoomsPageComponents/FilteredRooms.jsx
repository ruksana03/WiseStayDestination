import { useState } from "react";
import AllRoom from "./AllRoom";
import HighToLowPriceRooms from "./HighToLowPriceRooms";
import LowToHighPriceRooms from "./LowToHighPriceRooms";

const FilteredRooms = ({ data }) => {
  const [selectedOption, setSelectedOption] = useState("all");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // Function to sort data by price
  const sortByPrice = (order) => {
    const sortedData = [...data].sort((a, b) => {
      if (order === "lowToHigh") {
        return a.price - b.price;
      } else if (order === "highToLow") {
        return b.price - a.price;
      } else {
        return 0; // No sorting
      }
    });

    return sortedData;
  };

  // Get the sorted data based on the selected option
  const sortedData = selectedOption !== "all" ? sortByPrice(selectedOption) : data;

  return (
    <div className="w-10/12 mx-auto">
      <label htmlFor="priceFilter">Price Range:</label>
      <select id="priceFilter" onChange={handleChange} value={selectedOption}>
        <option value="all">All</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </select>

      {selectedOption === "all" && <AllRoom />}
      {selectedOption === "lowToHigh" && <LowToHighPriceRooms data={sortedData} />}
      {selectedOption === "highToLow" && <HighToLowPriceRooms data={sortedData} />}
    </div>
  );
};

export default FilteredRooms;
