import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Napisz from "../Napisz";
import NewsyAdmin from "../NewsyAdmin";
import api from "../../services/api";

import './style.css'

export default function AktualnosciAdmin() {
    const history = useHistory()
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [error, setError] = useState(null)

    return (<>
        <div className="aa-container">
            <div className="dashboard-slot-half">
                <Napisz />
            </div>
            <div className="dashboard-slot-half">
                <NewsyAdmin />
            </div>
        </div>
    </>);
}