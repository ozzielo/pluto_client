import React from 'react';
import { Navbar, Nav, Container, Row, Col, NavDropdown } from 'react-bootstrap';
import './navbar.scss';

export function NavBarView() {
    const user = localStorage.getItem("user");

    return (
        <div className="navbar-div">
            <Navbar className="navbar-div" variant="dark" expand="lg" fixed="top">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img
                            src="pluto-logo.png"
                            width="300"
                            height="300"
                        // className="d-inline-block align-top"
                        //   alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}