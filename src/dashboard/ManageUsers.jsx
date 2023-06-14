import React from 'react';
import useAxiosSecure from '../components/hooks/useAxiosSecure';
import useAllusers from '../components/hooks/useAllusers';
import Headings from '../components/Headings';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const [users, refetch] = useAllusers();
    const changeStatus = (newstatus, id) => {
        const url = `https://speakup-server.vercel.app/users/update/${id}`
        //console.log(url)
        const feedback = {
            role: newstatus
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
                    refetch()
                    Swal.fire(
                        'Done!',
                        'Role Updated successfully!',
                        'success'
                    )
                    refetch()
                }

            })
    }
    return (
        <div>
            <Headings title={`Manage Users: ${users.length}`}></Headings>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                    
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Grnder</th>
        
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {users.map((item) =>
                        <tr key={item._id}>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={item.photo} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            
                            <td>{item.gender}</td>
                            <td>{item.role}</td>
                            <th className='flex flex-col'>
                                <button onClick={() => changeStatus('admin', item._id)} className="btn btn-success btn-sm" disabled={item.role === 'admin'}>Make Admin</button>
                                <button onClick={() => changeStatus('instructor', item._id)} className="btn bg-red-400 btn-sm" disabled={item.role === 'instructor'}>Make instructor</button>
                            </th>
                        </tr>
                    )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;