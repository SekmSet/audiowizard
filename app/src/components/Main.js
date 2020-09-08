import React from 'react'
import {Route, Switch} from "react-router-dom";
import {Col, Row} from "react-bootstrap";

import Home from "./Home";
import Account from "./Account";
import Test from "./Test";
import Results from "./Results";

function Main() {
    return (
        <Col md={9}>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <Switch>
                        <Route path='/' exact>
                            <Home />
                        </Route>

                        <Route path='/account'>
                            <Account />
                        </Route>

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
