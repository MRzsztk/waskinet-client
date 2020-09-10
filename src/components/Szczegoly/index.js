import React from 'react'
// import Internet from "../../components/Internet";
// import Telefon from "../../components/Telefon";
// import Kolokacja from "../../components/Kolokacja";
// import Hosting from "../../components/Hosting";
import './style.css'

export default function Szczegoly({ usluga }) {

    return (
        <div className="mid">
            <div className="szczegoly">
                {usluga==="internet" && 
                    <p>to paragraf o internecie.</p>}
                {usluga==="telefon" && 
                    <p>to paragraf o telefonie.</p>}            
            </div>
        </div>
    )
}