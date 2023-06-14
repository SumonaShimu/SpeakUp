import React from 'react';
import useCart from '../components/hooks/useCart';
import Headings from '../components/Headings';
import { RiDeleteBin2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../components/hooks/useAxiosSecure';
const SelectedClass = () => {
    const [cart, refetch] = useCart();
    const [axiosSecure] = useAxiosSecure();
    //console.log(cart)
    const handleDelete=(id)=> {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to remove this from cart?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        console.log('deleted res', res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'The course has been removed.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
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
                                    <button onClick={()=>handleDelete(item._id)} className="btn btn-primary btn-sm"><RiDeleteBin2Fill className='text-lg'></RiDeleteBin2Fill></button>
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