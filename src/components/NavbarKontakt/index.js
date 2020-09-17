import React from "react";
import {Link} from "react-router-dom";

import "./style.css";

export default function index({ handlerOnClick }) {
    return(
        <nav className="navbar">
            <div className="navbar-container">
            <div className="navbar-content">
                <button onClick={handlerOnClick} name="dane" className="navbar-item">DANE FIRMY</button>
                |
                <button onClick={handlerOnClick} name="formularz" className="navbar-item">FORMULARZ KONTAKTOWY</button>
            </div>
            </div>
        </nav>
    );
}
