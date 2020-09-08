import React from 'react'
import {Link} from "react-router-dom";
import {Col, ListGroup} from "react-bootstrap";

function Navbar() {
    return (
        <Col md={3}>
            <ListGroup>
                <ListGroup.Item className="nav-item">
                    <Link className="nav-link active" to="/">Accueil</Link>
                </ListGroup.Item>
                <ListGroup.Item className="nav-item">
                    <Link className="nav-link active" to="/test">Commencez votre test</Link>
                </ListGroup.Item>
                <ListGroup.Item className="nav-item">
                    <Link className="nav-link active" to="/account">Compte</Link>
                </ListGroup.Item>
            </ListGroup>
        </Col>
    )
}

export default Navbar;
