import React, { useState, useForm } from 'react';
import { useHistory } from 'react-router-dom';
import api from "../../services/api";

import './style.css'

export default function Formularz() {
    const history = useHistory()
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')
    const [topic, setTopic] = useState('')
    const [error, setError] = useState(null)
    const [sent, setSent] = useState('')

    const handleMessageSubmit = async () => {
        if (!email) {
            return setSent('Podaj swój adres email, aby otrzymać odpowiedź.')
            } else if (!topic) {
            return setSent('Wpisz temat wiadomości.')
            } else if (!message) {
            return setSent('Wpisz treść wiadomości.')
            } 
        try {
            const { data } = await api.post("/messages", {
                message: message, topic: topic, email: email
            });
            setSent('Wiadomość została wysłana.')
            if (data?.hasOwnProperty('error')) {
                return setError(data.error)
            }
            history.push('/kontakt')
            setEmail('')
            setTopic('')
            setMessage('')

        } catch (error) {
            console.log(error)
        }
    }

    const handleClean = () => {
       return document.querySelectorAll('input').value='';
    }

    return (<>
        <div className="message-container">
            <p className="">Co chciałbyś wiedzieć?</p>
            <form onSubmit = {handleClean} className="message-editor margin-10-h">
                <input name="email" type="text" className="email-field margin-10-h" placeholder="twój adres e-mail" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <input name="topic" type="text" className="topic-field" placeholder="temat..." required value={topic} onChange={(e) => setTopic(e.target.value)} />
                <textarea name="message" wrap="soft" className="message-window margin-10-h" placeholder="..." required value={message} onChange={(e) => setMessage(e.target.value)} />
                <button className="margin-10-h" type="button" onClick={(e) => handleMessageSubmit()}>WYŚLIJ</button>
                {error && <span>{error?.message}</span>}
                {sent && <span>{sent}</span>}
            </form>
        </div>
    </>);
}