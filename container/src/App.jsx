import React, {lazy, Suspense, useCallback, useEffect, useState} from "react";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import {createGenerateClassName, StylesProvider} from "@material-ui/core";
import { createBrowserHistory} from 'history';


import Header from "./components/Header";
import Loader from "./components/Loader";

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma'
})

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const history = createBrowserHistory()

const App = () => {
    const [isSignedIn, setIsSignedIn] = useState(false)

    const onSignIn = useCallback(() => setIsSignedIn(true), [])
    const onSignOut = useCallback(() => setIsSignedIn(false), [])

    useEffect(() => {
        if(isSignedIn) {
            history.push('/dashboard')
        } else {
            history.push('/')
        }
    }, [isSignedIn])

    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <Header isSignedIn={isSignedIn} onSignOut={onSignOut}/>
                <Suspense fallback={<Loader/>}>
                    <Switch>
                        <Route path="/auth/">
                            <AuthLazy onSignIn={onSignIn}/>
                        </Route>
                        <Route path="/dashboard">
                            {!isSignedIn && <Redirect to="/" />}
                            <DashboardLazy />
                        </Route>
                        <Route path="/" component={MarketingLazy}/>
                    </Switch>
                </Suspense>
            </StylesProvider>
        </Router>
    )
};

export default App;
