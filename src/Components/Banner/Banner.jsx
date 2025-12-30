import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Banner.css';
const Banner = () => {
    return (
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            // modules={[Autoplay, Pagination, Navigation]}
            // modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide><img src="https://i.ibb.co/BLq2xjj/vnwayne-fan-lz-HYLf-NI89-A-unsplash.jpg" alt="" />            
            
              <div className='w-full absolute bg-opacity-75 bg-black py-8'>
                <h1 className='text-2xl md:text-6xl font-bold text-white mb-8'>Welcome to BookShelf</h1>
                <p className='text-2xl font-bold text-white'>Where every page holds a new adventure </p>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide><img src="https://i.ibb.co/vPhzW3T/jessica-ruscello-OQSCtab-Gk-SY-unsplash.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://i.ibb.co/BLq2xjj/vnwayne-fan-lz-HYLf-NI89-A-unsplash.jpg" alt="" /></SwiperSlide> */}
          </Swiper>
        </>
      );
};

export default Banner;