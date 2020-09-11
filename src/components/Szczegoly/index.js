import React from 'react'
// import Internet from "../../components/Internet";
// import Telefon from "../../components/Telefon";
// import Kolokacja from "../../components/Kolokacja";
// import Hosting from "../../components/Hosting";
import './style.css'

export default function Szczegoly({ usluga }) {

    return (
        <div className="szczegoly">
                {usluga==="internet" &&
                <div>
                <p>to paragraf o internecie.</p>
                <p>Należy wpisać tu coś ciekawego.</p>
                </div>        
                    }
                {usluga==="telefon" &&
                <div>
                    <p>Telefon stacjonarny.</p>
                    <p>Wynalazek coraz zadziej używany, niestety niezbędny w biznesie. Daje prestiż i powagę firmie. Niezastąpiony w domu np u starszych rodziców.</p>
                    <p>Oferta dla firm, instytucji i klientów indywidualnych:</p>
                    <b>Abonament (utrzymanie numeru) 10 zł miesięcznie.</b>
                    <p>Połączenia w UE (telefony stacjonarne) 10 gr/min.</p>
                </div>}
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
                </div>}
                {usluga==="kolokacja" &&
                <div>
                <p>W naszej nowej serwerowni można wydzierżawić maszynę z dowolnie wybranym systemem oraz o dowolnych parametrach.</p>
                <p>Ceny są negocjowane indywidualnie w zależności od potrzeb. Klient może dostarczyć swoją maszynę lub wydzierżawić od nas dedykowaną. <br />Zapraszamy do współpracy. Również przewidziana oferta współpracy dla pośredników.</p>
                </div>        
                    }      
        </div>
    )
}