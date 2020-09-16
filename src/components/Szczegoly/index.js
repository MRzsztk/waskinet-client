import React, { useState, useEffect } from 'react'
import './style.css'

export default function Szczegoly({ usluga, services }) {

    return (
        <div className="szczegoly">

        {/* ----------------internet------------------- */}
                {usluga==="internet" &&
                <div>
                <p>to paragraf o internecie. Należy wpisać tu coś ciekawego, aby przykuć uwagę klienta. Może być też obrazek.</p>
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
                    <p>Telefon stacjonarny.<br />
                    Wynalazek coraz zadziej używany, niestety niezbędny w biznesie. Daje prestiż i powagę firmie. Niezastąpiony w domu np u starszych rodziców.<br />
                    Oferta dla firm, instytucji i klientów indywidualnych:<br />
                    Abonament (utrzymanie numeru) 10 zł miesięcznie.<br />
                    Połączenia w UE (telefony stacjonarne) 10 gr/min.</p>
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
                <h3>Serwery WWW</h3>
                    <p>1 GB HDD, Poczta, FTP, MySQL, Domeny – bez limitu   |   Transfer – 10 GB – 100 zł/rok<br />
                    10 GB HDD, Poczta, FTP, MySQL, Domeny – bez limitu   |   Transfer – 50 GB – 200 zł/rok<br />
                    50 GB HDD, Poczta, FTP, MySQL, Domeny – bez limitu   |   Transfer – 200 GB – 700 zł/rok</p>
                    <h3>Servery VPS</h3>
                    <p>Opłata za środowisko VPS: 24 zł/szt. <br />
                    Opłata za CPU 28 zł/GHz <br />
                    Opłata za RAM 28 zł/GB <br />
                    Opłata za HDD 28 zł/100GB</p>
                    <h3>Dedykowane</h3>
                    <p>Oferta personalizowania pod potrzeby indywidualne Klienta. </p>
                    
                    <div className="cennik">
                <div className="cennik-title">CENNIK</div>
                <div className="cennik-subcat">SERWERY WWW</div>
                {services.filter(service => service.category === 'hosting' && service.subcategory === 'www').map(service => (
                <div key={service._id} className="cennik-usluga">
                    <div className="service-name">- {service.service}:</div>
                    <div className="service-price"><b>{service.price.toFixed(2)}zł</b></div> 
                    {service.unit && <div className="service-unit">/{service.unit}</div>}
                </div>
        ))}
                <div className="cennik-subcat">SERWERY VPS</div>
                {services.filter(service => service.category === 'hosting' && service.subcategory === 'vps').map(service => (
                <div key={service._id} className="cennik-usluga">
                    <div className="service-name">- {service.service}:</div>
                    <div className="service-price"><b>{service.price.toFixed(2)}zł</b></div> 
                    {service.unit && <div className="service-unit">/{service.unit}</div>}
                </div>
        ))}
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
                <p>W naszej nowej serwerowni można wydzierżawić maszynę z dowolnie wybranym systemem oraz o dowolnych parametrach.</p>
                <p>Ceny są negocjowane indywidualnie w zależności od potrzeb. Klient może dostarczyć swoją maszynę lub wydzierżawić od nas dedykowaną. <br />Zapraszamy do współpracy. Również przewidziana oferta współpracy dla pośredników.</p>
                </div>        
                    }      
        </div>
    )
}