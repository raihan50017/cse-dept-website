import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './AddNotice.css';
import { db } from './firebaseConfig';
import firebase from 'firebase';

const AddNotice = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const submitNotice = (e) => {
        e.preventDefault();
        if (title != "" && description != "") {
            db.collection('notices').add({
                title: title,
                description: description,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
            alert('New notice added successfully');
        }
        setTitle("");
        setDescription("");
        e.target.reset();
    }

    return (
        <div className="addNotice__container">
            <h1>Add Notice</h1><br></br>
            <form onSubmit={submitNotice}>
                <h4>Notice Title:</h4>
                <input onChange={e => setTitle(e.target.value)} style={{ width: '100%', marginBottom: '10px' }} type="text" name="title" required></input>
                <h4>Notice description:</h4>
                <textarea onChange={e => setDescription(e.target.value)} style={{ width: '100%', height: '200px' }} type="text" name="description" required></textarea>
                <Button variant="contained" color="primary" type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default AddNotice;