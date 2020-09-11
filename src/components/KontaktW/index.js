import React from 'react'

import Dane from "../../components/Dane";
import Formularz from "../../components/Formularz";

import './style.css'

export default function KontaktW({ method }) {

    return (
        <div className="szczegoly">
                {method==="dane" &&
                <Dane />}
                {method==="formularz" &&
                <Formularz />}
        </div>
    )
}