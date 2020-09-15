import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import "./index.css"

//pages imports
import Home from "./pages/Home";
import Oferta from "./pages/Oferta";
import Kontakt from "./pages/Kontakt";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Dashboard from "./pages/Dashboard";

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/oferta" exact component={Oferta} />
            <Route path="/kontakt" exact component={Kontakt} />
            <Route path="/login" exact component={Login} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/logout" exact component={Logout} />
        </BrowserRouter>
    );
}