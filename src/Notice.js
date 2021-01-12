import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from './firebaseConfig';
import './Notice.css';
const Notice = () => {
    const { notice_id } = useParams();
    const [notices, setNotices] = useState([])
    useEffect(() => {
        db.collection('notices').orderBy('timestamp', 'desc').onSnapshot(snapshot => setNotices(snapshot.docs.map(doc => doc.data())))

    }, [])

    return (
        <div className="notice__container">
            {
                notices.map((notice, id) => id == notice_id && <div style={{textAlign:'center',paddingLeft:'80px',paddingRight:'80px'}}>
                    <h4 style={{marginBottom:'18px'}}>{notice.title}</h4>
                    <p style={{textAlign:'justify'}}>{notice.description}</p>
                </div>)
            }
        </div>
    );
};

export default Notice;