import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'components/Navigation.css';

export default function Navigation(props) {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">code-sandbox</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/algorithms">Algorithms</Link>
                    <Link to="/quizes">Quizes</Link>
                    <Link to="/katas">Katas</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
