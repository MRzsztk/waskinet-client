import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import DeviceIdentifier from "react-device-identifier";

import Header from "../../components/Header";
import NavbarOferta from "../../components/NavbarOferta";
import Footer from "../../components/Footer";
import Szczegoly from "../../components/Szczegoly";
// import Internet from "../../components/Internet";
// import Telefon from "../../components/Telefon";
// import Kolokacja from "../../components/Kolokacja";
// import Hosting from "../../components/Hosting";
import "./style.css";

export default function Oferta() {
const [usluga, setUsluga] = useState('internet');
const [showUsluga, setShowUsluga] = useState('internet');
const [error, setError] = useState(null);
const history = useHistory();

useEffect(() => {
    setUsluga(usluga);
    console.log(usluga);
}, [usluga])

    return(
        <div>
            <Header />
            <div className="mid">
            <div className="mid-container">
            {usluga}
            {<Szczegoly usluga={usluga} />}
            <NavbarOferta handlerOnClick={(e) => setUsluga(e.target.name)} />
            </div>
            </div>
            <Footer />
        </div>
    );
}