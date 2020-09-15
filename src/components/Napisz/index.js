import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from "../../services/api";

import './style.css'

export default function Napisz() {
    const history = useHistory()
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [title, setTitle] = useState('')
    const [post, setPost] = useState('')
    const [error, setError] = useState(null)

    const handlePostSubmit = async () => {
        try {
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            const { data } = await api.post("/newsy/create", {
                title: title, content: post
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
        <div className="editor-container">
            <div className="dashboard-slot-title">NAPISZ</div>
            <form className="post-editor">
                <input type="text" className="editor-field margin-10-h" placeholder="nagłówek..." required onChange={(e) => setTitle(e.target.value)} />
                <textarea name="message" wrap="soft" className="message-window" placeholder="treść..." required onChange={(e) => setPost(e.target.value)} />
                <button className="publish-btn margin-10-h" type="button" onClick={() => handlePostSubmit()}>OPUBLIKUJ</button>
                {error && <span>{error?.message}</span>}
            </form>
        </div>
    </>);
}
