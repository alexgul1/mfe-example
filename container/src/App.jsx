import React from "react";
import {BrowserRouter} from "react-router-dom";
import {createGenerateClassName, StylesProvider} from "@material-ui/core";

import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";

const generateClassName = createGenerateClassName({
    productionPrefix: 'container'
})

const App = () => (
    <StylesProvider generateClassName={generateClassName}>
    <BrowserRouter>
        <Header/>
        <MarketingApp/>
    </BrowserRouter>
    </StylesProvider>
);

export default App;
