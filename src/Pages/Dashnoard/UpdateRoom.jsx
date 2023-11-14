import axios from "axios";
import { useRef, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UpdatedExtraRoomServices from "../../Components/DashboardComponents/UpdatedRoomInfoComp/UpdatedExtraRoomServices";
import UpdatedRoomAmenities from "../../Components/DashboardComponents/UpdatedRoomInfoComp/UpdatedRoomAmenities";
// import UpdatedImageUrlsInput from "../../Components/DashboardComponents/UpdatedRoomInfoComp/UpdatedImageUrlsInput";

const UpdateRoom = () => {
    const [updatedSelectedOptions, setUpdatedSelectedOptions] = useState([]);
    const [selectedUpdatedAmenities, setSelectedUpdatedAmenities] = useState([]);
    // const [UpdatedImageUrls, setUpdatedImageUrls] = useState(['']);

    const updatedRoom = useLoaderData();
    console.log(updatedRoom);

    const goto = useNavigate();

    // const { _id, roomCategory, roomNo, discount, bathroom, roomBed, roomView, price, area, guestNumber, description, selectedOptions, selectedAmenities, imageUrls } = updatedRoom || {};
    const { _id, roomCategory, roomNo, discount, bathroom, roomBed, roomView, price, area, guestNumber, description, selectedOptions, selectedAmenities} = updatedRoom || {};


    const formRef = useRef();

    const handleUpdatedAmenitiesChange = (event) => {
        const value = event.target.value;
        setSelectedUpdatedAmenities((prevSelectedAmenities) => {
            if (prevSelectedAmenities.includes(value)) {
                return prevSelectedAmenities.filter((item) => item !== value);
            } else {
                return [...prevSelectedAmenities, value];
            }
        });
    };


    const amenities = ['breakfast', 'wifi', 'parking', 'pool', 'gym'];

    // const handleUpdatedImageUrlsChange = (newImageUrls) => {
    //     setUpdatedImageUrls(newImageUrls);
    // };

    const handleUpdateRoomInfo = (e) => {
        e.preventDefault();
        const form = e.target;

        const discountInput = form.discount?.value || "not-Given";
        const discountValue = parseFloat(discountInput.replace('%', ''));

        const updatedRoom = {
            roomCategory: form.roomCategory?.value || "not-Given",
            roomNo: form.roomNo?.value || "not-Given",
            discount: isNaN(discountValue) ? "not-Given" : discountValue,
            bathroom: form.bathroom?.value || "not-Given",
            roomBed: form.roomBed?.value || "not-Given",
            roomView: form.roomView?.value || "not-Given",
            price: form.price?.value || "not-Given",
            area: form.area?.value || "not-Given",
            guestNumber: form.guestNumber?.value || "not-Given",
            description: form.description?.value || "not-Given",
            updatedSelectedOptions: updatedSelectedOptions,
            selectedUpdatedAmenities: selectedUpdatedAmenities,
            // UpdatedImageUrls: UpdatedImageUrls,
        };

        console.log(updatedRoom);

        axios
            .put(`https://wise-stay-destination-server.vercel.app/rooms/${_id}`, updatedRoom)

            .then((res) => {
                console.log(res);
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Data  updated successfully.',
                }).then(() => {
                    form.reset();
                    setUpdatedSelectedOptions([]);
                    setSelectedUpdatedAmenities([]);
                    // setUpdatedImageUrls(['']);
                });
            })

            .catch((error) => {
                console.error(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'An error occurred while posting data.',
                });
            });
        goto("/dashboard/manageRooms");
    }


    return (
        <div className="border-2 border-[#B99D75] p-2 m-2">
            <p className="text-xl font-poppins font-semibold text-center my-4">Updated {updatedRoom.roomCategory}</p>

            <form ref={formRef} onSubmit={handleUpdateRoomInfo}
                className="mt-6">
                <div className="flex flex-col gap-4 justify-between w-full">

                    <div className="flex flex-col lg:flex-row gap-4 justify-between w-full">
                        <div className="w-full lg:w-1/2">
                            <select
                                name="roomCategory"
                                defaultValue={roomCategory}
                                className="border-b py-2 bg-[#E0E1DF] focus:outline-none transition-colors peer w-full pl-3 font-poppins text-sm"
                            >
                                <option value="" disabled selected>
                                    Select a Room Category
                                </option>
                                <option value="Single Room">Single Room</option>
                                <option value="Double Room">Double Room</option>
                                <option value="Family Room">Family Room</option>
                                <option value="Deluxe Room">Deluxe Room</option>
                                <option value="Accessible Room">Accessible Room</option>
                            </select>
                            <hr className="border-t border-[#53624E]" />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <input
                                type="number"
                                name="roomNo"
                                defaultValue={roomNo}
                                id=""
                                placeholder="Room Number"
                                className="border-b py-2 bg-[#E0E1DF] focus:outline-none transition-colors peer w-full pl-3 font-poppins text-sm"
                            />
                            <hr className="border-t border-[#53624E]" />
                        </div>
                    </div>


                    <div className="flex flex-col lg:flex-row gap-4 justify-between w-full">
                        <div className="w-full lg:w-1/2">
                            <div className="flex">
                                <input
                                    type="text"
                                    name="discount"
                                    defaultValue={discount}
                                    id=""
                                    placeholder="Enter Discount Percentage"
                                    className="border-b py-2 bg-[#E0E1DF] focus:outline-none transition-colors peer w-full pl-3 font-poppins text-sm"
                                />
                                <hr className="border-t border-[#53624E]" />
                                <input
                                    type="number"
                                    name="bathroom"
                                    defaultValue={bathroom}
                                    id=""
                                    placeholder="Enter The number of bathrooms"
                                    className="border-b py-2 bg-[#E0E1DF] focus:outline-none transition-colors peer w-full pl-3 font-poppins text-sm ml-4"
                                />
                                <hr className="border-t border-[#53624E]" />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <select
                                name="roomBed"
                                defaultValue={roomBed}
                                className="border-b py-2 bg-[#E0E1DF] focus:outline-none transition-colors peer w-full pl-3 font-poppins text-sm"
                            >
                                <option
                                    value=""
                                    disabled selected>
                                    Select a Room Bed
                                </option>
                                <option value="A single bed (Single Room)">A single bed (Single Room)</option>
                                <option value="Two twin beds (Double Room)">Two twin beds (Double Room)</option>
                                <option value="One double bed (Double Room)">One double bed (Double Room)</option>
                                <option value="One king-size bed (Suite)">One king-size bed (Suite)</option>

                                <option value="One king-size bed and one twin beds(Family Room)">One king-size bed and one twin beds(Family Room)</option>
                                <option value="One king-size bed and two twin beds(Family Room)">One king-size bed and two twin beds(Family Room)</option>
                                <option value="king-size bed(Deluxe Room)">king-size bed(Deluxe Room)</option>
                                <option value="One king-size bed(Accessible Room)">One king-size bed(Accessible Room)</option>
                                <option value="needs of guests(Accessible Suite)">needs of guests(Accessible Suite)</option>
                            </select>
                            <hr className="border-t border-[#53624E]" />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 justify-between w-full">
                        <div className="w-full lg:w-1/2">
                            <select
                                name="roomView"
                                defaultValue={roomView}
                                className="border-b py-2 bg-[#E0E1DF] focus:outline-none transition-colors peer w-full pl-3 font-poppins text-sm"
                            >
                                <option value="" disabled selected>
                                    Select Your Room View
                                </option>
                                <option value="Great Mountain View">Great Mountain View</option>
                                <option value="Great Lake View">Great Lake View</option>
                                <option value="Ocean View">Ocean View</option>
                            </select>
                            <hr className="border-t border-[#53624E]" />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <input
                                type="number"
                                name="price"
                                defaultValue={price}
                                id=""
                                placeholder="Room price per day "
                                className="border-b py-2 bg-[#E0E1DF] focus:outline-none transition-colors peer w-full pl-3 font-poppins text-sm"
                            />
                            <hr className="border-t border-[#53624E]" />
                        </div>
                    </div>

                    <div className="w-full">
                        <UpdatedExtraRoomServices
                            updatedSelectedOptions={updatedSelectedOptions}
                            setUpdatedSelectedOptions={setUpdatedSelectedOptions}
                            selectedOptions={selectedOptions}
                        ></UpdatedExtraRoomServices>
                        <hr className="border-t border-[#53624E]" />
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 justify-between w-full">
                        <div className="w-full lg:w-1/2">
                            <select
                                name="area"
                                defaultValue={area}
                                className="border-b py-2 bg-[#E0E1DF] focus:outline-none transition-colors peer w-full pl-3 font-poppins text-sm"
                            >
                                <option value="" disabled selected>
                                    Select a Room area in m<sup>2</sup>
                                </option>
                                <option value="40">40 </option>
                                <option value="25">25</option>
                                <option value="33">33</option>
                                <option value="23">23</option>
                                <option value="46">46</option>
                                <option value="37">37</option>
                            </select>
                            <hr className="border-t border-[#53624E]" />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <input
                                type="number"
                                name="guestNumber"
                                defaultValue={guestNumber}
                                id=""
                                placeholder="Guest Number"
                                className="border-b py-2 bg-[#E0E1DF] focus:outline-none transition-colors peer w-full pl-3 font-poppins text-sm"
                            />
                            <hr className="border-t border-[#53624E]" />
                        </div>
                    </div>

                    <div className="w-full">
                        <textarea
                            name="description"
                            defaultValue={description}
                            id=""
                            placeholder="Describe The Room"
                            className="border-b py-2 bg-[#E0E1DF] focus:outline-none transition-colors peer w-full pl-3 font-poppins text-sm"
                            rows="1"
                        ></textarea>
                        <hr className="border-t border-[#53624E]" />
                    </div>

                    <div className="w-full">
                        <UpdatedRoomAmenities
                            selectedUpdatedAmenities={selectedUpdatedAmenities}
                            amenities={amenities}
                            onChange={handleUpdatedAmenitiesChange}
                            selectedAmenities={selectedAmenities}
                        ></UpdatedRoomAmenities>
                        <hr className="border-t border-[#53624E]" />
                    </div>
                    {/* <div className="w-full mb-6">
                        <UpdatedImageUrlsInput 
                        onUpdatedUrlChange={handleUpdatedImageUrlsChange}
                        imageUrls={imageUrls}
                        setUpdatedImageUrls={setUpdatedImageUrls}/>  
                    </div> */}

                </div>

                <hr className="border-2 border-[#53624E]" />
                <button
                    type="submit"
                    className="w-full bg-[#53624E] text-xl font-poppins font-semibold mt-6 py-2 rounded-t-md text-white hover:bg-[#B99D75] hover:text-2xl hover:text-black"> SUBMIT </button>
            </form>
        </div>
    );
};

export default UpdateRoom;


