import React from 'react'
import {Switch, Route, Router} from "react-router-dom";
import {createGenerateClassName, StylesProvider} from "@material-ui/core";

import Landing from './components/Landing';
import Pricing from "./components/Pricing";

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma'
})

const App = ({history}) => (
    <Router history={history}>
        <StylesProvider generateClassName={generateClassName}>
            <Switch>
                <Route path="/pricing">
                    <Pricing/>
                </Route>
                <Route exact path="/">
                    <Landing/>
                </Route>
            </Switch>
        </StylesProvider>
    </Router>
)

export default App
