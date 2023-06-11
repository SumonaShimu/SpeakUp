import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner2 = () => {
  return (
    <Carousel autoPlay={true} interval={2000} infiniteLoop={true}>
      {/* slide 1 */}
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://raw.githubusercontent.com/SumonaShimu/Language-images/main/4.jpg)' }}>
        <div className="hero-overlay bg-black bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      {/* slide 2 */}
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://raw.githubusercontent.com/SumonaShimu/Language-images/main/banner3.png)' }}>
        <div className="hero-overlay bg-black bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      {/* slide 3 */}
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://raw.githubusercontent.com/SumonaShimu/Language-images/main/banner.jpg)' }}>
        <div className="hero-overlay bg-black bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner2;