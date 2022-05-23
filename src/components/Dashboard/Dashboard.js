import React from 'react';
import { Outlet } from 'react-router-dom';

import DashboardSideber from '../DashboardSideber/DashboardSideber';
import RequarAuth from '../RequarAuth/RequarAuth';




const Dashboard = () => {
    return (
        <RequarAuth>
            <DashboardSideber>
                <Outlet></Outlet>
            </DashboardSideber>
        </RequarAuth>
    );
};

export default Dashboard;