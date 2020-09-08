import React from 'react'
import { useHistory } from "react-router-dom";
import {Navbar, Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    const history = useHistory();

    const redirectSubmit = () => {
        history.push('/account');
    }

    return (
        <header>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="/">AudioWizard</Navbar.Brand>
                <Navbar.Collapse>
                    <Form inline>
                        <Button onClick={redirectSubmit} variant="outline-success">Mon compte</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header;
