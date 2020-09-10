import React from "react";
import {Link} from "react-router-dom";

import "./style.css";

export default function index({ handlerOnClick }) {
    return(
        <nav className="navbar-oferta">
            <div className="oferta">
            <div className="oferta-container">
                <button onClick={handlerOnClick} name="internet" className="oferta-link">internet</button>
                |
                <button onClick={handlerOnClick} name="telefon" className="oferta-link">telefon</button>
                |
                <button onClick={handlerOnClick} name="hosting" className="oferta-link">hosting</button>
                |
                <button onClick={handlerOnClick} name="kolokacja" className="oferta-link">kolokacja</button>
            </div>
            </div>
        </nav>
    );
}
