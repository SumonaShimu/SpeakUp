import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import { AuthContext } from './providers/AuthProvider';
import Swal from 'sweetalert2';

const LoginPage = () => {
    const { register, handleSubmit } = useForm();
    const {signIn}=useContext(AuthContext)
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const onSubmit = (data) => {
        console.log(data);
        // Perform login logic here
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    icon: 'success',
                    title: 'Registration Successful!',
                    showConfirmButton: false,
                    timer: 1500
                  })
                navigate(from, { replace: true });
            })
    };

    return (

        <Parallax bgImage={'https://raw.githubusercontent.com/SumonaShimu/Language-images/main/cloud.jpg'} strength={500}>
            <div style={{ height: 500 }}>
                <form onSubmit={handleSubmit(onSubmit)} className='ps-2 md:ps-10 text-primary'>
                    <h1 className='text-5xl pb-10'>Please Login</h1>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            {...register('email', { required: 'email is required' })}
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
