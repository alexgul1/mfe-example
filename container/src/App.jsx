import React, {lazy, Suspense, useCallback, useState} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {createGenerateClassName, StylesProvider} from "@material-ui/core";

import Header from "./components/Header";
import Loader from "./components/Loader";

const generateClassName = createGenerateClassName({
    productionPrefix: 'container'
})

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

const App = () => {
    const [isSignedIn, setIsSignedIn] = useState(false)

    const onSignIn = useCallback(() => setIsSignedIn(true), [])
    const onSignOut = useCallback(() => setIsSignedIn(false), [])

    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Header isSignedIn={isSignedIn} onSignOut={onSignOut}/>
                <Suspense fallback={<Loader/>}>
                    <Switch>
                        <Route path="/auth/" >
                            <AuthLazy onSignIn={onSignIn}/>
                        </Route>

                        <Route path="/" component={MarketingLazy} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </StylesProvider>
    )
};

export default App;
