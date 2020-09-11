import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import DeviceIdentifier from "react-device-identifier";

import Header from "../../components/Header";
import NavbarKontakt from "../../components/NavbarKontakt";
import Footer from "../../components/Footer";
import KontaktW from "../../components/KontaktW";
// import Internet from "../../components/Internet";
// import Telefon from "../../components/Telefon";
// import Kolokacja from "../../components/Kolokacja";
// import Hosting from "../../components/Hosting";
import "./style.css";

export default function Kontakt() {
const [method, setMethod] = useState('dane');
const [error, setError] = useState(null);
const history = useHistory();

useEffect(() => {
    setMethod(method);
    console.log(method);
}, [method])

    return(
        <div>
            <Header />
            <div className="mid">
            <div className="mid-container">
            {<KontaktW method={method} />}
            <NavbarKontakt handlerOnClick={(e) => setMethod(e.target.name)} />
            </div>
            </div>
            <Footer />
        </div>
    );
}