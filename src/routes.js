import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import "./index.css"

//pages imports
import Home from "./pages/Home";
import Oferta from "./pages/Oferta";
import Kontakt from "./pages/Kontakt";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
// import Napisz from "./pages/Napisz";

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/oferta" exact component={Oferta} />
            <Route path="/kontakt" exact component={Kontakt} />
            {/* <Route path="/login" exact component={Login} />
            <Route path="/logout" exact component={Logout} /> */}
            {/* <Route path="/news/create" exact component={Napisz}/> */}
        </BrowserRouter>
    );
}