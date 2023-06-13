import React from 'react';
import usePayments from '../components/hooks/usePayments';
import Headings from '../components/Headings';

const EnrolledClasses = () => {
    const [payments,refetch]=usePayments()
    return (
        <div>
            <div className="overflow-x-auto maxw">
                <Headings title={`Enrolled classes: ${payments.length}`} sub='Here are all the classes whose payments are successfully completed.'></Headings>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Course</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Transaction Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {payments.map((item,i) =>
                            <tr key={item._id}>
                                <td>
                                    {i+1}
                                </td>
                                <td>{item.class}</td>
                                <td>
                                    ${item.price}
                                </td>
                                <td>
                                    ${item.date}
                                </td>
                                <td>
                                    ${item.transactionId}
                                </td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledClasses;