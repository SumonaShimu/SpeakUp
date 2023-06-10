import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import { AuthContext } from './providers/AuthProvider';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const RegistrationPage = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

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
            console.log('registered user : ',loggedUser);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Registration Successful!',
                showConfirmButton: false,
                timer: 1500
              })
            updateUserProfile(data.username, data.photoUrl='https://img.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg')
                .then(() => {
                    const saveUser = { name: data.username, email: data.email, photo: data.photoUrl }
                    fetch('https://bistro-boss-server-fawn.vercel.app/users', {
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
                .catch(error => console.log(error))
        })
    };

    return (
        <Parallax bgImage={'https://raw.githubusercontent.com/SumonaShimu/Language-images/main/cloud.jpg'} strength={500}>
            <div className="bg-transparent text-primary w-full py-5 min-h-screen">
                <form onSubmit={handleSubmit(onSubmit)} className="ps-2 md:ps-10">
                    <h1 className="text-5xl pb-10">Registration</h1>
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
                        {errors.password && <span>{errors.password.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            {...register('password', { required: 'Password is required' })}
                        />
                        {errors.password && <span>{errors.password.message}</span>}
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
                    <p className="text-white">
                        Already have an account? Please{' '}
                        <Link to="/login" className="text-primary">
                            Login Here
                        </Link> 
                    </p>
                    <button type="submit" className="btn btn-primary block my-5">
                        Register
                    </button>
                </form>
            </div>
        </Parallax>
    );
};

export default RegistrationPage;
