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

function App() {
    return (
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
    );
}

export default App;
