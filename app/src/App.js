import React from "react";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Navbar from './components/Navbar';

import {AppProvider} from "./context/context";

function App() {
    return (
        <AppProvider>
            <Router>
                <div className="App">
                    <Header />
                    <Navbar />
                    <Main />
                </div>
            </Router>
        </AppProvider>
    );
}

export default App;
