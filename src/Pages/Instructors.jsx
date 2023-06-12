import React, { useEffect, useState } from 'react';
import Headings from '../components/Headings';
import useAxiosSecure from '../components/hooks/useAxiosSecure';

const Instructors = () => {
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

    return (
        <div className='min-h-screen pb-10 bg-base-100'>
            <Headings title={'All Instructors'} sub={'See all of our heros'}></Headings>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-2 lg:gap-4 mx-auto">

                {instructors.map((item) => (
                    <div key={item._id} className="card card-side flex-col lg:flex-row bg-base-100 shadow-xl">
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
                ))}
            </div>

        </div>
    );
};

export default Instructors;