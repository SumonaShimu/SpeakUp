import React from 'react';
import Headings from '../components/Headings';

const DashboardHome = () => {
    return (
        <div className='min-h-screen bg-base-100'>
            <Headings title='Welcome Back' sub='To the Dashboard'></Headings>
            <div className='flex justify-center '>
            <img src="https://i.ibb.co/xHjc2tk/1499926132-totoro-greeting.gif" className='max-w-sm' />
            </div>
        </div>
    );
};

export default DashboardHome;