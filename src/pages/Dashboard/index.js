import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import HeaderAdmin from "../../components/HeaderAdmin";
import Footer from "../../components/Footer";
import Wiadomosci from "../../components/Wiadomosci";
import AktualnosciAdmin from "../../components/AktualnosciAdmin";
import api from "../../services/api";

import "./style.css";

export default function Dashboard() {
    const history = useHistory()
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [error, setError] = useState(null)

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    useEffect(() => {
        if (!token) {
            history.push('/login')
        }
    }, [token])

    return(
        <div className="page">
            <HeaderAdmin />
            <div className="mid">
            <div className="mid-container">
            <div className="dashboard-slot">
                <Wiadomosci />
            </div>
            <div className="dashboard-slot">
                <AktualnosciAdmin />
            </div>
            <div className="dashboard-slot">edytuj ofertę</div>
            </div>
            </div>
            <Footer />
        </div>
    );
}