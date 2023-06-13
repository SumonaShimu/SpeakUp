import React from 'react';
import Why from './Why';
import { FaUserGraduate } from 'react-icons/fa';
import { BsCupHot, BsEnvelopePlus, BsHandThumbsUp, BsRocket, BsTrophy } from "react-icons/bs";
import Headings from '../Headings';
const Whyus = () => {
    return (
        <div className='min-h-screen maxw py-10'>
            <Headings title={'Why Choose Us'} sub={'Some simple reasons'}></Headings>
            <div className='grid grid-cols-1 md:grid-cols-3 my-10'>
            <div className=''>
                <Why title={'Over 20 Years of Experience'} desc={'In 2000 our centre became an academic department within the school of languages.'} icon={BsEnvelopePlus}></Why>
                <Why title={'Exclusive Learning Materials'} desc={'Our learning materials include text with multimedia on all areas of the curriculum.'} icon={BsRocket}></Why>
                <Why title={'Career Upgrade'} desc={'Learning a new language is a fascinating thing that can lead to great opportunities.'} icon={BsTrophy}></Why>
            </div>
            <div className='hidden md:flex items-center'>
                <img src="https://i.ibb.co/dWZwYQB/images-removebg-preview.png" className="mx-auto" />
            </div>
            <div className='text-right'>
                <Why title={'Over 20 Years of Experience'} desc={'In 2000 our centre became an academic department within the school of languages.'} icon={FaUserGraduate} right={true}></Why>
                <Why title={'Exclusive Learning Materials'} desc={'Our learning materials include text with multimedia on all areas of the curriculum.'} icon={BsCupHot} right={true}></Why>
                <Why title={'Career Upgrade'} desc={'Learning a new language is a fascinating thing that can lead to great opportunities.'} icon={BsHandThumbsUp} right={true}></Why>
            </div>
        </div>
        </div>
    );
};

export default Whyus;