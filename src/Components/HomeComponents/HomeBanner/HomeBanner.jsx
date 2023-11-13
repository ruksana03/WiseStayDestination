import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';  // Remove Navigation import
import BannerSwiper from './BannerSwiper';
import Availability from './Availability';


const HomeBanner = () => {
    const images = [
        { url: 'https://i.ibb.co/bP3Ddfm/bannerhome2.jpg' },
        { url: 'https://i.ibb.co/kHsQbvk/bannerhome3.jpg' },
        { url: 'https://i.ibb.co/NY19Lfr/bannerhome4.jpg' },
        { url: 'https://i.ibb.co/d2xmrdv/bannerhome5.jpg' }
    ];

    return (
        <div className='w-full'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <BannerSwiper image={image}></BannerSwiper>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div>
          <Availability />
        </div>
            
        </div>
    );
};

export default HomeBanner;
