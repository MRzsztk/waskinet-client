import React from "react";
import {Link} from "react-router-dom";

import Logo from "../../assets/logo.png";

import "./style.css";

export default function Header() {
    return(
        <header className="header">
            <div className="dark-stripe"></div>
            <div className="head">
            <img className="logo" src={Logo} alt="waskinet_logo" />
            <div className="head-container">
                <Link className="head-link" to={"/"}>aktualności</Link>
                <Link className="head-link" to={"/oferta"}>oferta</Link>
                <Link className="head-link" to={"/kontakt"}>kontakt</Link>
            </div>
            </div>
            <div className="blue-stripe"></div>
        </header>
    );
}