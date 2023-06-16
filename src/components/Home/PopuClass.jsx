import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import Headings from '../Headings';
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';

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
  
            <div className='min-h-screen my-10 maxw'>
                <Headings title={'Popular Classes'} sub={'Highest number of students enrolled'}></Headings>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-8 gap-y-4">
                    {popularClasses.map((classItem) => (
                        <Slide direction='right' duration={2000} key={classItem._id} triggerOnce>
                        <div className="card shadow-xl text-center">
                            <div className="card-body">
                                <h2 className="card-title text-primary text-2xl mx-auto">{classItem.name}</h2><hr />
                                <p>Price: ${classItem.students}</p>
                                <p>Total Students:{classItem.price}</p>
                                <p>Available seats:{classItem.availableSeats}</p>
                            </div>
                            <figure className='h-60'>
                                <img src={classItem.img} alt="image" className='object-cover' />
                            </figure>
                        </div>
                        </Slide>
                    ))}
                </div>
                <div className='w-full text-center my-10'>
                    <Link to='classes' className='btn btn-primary'>Show all classes</Link>
                </div>

            </div>
        
    );
};

export default PopuClass;