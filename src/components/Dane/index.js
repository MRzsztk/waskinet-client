import React from 'react'
import mapboxgl from "mapbox-gl";
import Mapa from "../Mapa"

import "mapbox-gl/dist/mapbox-gl.css";

import './style.css'

export default function Dane() {
    return (
        <div className="adres">
            <div className="dane">
                <h2>waski.net Sp. z o.o.</h2>
                <p>
                ul. Szarotki 18<br />
                71-604 Szczecin</p>
                <p>Tel: 668 40 69 40 <br />
                waski@waski.net</p>
                <p>NIP: 851-31-39-322<br />
                Regon: 320954690<br />
                KRS: 0000393268<br />
                UKE: 9780</p>
            </div>
            <Mapa />
        </div>

    )
}
