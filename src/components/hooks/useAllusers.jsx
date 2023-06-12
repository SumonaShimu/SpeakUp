import React, { useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';

const useAllusers = () => {
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
    console.log(users)
    return {users};
};

export default useAllusers;