import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, EffectFade } from "swiper";

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://raw.githubusercontent.com/SumonaShimu/Language-images/main/banner.jpg)' }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    effect="fade" // Set the effect to "fade"
                    fadeEffect={{ crossFade: true }} // Enable the fade effect options
                    pagination={{
                        clickable: true,
                        renderBullet: function (index, className) {
                            return `<span class="${className}" style="background-color: #ff1f1f;"></span>`;
                        },
                    }}
                    modules={[Autoplay, Pagination, EffectFade]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="max-w-md ms-auto">
                            <h1 className="mb-5 text-5xl font-bold">Language Cources For You</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="max-w-md ms-auto">
                            <h1 className="mb-5 text-5xl font-bold">Learn German in 60 days</h1>
                            <p className="mb-5">Twee echo park celiac YOLO dreamcatcher bushwick. Pitchfork fam tousled sustainable. Twee echo park celiac YOLO dreamcatcher bushwick. Pitchfork fam tousled sustainable.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="max-w-md ms-auto">
                            <h1 className="mb-5 text-5xl font-bold">Become fluent in English</h1>
                            <p className="mb-5">Tote bag trust fund tacos organic four dollar toast kickstarter pork belly meggings fingerstache. Tote bag trust fund tacos fund tacos organic four dollar toast kickstarter pork belly meggings fingerstache.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;
