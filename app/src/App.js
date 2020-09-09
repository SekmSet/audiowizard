import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Navbar from './components/Navbar';

import { AppProvider } from './context/AppContext';
import { UserProvider } from './context/UserContext';

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
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </AppProvider>
    </UserProvider>
  );
}

export default App;
