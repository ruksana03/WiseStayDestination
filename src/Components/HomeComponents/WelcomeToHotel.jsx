import { Link } from "react-router-dom";


const WelcomeToHotel = () => {
    return (
        <div className="">
            {/* For lg device  */}
            <div className="hidden lg:flex flex-row justify-center mx-auto w-10/12">
                <img className="w-1/3 " src="https://i.ibb.co/LPr1bcj/img-65.jpg" alt="" />

                <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/CnQqpP8/img-66.jpg)' }}>
                    <div className="hero-overlay  bg-opacity-75 bg-[#273026]"></div>
                    <div className="text-center text-white border border-[#B99D75] py-24  m-2">
                        <div className="max-w-md max-h-full ">

                            <p className="mb-5">WELCOME TO WISH STAY DESTINATION</p>

                            <h1 className="mb-5 text-5xl font-bold">In the Heart of Banff Park, Outstanding Views</h1>


                            <Link to='/aboutTheHotel'>  <button className="relative transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300">
                                Explore the hotel
                                <span className="absolute left-0 w-full h-0.5 bg-[#B99D75] bottom-0"></span>
                            </button></Link>

                        </div>
                    </div>

                </div>




                <img className="w-1/3" src="https://i.ibb.co/Nnvj1Lr/img-67.jpg" alt="" />
            </div>

            {/* for md device  */}
            <div className="hidden md:flex md:flex-col md:w-10/12 md:h-96 md:mx-auto md:my-0 lg:hidden">
                <div className="hero md:h-1/2  " style={{ backgroundImage: 'url(https://i.ibb.co/rpd3TBr/hotel3.jpg)' }}>
                    <div className="hero-overlay  bg-opacity-75 bg-[#273026]"></div>
                    <div className="text-center text-white border border-[#B99D75] py-6 px-8">
                        <div className="max-w-full ">

                            <p className="mb-5">WELCOME TO WISH STAY DESTINATION</p>

                            <h1 className="mb-5 text-2xl font-bold">In the Heart of Banff Park, Outstanding Views</h1>


                            <Link to='/aboutTheHotel'>  <button className="relative transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300">
                                Explore the hotel
                                <span className="absolute left-0 w-full h-0.5 bg-[#B99D75] bottom-0"></span>
                            </button></Link>

                        </div>
                    </div>

                </div>

                <div className="md:flex md:h-1/2 md:w-full">
                    <img className="md:w-1/2" src="https://i.ibb.co/2YqLRcd/hotel4.jpg" alt="" />
                    <img className="md:w-1/2" src="https://i.ibb.co/vYz5z3K/hotel5.jpg" alt="" />
                </div>
            </div>

            {/* for sm device  */}
            <div>
                <div className="flex  w-10/12  mx-auto  md:hidden  lg:hidden">
                    <img className="w-1/3  " src="https://i.ibb.co/rpd3TBr/hotel3.jpg" alt="" />
                    <div className="hero md:h-1/2  " style={{ backgroundImage: 'url(https://i.ibb.co/2YqLRcd/hotel4.jpg)' }}>
                        <div className="hero-overlay  bg-opacity-75 bg-[#273026]">

                        </div>
                        <div className="text-white">
                            <Link to='/aboutTheHotel'>  <button className="relative transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:duration-300">
                                Explore the hotel
                                <span className="absolute left-0 w-full h-0.5 bg-[#B99D75] bottom-0"></span>
                            </button></Link>
                        </div>
                    </div>

                    <img className="w-1/3  " src="https://i.ibb.co/vYz5z3K/hotel5.jpg" alt="" />


                </div>
            </div>
        </div>



    );
};

export default WelcomeToHotel;