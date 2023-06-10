import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const PopuInstructor = () => {
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

    const instructorStudentCounts = {};

    // Iterate over the classes array
    classes.forEach((classObj) => {
        const instructorId = classObj.instructor;

        // If the instructor is already present in the count object, increment the student count
        if (instructorStudentCounts[instructorId]) {
            instructorStudentCounts[instructorId] += classObj.students;
        }
        //else just initialize
        else {
            instructorStudentCounts[instructorId] = classObj.students;
        }
    });


    const popularInstructors = Object.entries(instructorStudentCounts).sort((a, b) => b[1] - a[1]).slice(0, 6);


    console.log(popularInstructors);
    return (
        <div className='min-h-screen my-10'>
            <h1 className='text-4xl my-10 text-center'> Popular Instructors</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 lg:gap-4 ">

                {popularInstructors.map((item) => (
                    <div key={item._id} className="card w-96 bg-base-100 shadow-xl text-center">
                        <div className="card-body">
                            <h2 className="card-title text-primary text-2xl mx-auto">instructor id: {item[0]}</h2>
                        
                        </div>
                        <figure>
                           
                        </figure>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default PopuInstructor;