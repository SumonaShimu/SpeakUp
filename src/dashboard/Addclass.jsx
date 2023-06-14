import React, { useContext, useState } from 'react';
import { AuthContext } from '../components/providers/AuthProvider';
import Headings from '../components/Headings';
import useAxiosSecure from '../components/hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Addclass = () => {
    const img_token = import.meta.env.VITE_image_token
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    console.log(img_token)
    let userName = '', userEmail = ''
    if (user) {
        userName = user.displayName;
        userEmail = user.email;
    }

    const addItem = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;//class
        const instructor = form.instructor.value;

        const newItem = {
            name, instructor
        }
        const itemjson = JSON.stringify(newItem);

        axiosSecure.post('https://speakup-server.vercel.app/classes', itemjson, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                const data = response.data;
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class added!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.error('Error posting class to cart:', error);
            });
    }
    return (
        <div>
            <div className="text-center maxw">
                <Headings title="Add a class" sub='Fill up the form with the required information'></Headings>
            </div>
            <form onSubmit={addItem} className=" rounded-xl grid md:grid-cols-2 grid-cols-1 gap-3">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Instructor Name</span>
                    </label>
                    <input type="text" defaultValue={user?.displayName} className="input input-bordered w-full max-w-xs" readOnly />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Instructor Email</span>
                    </label>
                    <input type="email" name='instructor' defaultValue={user?.email} className="input input-bordered w-full max-w-xs" readOnly />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Course Name</span>
                    </label>
                    <input type="text" name='name' placeholder='English' className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Course Price</span>
                    </label>
                    <input type="number" name='price' placeholder='$20' className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Available Seats</span>
                    </label>
                    <input type="number" name='availableSeats' placeholder='20' className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Students</span>
                    </label>
                    <input type="float" name='price' defaultValue={0} className="input input-bordered w-full max-w-xs" readOnly />
                </div>
                <div className="form-control w-full max-w-xs">
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <input type="submit" value="Add" className='btn btn-primary' />
                </div>
            </form>
        </div>
    );
};

export default Addclass;