import React from 'react';

const Why = ({title,desc, icon:Icon, right} ) => {
    return (
        <div className={`flex flex-wrap md:flex-nowrap gap-2 ${right && 'flex-row-reverse'}`}>
            <div className='bg-[#f2f2f2] text-[#AAAAAA] h-24 w-24 p-5 flex items-center justify-center hover:bg-primary hover:text-[#fff] rounded-full'>
            <Icon size={40} />
            </div>
            <div>
                <h1 className='text-3xl hover:text-primary font-semibold'>{title}</h1>
                <p className='text-[#AAAAAA]'>{desc}</p>
            </div>
        </div>
    );
};

export default Why;