import React, {useContext} from 'react'
import { useHistory } from "react-router-dom";
import {Navbar, Form, Button} from 'react-bootstrap';
import { toast } from 'react-toastify';
import UserContext from '../context/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    const history = useHistory();
    const { username, setUsername } = useContext(UserContext);

    const redirectSubmit = () => {
        history.push('/account');
    }

    const logoutSubmit = () => {
        history.push('/account');
        toast.info(`🦄 ${username} tu es déconnecté !`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setUsername('');
    }

    return (
        <header>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="/">AudioWizard</Navbar.Brand>
                <Navbar.Collapse>
                    {!username &&
                        <Form inline>
                            <Button onClick={redirectSubmit} variant="outline-success">Mon compte</Button>
                        </Form>
                    }

                    {username &&
                        <>
                            <Form inline>
                                <Button onClick={redirectSubmit} variant="outline-info">username</Button>
                            </Form>
                            <Form inline>
                                <Button onClick={logoutSubmit} variant="outline-dark">Déconnexion</Button>
                            </Form>
                        </>
                    }
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header;
