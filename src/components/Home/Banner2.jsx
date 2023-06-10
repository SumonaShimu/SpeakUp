import React, { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper';

const Banner = () => {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentText((prevText) => (prevText + 1) % 3);
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentText]);

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          'url(https://raw.githubusercontent.com/SumonaShimu/Language-images/main/banner.jpg)',
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-50"></div>
      <div className="hero-content text-center text-white">
        <Swiper
          spaceBetween={10}
          effect={'fade'}
          navigation={true}
          modules={[EffectFade, Navigation]}
          className="mySwiper"
          onSlideChange={(swiper) => {
            setCurrentText(swiper.activeIndex);
          }}
        >
          <SwiperSlide>
            <div
              className={`w-full mx-auto max-w-md banner-text ${
                currentText !== 0 ? 'hidden' : ''
              }`}
            >
              <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                Learn Languages and Make Lifelong Friends
              </h1>
              <p className="mb-5">
                Immerse yourself in a vibrant and diverse learning environment.
                Discover new cultures, improve your language skills, and create
                unforgettable memories with fellow language enthusiasts from
                around the world.
              </p>
              <button className="btn btn-primary">Join Now</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`w-full mx-auto  max-w-md banner-text ${
                currentText !== 1 ? 'hidden' : ''
              }`}
            >
              <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                Unlock Your Language Potential
              </h1>
              <p className="mb-5">
                Our experienced instructors will guide you through an immersive
                language learning journey. From beginner to advanced levels,
                you'll gain confidence and fluency in the language of your
                choice, be it English, Spanish, French, German, or Chinese.
              </p>
              <button className="btn btn-primary">Explore Courses</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`w-full mx-auto max-w-md banner-text ${
                currentText !== 2 ? 'hidden' : ''
              }`}
            >
              <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                Experience an Unforgettable Summer
              </h1>
              <p className="mb-5">
                Join our language learning summer camp and enjoy a fun-filled
                adventure. Engage in exciting activities, cultural
                celebrations, and language exchange events. Create memories,
                forge friendships, and broaden your horizons this summer.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
