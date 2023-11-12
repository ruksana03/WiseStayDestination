import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import TestimonialCard from "./TestimonialCard";
import { useEffect, useState } from "react";

import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Testimonial = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://localhost:5000/reviews')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Kjn1bDP/hot-air-balloon-1756150-1280.jpg)' }}>
      <div className="hero-overlay  bg-opacity-50 bg-[#273026]"></div>
      <div>
        <Carousel showArrows={true} autoPlay={true} interval={5000}>
          {data.length > 0 &&
            data.map((testimonial) => (
              <TestimonialCard key={testimonial._id} testimonial={testimonial} />
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
