import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from "../../services/api";

import './style.css'

export default function DodajUsluge({ cat, subcat, collapse}) {
    const history = useHistory()
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [category, setCategory] = useState(cat)
    const [subcategory, setSubcategory] = useState(subcat)
    const [service, setService] = useState('')
    const [price, setPrice] = useState(null)
    const [unit, setUnit] = useState('')
    const [error, setError] = useState(null)

    const handleServiceSubmit = async () => {
        try {
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            const { data } = await api.post("/uslugi/create", {
                category: category, subcategory: subcategory, service: service, price: price, unit: unit
            }, config);
            if (data?.hasOwnProperty('error')) {
                return setError(data.error)
            }
            history.push('/dashboard')
        } catch (error) {
            console.log(error)
        }
    }

    return (<>
        <div className="service-add-container">
            <div className="service-add-title">DODAJ USŁUGĘ: {cat}/{subcat}</div>
            <form className="dodaj-usluge">
                <input name="service" type="text" className="editor-field-name margin-10-h" placeholder="usługa" required onChange={(e) => setService(e.target.value)} />
                <input name="price" type="text" className="editor-field-price margin-10-h" placeholder="cena" onChange={(e) => setPrice(e.target.value)} />
                <input name="unit" type="text" className="editor-field-unit margin-10-h" placeholder="jednostka" onChange={(e) => setUnit(e.target.value)} />
                <button className="service-btn margin-10-h" type="button" onClick={() => handleServiceSubmit()}>DODAJ</button>
                {error && <span>{error?.message}</span>}
            </form>
            </div>
    </>);
}
