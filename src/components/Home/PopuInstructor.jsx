import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import Headings from '../Headings';
import { Slide } from 'react-awesome-reveal';

const PopuInstructor = () => {
    const [axiosSecure] = useAxiosSecure();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosSecure.get('/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchData();
    }, [axiosSecure]);

    const instructors = users.filter(user => user.role === 'instructor')
    const popularInstructors = instructors.slice(0, 6);
    console.log(popularInstructors);
    return (

        <div className='min-h-screen maxw my-10'>
            <Headings title={'Popular Instructors'} sub={'Our heros'}></Headings>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-2 lg:gap-4 mx-auto">

                {popularInstructors.map((item) => (
                    <Slide key={item._id}  direction='up' duration={2000} triggerOnce>
                    <div className="card card-side flex-col lg:flex-row shadow-xl">
                
                            <img src={item.photo} className="block w-40 h-40 rounded-xl m-5" />
                    
                        <div className="card-body w-1/2 flex">

                            <div>
                                <h2 className="text-xl">{item.name}</h2>
                                <h5 className='text-primary text-sm'>Instructor</h5>
                                <p>{item.email}</p>
                                <div className="card-actions lg:justify-end">
                                    <button className="btn btn-primary">View classes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Slide>
                ))}
            </div>
        </div>
    );
};

export default PopuInstructor;