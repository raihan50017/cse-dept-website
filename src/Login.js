import { useHistory, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './Login.css';
import { auth } from './firebaseConfig';

const Login = () => {
    
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((user) => {
                history.push('/');
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    return (
        <div className="login-section">
            <Form className="login-form">
                <div className="login-container">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>User Id</Form.Label>
                        <Form.Control value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your id with anyone else.
                    </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button onClick={signIn} className="button" variant="success" type="submit">
                        Log In
                </Button>
                </div>
            </Form>
            <div className="back">
                <a href="/home">Back to home page</a>
            </div>
        </div>
    );
};

export default Login;