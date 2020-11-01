import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../../SBD_Logo1.svg';
import './Navigation.css';


const Navigation = () => (
    <Navbar collapseOnSelect sticky="top" expand="lg" className="nav" variant="light">
        <Navbar.Brand href="/" id="brand-text">
            <img src={logo} height="50" className="d-inline-block align-top" alt="SBD Logo" />
        </Navbar.Brand>
        <Navbar.Text className="mr-auto" id="brand-text">SMITH BROTHERS <br/> DEVELOPMENT</Navbar.Text>
        <Navbar.Toggle id="toggle" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="collapse" id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link className="text" href="/">Home</Nav.Link>
                <Nav.Link className="text" href="/our-company">About</Nav.Link>
                <Nav.Link className="text" href="/services">Services</Nav.Link>
                <Nav.Link className="text" href="/articles">Articles</Nav.Link>
                <Nav.Link className="text" id="contact" href="/contact-us">Contact Us</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Navigation;