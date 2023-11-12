import { useState } from "react";

const ExtraRoomServices = ({ selectedOptions, setSelectedOptions }) => {
    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        setSelectedOptions((prevSelected) => {
            if (prevSelected.includes(value)) {
                return prevSelected.filter((item) => item !== value);
            } else {
                return [...prevSelected, value];
            }
        });
    };

    return (
        <div>
            <p className="block text-sm font-poppins text-gray-600 mb-1">Select Your Room Services:</p>
            <div className="flex flex-wrap gap-2 font-poppins text-sm">
                <label>
                    <input
                        type="checkbox"
                        value="service" 
                        checked={selectedOptions.includes("service")}
                        onChange={handleCheckboxChange}
                        className="mx-1"
                    /> Room Service
                </label>

                <label>
                    <input
                        type="checkbox"
                        value="pool" 
                        checked={selectedOptions.includes("pool")}
                        onChange={handleCheckboxChange}
                        className="mx-1"
                    /> Kids Swimming Pool
                </label>

                <label>
                    <input
                        type="checkbox"
                        value="parking" 
                        checked={selectedOptions.includes("parking")}
                        onChange={handleCheckboxChange}
                        className="mx-1"
                    /> Parking
                </label>

                <label>
                    <input
                        type="checkbox"
                        value="extraBeds" 
                        checked={selectedOptions.includes("extraBeds")}
                        onChange={handleCheckboxChange}
                        className="mx-1"
                    /> Extra Beds/Baby Crib
                </label>

                <label>
                    <input
                        type="checkbox"
                        value="machine" 
                        checked={selectedOptions.includes("machine")}
                        onChange={handleCheckboxChange}
                        className="mx-1"
                    /> Washing Machine
                </label>
            </div>
        </div>
    );
};

export default ExtraRoomServices;
