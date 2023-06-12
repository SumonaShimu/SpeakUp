import React from 'react';
import { Outlet } from 'react-router-dom';
import useRole from '../components/hooks/useRole';
import Headings from '../components/Headings';

const Dashboard = () => {
    const { role } = useRole();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    <Headings title={`${role}`} sub={'Dashboard'}></Headings>
                    {/* Sidebar content here */}
                    {
                        (role === 'user') && <>
                        <li><a>My selected classes</a></li>
                        <li><a>Enrolled classes</a></li>
                        <li><a>Payment history</a></li>
                        </>
                    }
                    {
                        (role === 'instructor') && <>
                        <li><a>Add a class</a></li>
                        <li><a>My classes</a></li>
                        </>
                    }
                    {
                        (role === 'admin') && <>
                        <li><a>Manage classes</a></li>
                        <li><a>Manage users</a></li>
                        
                        </>
                    }
                    
                    
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;