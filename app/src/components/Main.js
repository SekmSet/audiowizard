import React, {useContext} from 'react'
import {Route, Switch} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import Home from "./Pages/Home";
import Account from "./Pages/Account";
import Test from "./Pages/Test";
import Results from "./Pages/Results";
import Profil from "./Pages/Profil";
import UserContext from "../context/UserContext";

function Main() {
    const { username } = useContext(UserContext);

    return (
        <Col md={9}>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <Switch>
                        <Route path='/' exact>
                            <Home />
                        </Route>

                        {!username &&
                            <Route path='/account'>
                                {username ?<Account />:<Profil /> }
                                <Account />
                            </Route>
                        }

                        {username &&
                            <Route path='/account'>
                                <Profil />
                            </Route>
                        }

                        <Route path='/test'>
                            <Test />
                        </Route>

                        <Route path='/results'>
                            <Results />
                        </Route>
                    </Switch>
                </Col>
            </Row>
        </Col>
    )
}

export default Main;
