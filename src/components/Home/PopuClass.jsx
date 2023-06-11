import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import Headings from '../Headings';

const PopuClass = () => {
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
    classes.sort((a, b) => b.students - a.students);

    const popularClasses = classes.slice(0, 6);

    console.log(popularClasses);
    return (
        <div className='min-h-screen my-10'>
            <Headings title={'Popular Classes'} sub={'Highest number of students enrolled'}></Headings>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 lg:gap-4 ">
                {popularClasses.map((classItem) => (
                    <div key={classItem._id} className="card md:w-96 bg-base-100 shadow-xl text-center">
                        <div className="card-body">
                            <h2 className="card-title text-primary text-2xl mx-auto">{classItem.name}</h2><hr/>
                            <p>Price: ${classItem.students}</p>
                            <p>Total Students:{classItem.price}</p>
                            <p>Available seats:{classItem.availableSeats}</p>
                            <button className={`btn btn-primary`}>Select</button>
                        </div>
                        <figure>
                            <img src={classItem.img} alt="Shoes" />
                        </figure>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default PopuClass;