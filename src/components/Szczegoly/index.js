import React, { useState, useEffect } from 'react'

import Server from "../../assets/server.png";
import Landline from "../../assets/landline.png";
import Internet from "../../assets/internet.png";
import Things from "../../assets/bullshit.png";

import './style.css'

export default function Szczegoly({ usluga, services }) {

    return (
        <div className="szczegoly">

        {/* ----------------internet------------------- */}
                {usluga==="internet" &&
                <div>
                <div className="opis">
                <p>to paragraf o internecie. Należy wpisać tu coś ciekawego, aby przykuć uwagę klienta. Może być też obrazek.</p>
                    <img src={Internet} alt="internet" className="internet-img" />
                </div> 
                <div className="cennik">
                <div className="cennik-title">CENNIK</div>
                {services.filter(service => service.category === 'internet').map(service => (
                <div key={service._id} className="cennik-usluga">
                    <div className="service-name">- {service.service}:</div>
                    <div className="service-price"><b>{service.price.toFixed(2)}zł</b></div> 
                    {service.unit && <div className="service-unit">/{service.unit}</div>}
                </div>
        ))}
                </div>
                </div>        
                    }

        {/* ----------------telefon------------------- */}
                {usluga==="telefon" &&
                <div>
                <div className="opis">
                <p>Telefon stacjonarny.<br />
                    Wynalazek coraz rzadziej używany, niestety niezbędny w biznesie. Daje prestiż i powagę firmie. Niezastąpiony w domu np u starszych rodziców.</p>
                    <img src={Landline} alt="telefon" className="landline-img" />
                </div> 
                    <div className="cennik">
                <div className="cennik-title">CENNIK</div>
                {services.filter(service => service.category === 'telefon').map(service => (
                <div key={service._id} className="cennik-usluga">
                    <div className="service-name">- {service.service}:</div>
                    <div className="service-price"><b>{service.price.toFixed(2)}zł</b></div> 
                    {service.unit && <div className="service-unit">/{service.unit}</div>}
                </div>
        ))}
                </div>
                </div>
        }


        {/* ----------------hosting------------------- */}
                {usluga==="hosting" &&
                <div>
                <div className="opis">
                    <p>Oferujemy serwery WWW, VPS oraz dedykowane, dostosowane do potrzeb klienta. <br />Skontaktuj się z nami, aby poznać szczegóły. </p>
                    <img src={Server} alt="serwer" className="server-img" />
                </div>    
                    <div className="cennik">
                <div className="cennik-title">CENNIK</div>
                <br />
                <div className="cennik-subcat">SERWERY WWW</div>
                {services.filter(service => service.category === 'hosting' && service.subcategory === 'www').map(service => (
                <div key={service._id} className="cennik-usluga">
                    <div className="service-name">- {service.service}:</div>
                    <div className="service-price"><b>{service.price.toFixed(2)}zł</b></div> 
                    {service.unit && <div className="service-unit">/{service.unit}</div>}
                </div>
        ))}
            <br />
                <div className="cennik-subcat">SERWERY VPS</div>
                {services.filter(service => service.category === 'hosting' && service.subcategory === 'vps').map(service => (
                <div key={service._id} className="cennik-usluga">
                    <div className="service-name">- {service.service}:</div>
                    <div className="service-price"><b>{service.price.toFixed(2)}zł</b></div> 
                    {service.unit && <div className="service-unit">/{service.unit}</div>}
                </div>
        ))}
                <br />
                <div className="cennik-subcat">SERWERY DEDYKOWANE</div>
                        {services.filter(service => service.category === 'hosting' && service.subcategory === 'dedykowane').map(service => (
                        <div key={service._id} className="cennik-usluga">
                            <div className="service-name">- {service.service}</div>
                            {service.price && <div className="service-price">:<b>{service.price.toFixed(2)}zł</b></div>}
                            {service.unit && <div className="service-unit">/{service.unit}</div>}
                        </div>
                ))}
                </div>
                </div>
            }


            {/* ----------------kolokacja------------------- */}
                {usluga==="kolokacja" &&
                <div>
                <div className="opis">
                    <p>W naszej nowej serwerowni można wydzierżawić maszynę z dowolnie wybranym systemem oraz o dowolnych parametrach, lub dostarczyć swoją maszynę. <br />
                Ceny są negocjowane indywidualnie w zależności od potrzeb. Zapraszamy do współpracy. Również przewidziana oferta współpracy dla pośredników.</p>
                    <img src={Things} alt="serwer" className="things-img" />
                </div>  
                </div>        
                    }      
        </div>
    )
}