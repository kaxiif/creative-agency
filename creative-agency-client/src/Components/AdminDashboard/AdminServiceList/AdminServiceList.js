import React from 'react';
import { Table } from 'react-bootstrap';
import DashboardHeader from '../../Shared/DashboardHeader/DashboardHeader';

const AdminServiceList = () => {
    return (
        <div>
            <DashboardHeader displayOption="Service List"></DashboardHeader>
            <Table className="text-center rounded m-2 bg-white p-3" striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Service Name</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </Table>
        </div>
    );
};

export default AdminServiceList;