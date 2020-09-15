import React from "react";
import {Link} from "react-router-dom";

import "./style.css";

export default function index({ handlerOnClick }) {
    return(
        <nav className="navbar-oferta">
            <div className="oferta">
            <div className="oferta-container">
                <button onClick={handlerOnClick} name="internet" className="oferta-link">INTERNET</button>
                |
                <button onClick={handlerOnClick} name="telefon" className="oferta-link">TELEFON</button>
                |
                <button onClick={handlerOnClick} name="hosting" className="oferta-link">HOSTING</button>
                |
                <button onClick={handlerOnClick} name="kolokacja" className="oferta-link">KOLOKACJA</button>
            </div>
            </div>
        </nav>
    );
}
