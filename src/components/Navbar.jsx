import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsClockHistory, BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FcBusinessman } from "react-icons/fc";
import { AuthContext } from './providers/AuthProvider';
const Navbar = () => {
    const {user,logOut} =useContext(AuthContext);
    const navitems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Instructors</Link></li>
        <li><Link to='/'>Classes</Link></li>
        {user ? <>
        <li><FcBusinessman className='text-4xl p-0 mx-auto'></FcBusinessman></li>
        <li><button onClick={logOut} className='btn btn-xs btn-primary m-0 ms-5'>LogOut</button> </li>
        </> : <li><Link to='/login'>Login</Link></li>}
    </>
    return (

        <div className='w-full bg-base-100 px-5'>
            {/* navbar */}
            <div className="navbar mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10">
                            {navitems}
                        </ul>
                    </div>
                    <img src="logo.png" className="w-14" />
                    <a className="btn btn-ghost normal-case text-3xl text-primary">SpeakUp</a>

                </div>
                <div className="navbar-end hidden md:flex px-5">
                    <div className='flex text-left items-center gap-2'>
                        <BsClockHistory className='text-primary text-4xl'></BsClockHistory>
                        <h3 className='text-xs'>
                            <span className='text-primary font-semibold'>HOURS</span><br />
                            Mon - Fri 8 AM - 5 PM
                        </h3>
                    </div>
                    <div className='flex text-left items-center gap-2'>
                        <BsTelephone className='text-primary text-4xl'></BsTelephone>
                        <h3 className='text-xs'>
                            <span className='text-primary font-semibold'>CALL</span><br />
                            +1234 5678 89
                        </h3>
                    </div>
                    <div className='flex text-left items-center gap-2'>
                        <IoLocationOutline className='text-primary text-4xl'></IoLocationOutline>
                        <h3 className='text-xs'>
                            <span className='text-primary font-semibold'>ADDRESS</span><br />
                            Dhaka,Bangladesh
                        </h3>

                    </div>
                </div>
            </div>
            <div className="divider my-0"></div>
            <div className='hidden lg:block'>
                <ul className="menu menu-horizontal px-1 flex justify-center">
                    {navitems}
                </ul>
            </div>

        </div>

    );
};

export default Navbar;