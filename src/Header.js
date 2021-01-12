import { Button } from '@material-ui/core';
import { Link } from "react-router-dom"
import React from 'react';
import './Header.css';
import { Nav, Navbar } from 'react-bootstrap';
import logo from './logo/logo.png';
import { useStateValue } from './StateProvider';
import { auth } from './firebaseConfig';

const Header = () => {
    const [{ user }, dispatch] = useStateValue();

    const handleSignOut = () => {

        auth.signOut().then(() => {
            alert('Signout successfull');
        }).catch((error) => {
            alert(error.message);
        });
    }

    return (
        <div className="header-section">
            <Navbar sticky="bottom" collapseOnSelect expand="lg" style={{ backgroundColor: 'white' }} variant="dark">
                <Navbar.Brand href="/home"><img height="45" src={logo} alt=""></img></Navbar.Brand>
                {
                    user ? <Nav className="ml-auto align-items-center">
                        <Nav.Link onClick={handleSignOut} className="mr-3 bg-success text-white login">Logout</Nav.Link>
                    </Nav> : <Nav className="ml-auto align-items-center">
                            <Nav.Link className="mr-3 bg-success text-white login" href="/login">Log In/Register</Nav.Link>
                        </Nav>
                }
            </Navbar>
            <Navbar sticky="top" collapseOnSelect expand="lg" style={{ backgroundColor: 'green' }} variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto align-items-center">
                        <Nav.Link className="mr-3 text-white" href="/home">Home</Nav.Link>
                        <div className="dropdown">
                            <Nav.Link className="mr-3 text-white" href="#about">About</Nav.Link>
                            <div id="dropdown-content">
                                <div id="contents">Given all contents are given bellow:
                                    <a href="/cse">Welcome to CSE (PUST)</a>
                                    <a href="/history">History of CSE (PUST)</a>
                                    <a href="/why">Why CSE in PUST</a>
                                    <a href="/vision">Vision of CSE (PUST)</a>
                                </div>
                            </div>
                        </div>

                        <div className="dropdown">
                            <Nav.Link className="mr-3 text-white" href="#academic">Academic</Nav.Link>
                            <div id="dropdown-content">
                                <div id="contents">FACULTY OF SCIENCE & ENGINEERING
                                <a href="/dean">Dean Office</a>
                                    <a href="/cse">Computer Science and Engineering</a>
                                    <a href="/eee">Electrical and Electronic Engineering</a>
                                    <a href="/ese">Environmental Science and Engineering</a>
                                    <a href="/statistics">Statistics</a>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown">
                            <Nav.Link className="mr-3 text-white" href="#people">People</Nav.Link>
                            <div id="dropdown-content">
                                <div id="contents">Given all contents are given bellow:
                                    <a href="/faculty">Faculty</a>
                                    <a href="/staff">Staff</a>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown">
                            <Nav.Link className="mr-3 text-white" href="#announcement">Announcement</Nav.Link>
                            <div id="dropdown-content">
                                <div id="contents">Given all contents are given bellow:
                                    <a href="/student-announcement">For Students</a>
                                    <a href="/teacher-announcement">For Teachers</a>
                                    <a href="/staff-announcement">For Staffs</a>
                                </div>
                            </div>
                        </div>
                        <Nav.Link className="mr-3 text-white" href="#campus">Campus Life</Nav.Link>
                        <div className="dropdown">
                            <Nav.Link className="mr-3 text-white" href="#admission">Admission</Nav.Link>
                            <div id="dropdown-content">
                                <div id="contents">Given all contents are given bellow:
                                    <a href="/graduate">Graduate</a>
                                    <a href="/undergraduate">Undergraduate</a>
                                </div>
                            </div>
                        </div>

                        {/* <div className="dropdown"> */}
                        <Nav.Link className="mr-3 text-white"><Link className="text-white" to="/noticeboard">Notice Board</Link></Nav.Link>

                        {/* <div id="dropdown-content">
                            <div id="contents">Given all contents are given bellow:
                                    <a href="/student-notice">For Students</a>
                                    <a href="/teacher-notice">For Teachers</a>
                                    <a href="/staff-notice">For Staffs</a>
                                </div>
                            </div> */}
                        {/* </div> */}

                        <div className="dropdown">
                            <Nav.Link className="mr-3 text-white" href="#news">News and Event</Nav.Link>
                            <div id="dropdown-content">
                                <div id="contents">Given all contents are given bellow:
                                    <a href="/gallery">Gallery</a>
                                </div>
                            </div>
                        </div>
                        {
                            user && <Nav.Link className="mr-3 text-white"><Link className="text-white" to="/admin">Admin Dashboard</Link></Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;