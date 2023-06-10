import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Background, Parallax } from 'react-parallax';
const LoginPage = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Perform login logic here
    };

    return (

        <Parallax bgImage={'https://raw.githubusercontent.com/SumonaShimu/Language-images/main/cloud.jpg'} strength={500}>
            <div style={{ height: 500 }}>
                <form onSubmit={handleSubmit(onSubmit)} className='ps-2 md:ps-10 text-primary'>
                    <h1 className='text-5xl pb-10'>Please Login</h1>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            {...register('username', { required: 'Username is required' })}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            {...register('password', { required: 'Password is required' })}
                        />
                    </div>
                    <p className='text-white'>Don`t Have an account? please <Link to="/registration" className='text-primary'>Register now!</Link></p>
                    <button type="submit" className='btn btn-primary block my-5'>Login</button>
                </form>
            </div>
        </Parallax>



    );
};

export default LoginPage;
