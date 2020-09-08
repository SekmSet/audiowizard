import React from 'react'
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import Account from "./Account";
import Test from "./Test";
import Results from "./Results";

function Main() {
    return (
        <div>
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
        </div>
    )
}

export default Main;
