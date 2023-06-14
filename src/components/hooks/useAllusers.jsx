import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useAllusers = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: users = [] } = useQuery({
        queryKey: [user],
        queryFn: async () => {
            const res = await axiosSecure(`/users`)
            return res.data;
        },
    })

    return [users, refetch]
   
};

export default useAllusers;