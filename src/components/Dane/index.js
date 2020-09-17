import React from 'react'
import mapboxgl from "mapbox-gl";
import Mapa from "../Mapa"
import Phone from "../../assets/phone.png"
import Email from "../../assets/email.png"
import Flag from "../../assets/flag.png"

import "mapbox-gl/dist/mapbox-gl.css";

import './style.css'

export default function Dane() {
    return (
        <div className="adres">
            <div className="dane">
                <h2 className="chakra">waski.net Sp. z o.o.</h2>
                <div className="adres-container">
                <img src={Flag} alt="adres" className="icon-address" />
                <p>
                ul. Szarotki 18<br />
                71-604 Szczecin</p>
                </div>
                <p><img src={Phone} alt="phone" className="icon-phone" /> 668 40 69 40 <br />
                <img src={Email} alt="email" className="icon-email" /> waski@waski.net</p>
                <p className="nomargin">-----------------</p>
                <p>NIP: 851-31-39-322<br />
                Regon: 320954690<br />
                KRS: 0000393268<br />
                UKE: 9780</p>
            </div>
            <Mapa />
        </div>

    )
}
