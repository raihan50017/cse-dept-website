import React from 'react';
import AddNotice from './AddNotice';
import './AdminDashboard.css';

const AdminDashboard = () => {
    return (
        <div style={{marginTop:'180px'}}>
            <AddNotice></AddNotice>
        </div>
    );
};

export default AdminDashboard;