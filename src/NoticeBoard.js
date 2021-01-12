import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { db } from './firebaseConfig';
import './NoticeBoard.css';
import { Button } from '@material-ui/core';

const NoticeBoard = () => {

    const [notices, setNotices] = useState([])
    useEffect(() => {
        db.collection('notices').orderBy('timestamp', 'desc').onSnapshot(snapshot => setNotices(snapshot.docs.map(doc => doc.data())))

    }, [])

    return (
        <div>
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
            <div class="content">

                {
                    notices.map((notice, index) => <Link to={`/notice/${index}`}><p>{notice.timestamp?.toDate().toUTCString()}</p><h1>{notice.title}</h1></Link>)
                }
            </div>
        </div>
    );
};

export default NoticeBoard;