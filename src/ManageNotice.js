import React, { useEffect, useState } from 'react';
import { db } from './firebaseConfig';
import './ManageNotice.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const ManageNotice = () => {

    const handleDelete = (noticeId) => {

        db.collection("notices").doc(noticeId).delete().then(function () {
            alert('1 item deleted');
        }).catch(function (error) {
            alert(error);
        });
    }

    const [notices, setNotices] = useState([])
    useEffect(() => {
        db.collection('notices').orderBy('timestamp', 'desc').onSnapshot(snapshot => setNotices(snapshot.docs.map(doc => doc)))

    }, [])

    console.log('fff', notices)

    return (
        <div className="manage__notice">
            <h1 style={{ textAlign: 'center' }}>All notices</h1>
            {
                notices.map(notice => <div className="single__notice"><h4 style={{ flex: '1' }}>{notice?.data().title}</h4><DeleteForeverIcon onClick={() => handleDelete(notice.id)}></DeleteForeverIcon></div>)
            }
        </div>
    );
};

export default ManageNotice;