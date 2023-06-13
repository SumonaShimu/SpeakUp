import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const usePayments = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: payments = [] } = useQuery({
        queryKey: [user],
        queryFn: async () => {
            const res = await axiosSecure(`/payments/${user?.email}`)
            return res.data;
        },
    })

    return [payments, refetch]
};

export default usePayments;