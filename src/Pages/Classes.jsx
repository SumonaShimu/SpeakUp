import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../components/hooks/useAxiosSecure';
import Headings from '../components/Headings';

const Classes = () => {
    const [axiosSecure] = useAxiosSecure();

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosSecure.get('/classes');
                setClasses(response.data);
            } catch (error) {
                console.error('Error fetching classes data:', error);
            }
        };
        fetchData();
    }, [axiosSecure]);

    const approvedClasses = classes.filter(item=>item.status==='approved')
    console.log(approvedClasses)
    return (
        <div className='bg-base-100'> 
            <Headings title={'All Classes'} sub={'You can see all running courses here'}></Headings>
            
            <div className="grid md:grid-cols-2 grid-cols-1 gap-2 lg:gap-4 mx-auto">

                {approvedClasses.map((item) => (
                    <div key={item._id} className="card card-side flex-col lg:flex-row bg-base-100 shadow-xl">
                        <img src={item.img} className="block w-40 h-40 rounded-xl m-5 object-cover" />
                        <div className="card-body w-1/2 flex">

                            <div>
                                <h2 className="text-xl font-semibold">Language: {item.name}</h2>
                                <h2 className="text-lg">Available seats: {item.availableSeats}</h2>
                                <h2 className="text-lg">Students: {item.students}</h2>
                                <h2 className="text-lg">Price: ${item.price}</h2>
                                
                                <div className="card-actions lg:justify-end">
                                    <button className={`btn btn-primary`}>Select</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Classes;