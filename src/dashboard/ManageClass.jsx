import React, { useContext } from 'react';
import { AuthContext } from '../components/providers/AuthProvider';
import useAxiosSecure from '../components/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Classes from '../Pages/Classes';
import Headings from '../components/Headings';
import { RiDeleteBin2Fill, RiDeleteBin5Line } from 'react-icons/ri';
import Swal from 'sweetalert2';

const ManageClass = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: classes = [] } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await axiosSecure(`/classes`)
            return res.data;
        },
    })
    //handle update
    const changeStatus = (newstatus, id) => {
        const url = `https://speakup-server.vercel.app/classes/update/${id}`
        //console.log(url)
        const feedback = {
            status: newstatus
        }
        fetch(url, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(feedback)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Done!',
                        'Class Updated successfully!',
                        'success'
                    )
                    refetch()
                }

            })
    }
    return (
        <div>
            <Headings title={`Manage Classes: ${classes.length}`}></Headings>
            <table className="table">
                {/* head */}
                <thead className='text-lg'>
                    <tr>
                        <th>Course Name & Instructor</th>
                        <th>Available Seats</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Change Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {classes.map((item) =>
                        <tr key={item._id}>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{item.name}</div>
                                        <div className="text-sm opacity-50">{item.instructor}</div>
                                    </div>
                                </div>
                            </td>
                            <td>{item.availableSeats}</td>
                            <td>${item.price}</td>
                            <td>{item.status}</td>
                            <th className='flex flex-col'>
                                <button onClick={() => changeStatus('approved', item._id)} className="btn btn-success btn-sm" disabled={item.status === 'approved'}>Approve</button>
                                <button onClick={() => changeStatus('denied', item._id)} className="btn bg-red-400 btn-sm" disabled={item.status === 'approved'}>Deny</button>
                            </th>
                            <th>
                                <button className="btn btn-circle bg-red-300"><RiDeleteBin5Line className='text-lg'></RiDeleteBin5Line></button>
                            </th>
                        </tr>
                    )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageClass;