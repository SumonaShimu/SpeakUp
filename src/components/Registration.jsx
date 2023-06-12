import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import { AuthContext } from './providers/AuthProvider';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import SocialLogin from './Home/SocialLogin';
import { RxDividerHorizontal, RxDividerVertical, RxEyeClosed, RxEyeOpen } from "react-icons/rx";

const RegistrationPage = () => {
    var i=13;
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    // password toggler
    const [passwordVisible, setPasswordVisible] = useState(false);
    const handleTogglePassword = () => {
        setPasswordVisible(!passwordVisible);
    };
    // Registration form handle
    const onSubmit = (data) => {
        const { password, confirmPassword } = data;

        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        if (password.length < 6) {
            toast.error('Password should be at least 6 characters long');
            return;
        }

        if (!/[A-Z]/.test(password)) {
            toast.error('Password should contain at least one uppercase letter');
            return;
        }

        if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
            toast.error('Password should contain at least one special character');
            return;
        }

        console.log('OK');
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log('registered user : ', loggedUser);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Registration Successful!',
                    showConfirmButton: false,
                    timer: 1500
                })
                updateUserProfile(data.username, data.photoUrl)
                    .then(() => {
                        const saveUser = { id:++i, name: data.username, email: data.email, photo: data.photoUrl, gender:data.gender , role:'user'}
                        console.log(saveUser)
                        fetch('https://speakup-server.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })

                    })
                    .catch(error => toast.error('Update user error: ',error))
            })
            .catch((error) => { 
                toast.error(`create user error : ${error.message}`)
              });
    };

    return (
        <Parallax bgImage={'https://raw.githubusercontent.com/SumonaShimu/Language-images/main/cloud.jpg'} strength={500}>
            <div className="bg-transparent text-primary w-full py-5 min-h-screen">
                <form onSubmit={handleSubmit(onSubmit)} className="ps-2 md:ps-10 mb-0">
                    <h1 className="text-5xl pb-5">Registration</h1>
                    <p className="text-white text-xs mb-10">
                        Already have an account? Please <Link to="/login" className="text-primary font-semibold">
                            Login Here
                        </Link>
                    </p>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" {...register('username', { required: 'Username is required' })} />
                        {errors.username && <span>{errors.username.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            {...register('email', { required: 'Email is required' })}
                        />
                        {errors.email && <span>{errors.email.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            id="password"
                            name="password"
                            className='inline-block'
                            {...register('password', { required: 'Password is required' })}
                        />
                        <button onClick={handleTogglePassword} className='btn btn-sm btn-circle btn-outline p-0 inline ms-[-8%] hover:bg-transparent hover:text-primary shadow-transparent'>
                            {passwordVisible ? <RxEyeOpen className='h-6 w-6 mx-auto'></RxEyeOpen > : <RxEyeClosed className='h-6 w-6 mx-auto'></RxEyeClosed>}
                        </button>
                        {errors.password && <span className='block'>{errors.password.message}</span>}
                        
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            {...register('confirmPassword', { required: 'Confirm Password is required' })}
                        />
                        {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="photoUrl">Photo URL:</label>
                        <input type="text" id="photoUrl" name="photoUrl" {...register('photoUrl')} />
                    </div>
                    <div>
                        <label htmlFor="gender">Gender:</label>
                        <select id="gender" name="gender" {...register('gender')}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="preferNotToSay">Prefer Not to Say</option>
                        </select>
                    </div>

                    <div className="flex flex-col w-full lg:flex-row my-5">
                        <button type="submit" className="btn btn-primary">
                            Register
                        </button>
                        <RxDividerVertical className='hidden md:inline text-2xl my-auto mx-2 text-white'></RxDividerVertical>
                        <RxDividerHorizontal className='md:hidden text-4xl mx-auto text-white'></RxDividerHorizontal>
                        <SocialLogin />
                    </div>

                </form>

            </div>
        </Parallax>
    );
};

export default RegistrationPage;
