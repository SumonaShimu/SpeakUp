import React, { useState, useEffect } from 'react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Banner = () => {
    const [currentText, setCurrentText] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentText((prevText) => (prevText + 1) % 3);
        }, 4000);

        return () => clearTimeout(timer);
    }, [currentText]);

    const bannerTexts = [
        {
            heading: "Language Courses For You",
            content: "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
        },
        {
            heading: "Learn German in 60 days",
            content: "Twee echo park celiac YOLO dreamcatcher bushwick. Pitchfork fam tousled sustainable. Twee echo park celiac YOLO dreamcatcher bushwick. Pitchfork fam tousled sustainable."
        },
        {
            heading: "Become fluent in English",
            content: "Tote bag trust fund tacos organic four dollar toast kickstarter pork belly meggings fingerstache. Tote bag trust fund tacos fund tacos organic four dollar toast kickstarter pork belly meggings fingerstache."
        }
    ];

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://raw.githubusercontent.com/SumonaShimu/Language-images/main/banner.jpg)' }}>
            <div className="hero-overlay bg-black bg-opacity-50"></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-md banner-text">
                    <h1 className="mb-5 text-5xl font-bold">{bannerTexts[currentText].heading}</h1>
                    <p className="mb-5">{bannerTexts[currentText].content}</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
