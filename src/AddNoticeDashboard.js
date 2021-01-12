import { Link } from 'react-router-dom';
import React from 'react';
import AddNotice from './AddNotice';
import './AddNoticeDashboard.css';

const AddNoticeDashboard = () => {
    return (
        <div className="admin__dashboard">
            <div className="admin__left">
                <ul>
                    <li><Link to="/admin">Dashboard</Link></li>
                    <li><Link to="/add-notice-dashboard">Add Notice</Link></li>
                    <li><Link>All Notice</Link></li>
                </ul>
            </div>
            <div style={{ marginTop: '180px' }} className="admin__right">
                <AddNotice></AddNotice>
            </div>
        </div>
    );
};

export default AddNoticeDashboard;