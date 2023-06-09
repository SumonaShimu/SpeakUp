import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

const Subbanner = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-2/3 md:w-2/5 bg-sky-950 mt-[-50px] p-5 rounded-xl">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={5} 
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://raw.githubusercontent.com/SumonaShimu/Language-images/main/flags/ch.jpg" className="w-40" />
            <h5 className='text-xs font-semibold text-center text-white'>Chinese</h5>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://raw.githubusercontent.com/SumonaShimu/Language-images/main/flags/che.jpg" className="w-40" />
            <h5 className='text-xs font-semibold text-center text-white'>Chech</h5>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://raw.githubusercontent.com/SumonaShimu/Language-images/main/flags/de.jpg" className="w-40" />
            <h5 className='text-xs font-semibold text-center text-white'>German</h5>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://raw.githubusercontent.com/SumonaShimu/Language-images/main/flags/eng.jpg" className="w-40" />
            <h5 className='text-xs font-semibold text-center text-white'>English</h5>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://raw.githubusercontent.com/SumonaShimu/Language-images/main/flags/fr.jpg" className="w-40" />
            <h5 className='text-xs font-semibold text-center text-white'>French</h5>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://raw.githubusercontent.com/SumonaShimu/Language-images/main/flags/it.jpg" className="w-40" />
            <h5 className='text-xs font-semibold text-center text-white'>Italian</h5>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://raw.githubusercontent.com/SumonaShimu/Language-images/main/flags/ja.jpg" className="w-40" />
            <h5 className='text-xs font-semibold text-center text-white'>Japanese</h5>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://raw.githubusercontent.com/SumonaShimu/Language-images/main/flags/por.jpg" className="w-40" />
            <h5 className='text-xs font-semibold text-center text-white'>Portugese</h5>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://raw.githubusercontent.com/SumonaShimu/Language-images/main/flags/sp.jpg" className="w-40" />
            <h5 className='text-xs font-semibold text-center text-white'>Spanish</h5>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};

export default Subbanner;
