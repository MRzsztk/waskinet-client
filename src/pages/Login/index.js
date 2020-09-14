import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from "../../services/api";

import HeaderLogin from "../../components/HeaderLogin";
import Footer from "../../components/Footer";

import './style.css'

export default function Login() {
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)


    const handleLogin = async () => {
        try {
            const { data } = await api.post("/login", {
                username, password
            });
            if (data?.hasOwnProperty('error')) {
                return setError(data.error)
            }
            localStorage.clear()
            localStorage.setItem('token', data?.token)
            history.push('/dashboard')
        } catch (error) {
            console.log(error)
        }
    }

    return (<>
    <div className="page">
        <HeaderLogin />
        <div className="mid">
        <div className="mid-container">
        <div className="login">
            <form className="login-form">
                <h3 className="margin-10-h">strefa administracyjna</h3>
                <input type="text" className="" placeholder="username" required onChange={(e) => setUsername(e.target.value)} />
                <input type="password" className="" placeholder="password" required onChange={(e) => setPassword(e.target.value)} />
                <button className="btn-login" type="button" onClick={() => handleLogin()}>ZALOGUJ</button>
                {error && <span>{error?.message}</span>}
            </form>
        </div>
        </div>
        </div>
        <Footer />
    </div>  
    </>);
}