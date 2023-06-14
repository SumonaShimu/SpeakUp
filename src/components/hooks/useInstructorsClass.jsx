import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useInstructorsClass = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: classes = [] } = useQuery({
        queryKey: [user],
        queryFn: async () => {
            const res = await axiosSecure(`/classes/${user?.email}`)
            return res.data;
        },
    })

    return [classes, refetch]
};

export default useInstructorsClass;