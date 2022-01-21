import React from 'react'
import {Switch, Route, Router} from "react-router-dom";
import {createGenerateClassName, StylesProvider} from "@material-ui/core";

const generateClassName = createGenerateClassName({
    productionPrefix: 'au'
})

import Signin from "./components/Signin";
import Signup from "./components/Signup";

const App = ({history, onSignIn}) => (
    <Router history={history}>
        <StylesProvider generateClassName={generateClassName}>
            <Switch>
                <Route path={'/auth/signin'}>
                    <Signin onSignIn={onSignIn}/>
                </Route>
                <Route path={'/auth/signup'}>
                    <Signup onSignIn={onSignIn}/>
                </Route>
            </Switch>
        </StylesProvider>
    </Router>
)

export default App
