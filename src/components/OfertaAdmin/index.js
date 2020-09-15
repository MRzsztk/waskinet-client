import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import DodajUsluge from "../DodajUsluge";

import './style.css';
import api from "../../services/api";

export default function Services() {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [error, setError] = useState('')
  const [services, setServices] = useState([])

const getServices = async () => {
  setServices([{_id: '00000000', service: "pobieram ofertę..."}])
  try {
      const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
      const { data } = await api.get("/uslugi", config );
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

const deleteService = async (serviceId) => {
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        await api.delete(`/uslugi/delete/${serviceId}`, config);
        await getServices()
    } catch (error) {
        console.log(error)
    }
  }

return (<>
    <div className="services">
      <div className="messages-container">
      <div className="dashboard-slot-title">USŁUGI</div>
      <div className="services-category">internet</div>
      <div className="dodaj-component">
        <DodajUsluge cat = {'internet'} subcat = {''} />
        </div>
        {services && services.filter(service => service.category === 'internet').map(service => (
            <div key={service._id} className="service-container">
                <div className="service-name">- {service.service}:</div>
                <div className="service-price"><b>{service.price.toFixed(2)}zł</b></div> 
                {service.unit && <div className="service-unit">/{service.unit}</div>}
                <button name="usun" onClick={() => deleteService(service._id)} className="news-crud-btn">usuń</button>
                </div>
        ))}
        <hr />
        <div className="services-category">telefon</div>
        <div className="dodaj-component">
        <DodajUsluge cat = {'telefon'} subcat = {''} />
        </div>
        {services && services.filter(service => service.category === 'telefon').map(service => (
            <div key={service._id} className="service-container">
                <div className="service-name">- {service.service}:</div>
                <div className="service-price"><b>{service.price.toFixed(2)}zł</b></div> 
                {service.unit && <div className="service-unit">/{service.unit}</div>}
                <button name="usun" onClick={() => deleteService(service._id)} className="news-crud-btn">usuń</button>
                </div>
        ))}
        <hr />
        <div className="services-category">hosting</div>
        <div className="services-subcategory">WWW</div>
        <div className="dodaj-component">
        <DodajUsluge cat = {'hosting'} subcat = {'www'} />
        </div>
        {services && services.filter(service => service.category === 'hosting' && service.subcategory === 'www').map(service => (
            <div key={service._id} className="service-container">
                <div className="service-name">- {service.service}:</div>
                <div className="service-price"><b>{service.price.toFixed(2)}zł</b></div> 
                {service.unit && <div className="service-unit">/{service.unit}</div>}
                <button name="usun" onClick={() => deleteService(service._id)} className="news-crud-btn">usuń</button>
                </div>
        ))}
        <div className="services-subcategory">VPS</div>
        <div className="dodaj-component">
        <DodajUsluge cat = {'hosting'} subcat = {'vps'} />
        </div>
        {services && services.filter(service => service.category === 'hosting' && service.subcategory === 'vps').map(service => (
            <div key={service._id} className="service-container">
                <div className="service-name">- {service.service}:</div>
                <div className="service-price"><b>{service.price.toFixed(2)}zł</b></div> 
                {service.unit && <div className="service-unit">/{service.unit}</div>}
                <button name="usun" onClick={() => deleteService(service._id)} className="news-crud-btn">usuń</button>
                </div>
        ))}
        <div className="services-subcategory">Dedykowane</div>
        <div className="dodaj-component">
        <DodajUsluge cat = {'hosting'} subcat = {'dedykowane'} />
        </div>
        {services && services.filter(service => service.category === 'hosting' && service.subcategory === 'dedykowane').map(service => (
            <div key={service._id} className="service-container">
                <div className="service-name">- {service.service}</div>
                {service.price && <div className="service-price"><b>: {service.price.toFixed(2)}zł</b></div>}
                {service.unit && <div className="service-unit">/{service.unit}</div>}
                <button name="usun" onClick={() => deleteService(service._id)} className="news-crud-btn">usuń</button>
                </div>
        ))}
        <hr />
        <div className="services-category">
        kolokacja
        </div>
        <div className="dodaj-component">
        <DodajUsluge cat = {'kolokacja'} subcat = {''} />
        </div>
        {services && services.filter(service => service.category === 'kolokacja').map(service => (
            <div key={service._id} className="service-container">
                <div className="service-name">- {service.service}:</div>
                <div className="service-price"><b>{service.price.toFixed(2)}zł</b></div> 
                {service.unit && <div className="service-unit">/{service.unit}</div>}
                <button name="usun" onClick={() => deleteService(service._id)} className="news-crud-btn">usuń</button>
                </div>
        ))}
      </div>
      </div>
</>);
}