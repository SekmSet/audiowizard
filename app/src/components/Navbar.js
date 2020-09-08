import React from 'react'
import {NavLink} from "react-router-dom";
import {Col, ListGroup} from "react-bootstrap";

function Navbar() {
    return (
        <Col md={3}>
            <ListGroup as="ul">
                <ListGroup.Item className="nav-item" as="li">
                    <NavLink className="nav-link" to="/" exact>Accueil</NavLink>
                </ListGroup.Item>
                <ListGroup.Item className="nav-item" as="li">
                    <NavLink className="nav-link" to="/test" exact>Commencez votre test</NavLink>
                </ListGroup.Item>
                <ListGroup.Item className="nav-item" as="li">
                    <NavLink className="nav-link" to="/account" exact>Compte</NavLink>
                </ListGroup.Item>
            </ListGroup>
        </Col>
    )
}

export default Navbar;
