import React from "react";
import {Link} from "react-router-dom";

import "./style.css";

export default function NavbarNewsy() {
    return(
        <nav className="navbar">
            <div className="navbar-container">
            <div className="navbar-content">
                <div className="navbar-item-passive center">PLANY</div><div className="navbar-item-passive center">|</div>
                <div className="navbar-item-passive center">NOWOŚCI</div><div className="navbar-item-passive center">|</div>
                <div className="navbar-item-passive center">USTERKI</div>
            </div>
            </div>
        </nav>
    );
}
