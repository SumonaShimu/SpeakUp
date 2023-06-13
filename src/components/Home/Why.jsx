import React from 'react';

const Why = ({title,desc, icon:Icon, right} ) => {
    return (
        <div className={`flex flex-wrap md:flex-nowrap gap-x-4 my-8 ${right && 'flex-row-reverse rowDefault'}`}>
            <div className='bg-[#f2f2f2] text-[#AAAAAA] h-24 w-24 p-5 flex items-center justify-center hover:bg-primary hover:text-[#fff] rounded-full'>
            <Icon size={40} />
            </div>
            <div>
                <h1 className='text-xl hover:text-primary font-semibold'>{title}</h1>
                <p className='text-[#AAAAAA] text-sm'>{desc}</p>
            </div>
        </div>
    );
};

export default Why;