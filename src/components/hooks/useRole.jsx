import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useRole = () => {
    const { user, loading } = useContext(AuthContext);
    // const token = localStorage.getItem('access-token');
    const [role,setRole]=useState('')
    const [axiosSecure] = useAxiosSecure();
    useEffect(() => {
        const getUserRole = async () => {
            try {
                const response = await axiosSecure.get(`/users/${user?.email}`);
                const role = response.data;
                console.log(role)
                setRole(role)

            } catch (error) {
                console.error('Error fetching user role:', error);
            }
        };
        getUserRole();
    }, [axiosSecure, user]);

    return {role};

}
export default useRole;