import React from 'react';

const Headings = ({title,sub}) => {
    return (
        <div className='py-10 text-center'>
            <hr/>
            <h1 className='text-4xl font-bold mt-5'>{title}</h1>
            <p className='text-sm text-[#AAAAAA] mb-5'>{sub}</p>
            <hr/>
        </div>
    );
};

export default Headings;