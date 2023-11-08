import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banner = () => {
    return (
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide><img src="https://i.ibb.co/YbTg5Rs/devon-divine-Hzp-1ua8-DVE-unsplash.jpg" alt="" /></SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
          </Swiper>
        </>
      );
};

export default Banner;