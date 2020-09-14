import React from "react";
import {Link} from "react-router-dom";

import Logo from "../../assets/logo.png";

import "./style.css";

export default function HeaderAdmin() {
    return(
        <header className="header">
            <div className="dark-stripe"></div>
            <div className="head">
            <img className="logo" src={Logo} alt="waskinet_logo" />
            <div className="head-container">
                <Link className="head-link" to={"/logout"}>wyloguj</Link>
            </div>
            </div>
            <div className="blue-stripe"></div>
        </header>
    );
}