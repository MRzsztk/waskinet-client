import React from "react";
import {Link} from "react-router-dom";
import DeviceIdentifier from "react-device-identifier";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Newsy from "../../components/Newsy";

import "./style.css";

export default function Home() {
    return(
        <div className="page">
            <Header />
            <Newsy />
            <Footer />
        </div>
    );
}