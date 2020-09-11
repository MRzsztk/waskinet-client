import React from "react";
import {Link} from "react-router-dom";

import Fiber from "../../assets/fiber-long.png"

import "./style.css";

export default function Footer() {
    return(
        <footer className="footer">
            <p>waski.net 2020   |   MR</p>
            <img className="footer-img" src={Fiber} alt="fo-cable" />
        </footer>
    );
}