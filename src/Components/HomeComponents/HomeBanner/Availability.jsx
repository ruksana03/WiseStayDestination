

const Availability = () => {
    return (

        <div>
            {/* For lg */}
            <div className="hidden  lg:flex  relative z-10 -top-28 bg-white w-10/12 mx-auto  justify-between px-8 py-10">

                <div>
                    <h1 className="text-xl">Check In</h1>
                    <input type="date" name="" id="" />
                </div>
                <div>
                    <h1>|</h1>
                </div>
                <div>
                    <h1 className="text-xl">Check In</h1>
                    <input type="date" name="" id="" />
                </div>
                <div>
                    <h1>|</h1>
                </div>
                <div>
                    <h1 className="text-xl">Check In</h1>
                    <input type="date" name="" id="" />
                </div>
                <div>
                    <h1>|</h1>
                </div>
                <div>
                    <button className="px-6 py-3  text-center font-bold bg-[#53624E] hover:bg-[#AB916C]">Check Availability</button>
                </div>

            </div>


            {/* for md and sm  */}
            <div className="bg-transparent w-8/12 mx-auto flex flex-col justify-center items-center text-center relative z-10 -top-96 -left-0 text-white lg:hidden">
                <div>
                    <h1 className="text-xl">Check In</h1>
                    <input type="date" name="" id="" />
                </div>
                <div>
                    <h1>|</h1>
                </div>
                <div>
                    <h1 className="text-xl">Check In</h1>
                    <input type="date" name="" id="" />
                </div>
                <div>
                    <h1>|</h1>
                </div>
                <div>
                    <h1 className="text-xl">Check In</h1>
                    <input type="date" name="" id="" />
                </div>
                <div>
                    <h1>|</h1>
                </div>
                <div>
                    <button className="px-6 py-3 text-center font-bold bg-[#53624E] hover:bg-[#AB916C]">Check Availability</button>
                </div>
            </div>
        </div>
    );
};

export default Availability;