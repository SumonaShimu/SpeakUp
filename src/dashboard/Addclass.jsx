import React, { useContext, useState } from 'react';
import { AuthContext } from '../components/providers/AuthProvider';
import Headings from '../components/Headings';
import useAxiosSecure from '../components/hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

const Addclass = () => {
    const img_token = import.meta.env.VITE_image_token;
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_token}`
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    console.log(img_token)
    const onSubmit = (data) => {

        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(imgResponse => {
                if(imgResponse.success){
                    console.log('imgResponse of imgbb :',imgResponse)
                    const imgURL = imgResponse.data.display_url;
                    const {name, price, instructor, availableSeats, students} = data;
                    const newItem = {name, price: parseFloat(price), image:imgURL, instructor, availableSeats, students,status:'pending'}
                    console.log(newItem)
                    axiosSecure.post('/classes', newItem)
                    .then(data => {
                        console.log('after posting new Class', data.data)
                        if(data.data.insertedId){
                            reset();
                            Swal.fire({
                                position: 'top',
                                icon: 'success',
                                title: 'Class added successfully',
                                showConfirmButton: false,
                                timer: 1500
                              })
                        }
                    })
                }
            })
    }
    return (
        <div>
            <div className="text-center maxw">
                <Headings title="Add a class" sub='Fill up the form with the required information'></Headings>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='my-5 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6'>
                {/* instructor name */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Name</span>
                    </label>
                    <input type="text" defaultValue={user?.displayName}
                        {...register("instructorName", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " readOnly />
                </div>
                {/* instructor email */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Email</span>
                    </label>
                    <input type="email" defaultValue={user?.email}
                        {...register("instructor", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " readOnly />
                </div>
                {/* Course Name */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Course Name*</span>
                    </label>
                    <input type="text" placeholder="Course Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                {/* Course price */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Price*</span>
                    </label>
                    <input type="number" {...register("price", { required: true })} placeholder="$50" className="input input-bordered w-full " />
                </div>
                {/* available seats */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available seats</span>
                    </label>
                    <input type="number" {...register("availableSeats", { required: true })} placeholder="20" className="input input-bordered w-full " />
                </div>
                {/* Students */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Enrolled Students</span>
                    </label>
                    <input type="number" {...register("students", { required: true })} defaultValue={0} className="input input-bordered w-full " readOnly />
                </div>
                {/* image */}
                <div className="form-control w-full col-span-2">
                    <label className="label">
                        <span className="label-text">Class Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default Addclass;