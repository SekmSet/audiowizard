import React, {useContext} from 'react'
import { useHistory } from "react-router-dom";
import {Navbar, Form, Button} from 'react-bootstrap';
import UserContext from '../context/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    const history = useHistory();
    const { username, setUsername } = useContext(UserContext);

    const redirectSubmit = () => {
        history.push('/account');
    }

    const logoutSubmit = () => {
        setUsername('');
        history.push('/account');
    }

    return (
        <header>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="/">AudioWizard</Navbar.Brand>
                <Navbar.Collapse>
                    <Form inline>
                        <Button onClick={redirectSubmit} variant="outline-success">{username ? username : 'Compte'}</Button>
                    </Form>
                    {username &&
                        <Form inline>
                            <Button onClick={logoutSubmit} variant="outline-dark">Déconnexion</Button>
                        </Form>
                    }
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header;
