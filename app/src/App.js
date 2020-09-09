import React from "react";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from "react-bootstrap";
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Navbar from './components/Navbar';

import {AppProvider} from "./context/AppContext";
import {UserProvider} from "./context/UserContext";

function App() {
    return (
        <UserProvider>
            <AppProvider>
                <Router>
                    <div>
                        <Header />
                        <Container fluid>
                            <Row>
                                <Navbar />
                                <Main />
                            </Row>
                        </Container>
                    </div>
                </Router>
            </AppProvider>
        </UserProvider>
    );
}

export default App;
