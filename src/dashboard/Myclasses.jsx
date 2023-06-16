import React, { useContext } from 'react';
import { AuthContext } from '../components/providers/AuthProvider';
import useInstructorsClass from '../components/hooks/useInstructorsClass';
import Headings from '../components/Headings';
import { FaPen } from "react-icons/fa";
import { RiDeleteBin5Line } from 'react-icons/ri';
const Myclasses = () => {
    const { user } = useContext(AuthContext)
    const [classes] = useInstructorsClass();
    return (
        <div>
            <Headings title={` My classes here`} sub={`Total : ${classes.length}`}></Headings>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Course</th>
                            <th>Students</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Feedback</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes?.map((item, i) =>
                            <tr key={item._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.img} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.students}</td>
                                <td>{item.availableSeats}</td>
                                <td>{item.price}</td>
                                <td>{item.status}</td>
                                <td>{item.feedback}</td>
                                <th>
                                    <button className="btn btn-success btn-xs"><FaPen></FaPen></button>
                                </th>
                                <th>
                                    <button className="btn btn-circle bg-red-300"><RiDeleteBin5Line className='text-lg'></RiDeleteBin5Line></button>
                                </th>
                            </tr>
                        )}
                        {/* row 1 */}



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Myclasses;