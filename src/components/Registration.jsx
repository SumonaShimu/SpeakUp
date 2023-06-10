import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';

const RegistrationPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { password, confirmPassword } = data;

        if (password !== confirmPassword) {
            console.log('Passwords do not match');
            return;
        }

        if (password.length < 6) {
            console.log('Password should be at least 6 characters long');
            return;
        }

        if (!/[A-Z]/.test(password)) {
            console.log('Password should contain at least one uppercase letter');
            return;
        }

        if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
            console.log('Password should contain at least one special character');
            return;
        }

        console.log('OK');
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
