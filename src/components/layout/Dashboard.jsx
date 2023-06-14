import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useRole from '../hooks/useRole';
import Headings from '../Headings';
import { AuthContext } from '../providers/AuthProvider';
import { VscThreeBars } from "react-icons/vsc";
const Dashboard = () => {
    const { role } = useRole();
    const { user, logOut } = useContext(AuthContext)
    return (
        <div className="drawer lg:drawer-open min-h-screen">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    <VscThreeBars></VscThreeBars>
                </label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay m-0"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {user?.photoURL && <li className='flex items-center'><img src={user.photoURL} className="w-16 m-0 p-0 rounded-full" /> </li>}
                    <Headings title={`${role}`} sub={'Dashboard'}></Headings>
                    {/* Sidebar content here */}
                    {
                        (role === 'user') && <>
                            <li><NavLink to='/dashboard/selected'>My selected classes</NavLink></li>
                            <li><NavLink to='/dashboard/enrolled'>Enrolled classes</NavLink></li>
                            <li><NavLink to='/dashboard/payment-history'>Payment history</NavLink></li>
                        </>
                    }
                    {
                        (role === 'instructor') && <>
                            <li><NavLink to='/dashboard/addclass'>Add a class</NavLink></li>
                            <li><NavLink to='/dashboard/myclasses'>My classes</NavLink></li>
                        </>
                    }
                    {
                        (role === 'admin') && <>
                            <li><NavLink to='/dashboard/manage-class'>Manage classes</NavLink></li>
                            <li><NavLink to='/dashboard/manage-users'>Manage users</NavLink></li>

                        </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to='/' className='my-auto'>Home</NavLink></li>
                    <li><NavLink to='/ins' className='my-auto'>Instructors</NavLink></li>
                    <li><NavLink to='/classes' className='my-auto'>Classes</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;