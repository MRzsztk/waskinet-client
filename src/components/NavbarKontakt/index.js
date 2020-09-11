import React from "react";
import {Link} from "react-router-dom";

import "./style.css";

export default function index({ handlerOnClick }) {
    return(
        <nav className="navbar-oferta">
            <div className="oferta">
            <div className="oferta-container">
                <button onClick={handlerOnClick} name="dane" className="oferta-link">dane firmy</button>
                |
                <button onClick={handlerOnClick} name="formularz" className="oferta-link">formularz kontaktowy</button>
            </div>
            </div>
        </nav>
    );
}
