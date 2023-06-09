import React from 'react';
import Banner from './Banner';
import PopuClass from './PopuClass';
import PopuInstructor from './PopuInstructor';
import Whyus from './Whyus';

const Home = () => {
    return (
        <div className='px-5 bg-base-100'>
            <Banner></Banner>
            <PopuClass></PopuClass>
            <PopuInstructor></PopuInstructor>
            <Whyus></Whyus>
        </div>
    );
};

export default Home;