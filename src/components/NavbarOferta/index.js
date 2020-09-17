import React from "react";
import {Link} from "react-router-dom";

import "./style.css";

export default function index({ handlerOnClick }) {
    return(
        <nav className="navbar">
            <div className="navbar-container">
            <div className="navbar-content">
                <button onClick={handlerOnClick} name="internet" className="navbar-item">INTERNET</button>
                |
                <button onClick={handlerOnClick} name="telefon" className="navbar-item">TELEFON</button>
                |
                <button onClick={handlerOnClick} name="hosting" className="navbar-item">HOSTING</button>
                |
                <button onClick={handlerOnClick} name="kolokacja" className="navbar-item">KOLOKACJA</button>
            </div>
            </div>
        </nav>
    );
}
