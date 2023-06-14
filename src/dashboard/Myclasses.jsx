import React, { useContext } from 'react';
import { AuthContext } from '../components/providers/AuthProvider';
import useInstructorsClass from '../components/hooks/useInstructorsClass';
import Headings from '../components/Headings';

const Myclasses = () => {
    const {user}=useContext(AuthContext)
    const [classes]=useInstructorsClass();
    return (
        <div>
            <Headings title={` My classes here`} sub={`Total : ${classes.length}`}></Headings>
        </div>
    );
};

export default Myclasses;