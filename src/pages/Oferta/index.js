import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import DeviceIdentifier from "react-device-identifier";

import Header from "../../components/Header";
import NavbarOferta from "../../components/NavbarOferta";
import Footer from "../../components/Footer";
import Szczegoly from "../../components/Szczegoly";

import api from "../../services/api";

import "./style.css";

export default function Oferta() {

const [error, setError] = useState(null);
const history = useHistory();
const [usluga, setUsluga] = useState('hosting');
const [services, setServices] = useState([])

const getServices = async () => {
//   setServices([{_id: '00000000', service: "pobieram ofertę..."}])
  try {
      const { data } = await api.get("/uslugi");
      if (data?.hasOwnProperty('error')) {
          return setError(data.error)
      }
      setServices(data)
  } catch (error) {
      console.log(error)
  }
}

useEffect(() => {
  getServices()
}, [])

useEffect(() => {
    setUsluga(usluga);
}, [usluga])

    return(
        <div>
            <Header />
            <div className="mid">
            <div className="mid-container">
            {console.log(services)}
            {<Szczegoly usluga={usluga} services={services} />}
            <NavbarOferta handlerOnClick={(e) => setUsluga(e.target.name)} />
            </div>
            </div>
            <Footer />
        </div>
    );
}