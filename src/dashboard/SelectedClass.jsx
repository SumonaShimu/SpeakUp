import React from 'react';
import useCart from '../components/hooks/useCart';
import Headings from '../components/Headings';
import { RiDeleteBin2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
const SelectedClass = () => {
    const [cart, refetch] = useCart();
    console.log(cart)
    return (
        <div>
            <div className="overflow-x-auto">
                <Headings title={`Selected classes: ${cart.length}`} sub='Confirm payment to proceed the courses'></Headings>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Image</th>
                            <th>Coursees</th>
                            <th>Price</th>
                            <th>Buy</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {cart.map((item,i) =>
                            <tr key={item._id}>
                                <td>
                                    {i+1}
                                </td>
                                <td>

                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>


                                </td>
                                <td>{item.name}</td>
                                <td>
                                    ${item.price}
                                </td>
                                <th>
                                    <Link to='/dashboard/payment' state={{item}} className="btn btn-success btn-sm">Pay</Link>
                                </th>
                                <th>
                                    <button className="btn btn-primary btn-sm"><RiDeleteBin2Fill className='text-lg'></RiDeleteBin2Fill></button>
                                </th>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClass;