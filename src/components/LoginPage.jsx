import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import { AuthContext } from './providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from './Home/SocialLogin';
import { RxDividerHorizontal, RxDividerVertical, RxEyeClosed, RxEyeOpen } from 'react-icons/rx';

const LoginPage = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { register, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext)
    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    console.log('login page: ',from)
    
    const handleTogglePassword = () => {
        setPasswordVisible(!passwordVisible);
    };

    const onSubmit = (data) => {
        console.log(data);
        // Perform login logic here
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful!',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
            })
    };

    return (
        <Parallax bgImage={'https://raw.githubusercontent.com/SumonaShimu/Language-images/main/cloud.jpg'} strength={500}>
            <div style={{ height: 500 }}>
                <form onSubmit={handleSubmit(onSubmit)} className='ps-2 md:ps-10 text-white'>
                    <h1 className='text-5xl pb-5'>Please Login</h1>
                    <p className='text-white text-xs mb-10'>Don`t Have an account? Please <Link to="/registration" className='text-white font-semibold underline'>Register now!</Link></p>
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
                            type={passwordVisible ? 'text' : 'password'}
                            id="password"
                            name="password"
                            className='inline'
                            {...register('password', { required: 'Password is required' })}
                        />
                        <button onClick={handleTogglePassword} className='btn btn-sm btn-circle btn-outline p-0 inline ms-[-8%] hover:bg-transparent hover:text-primary shadow-transparent'>
                            {passwordVisible ? <RxEyeOpen className='h-6 w-6 mx-auto'></RxEyeOpen > : <RxEyeClosed className='h-6 w-6 mx-auto'></RxEyeClosed>}
                        </button>
                    </div>

                    <div className="flex flex-col w-full lg:flex-row my-5">
                        <button type="submit" className="btn btn-primary">
                            Login
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

export default LoginPage;
