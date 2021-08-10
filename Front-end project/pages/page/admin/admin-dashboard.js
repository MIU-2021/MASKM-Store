import React from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import Dashboard from './common/dashboard';

const VendorDashboard = () => {
    return (
        <CommonLayout parent="home" title="Admin dashboard">
            <Dashboard />
        </CommonLayout>
    )
}

export default VendorDashboard;