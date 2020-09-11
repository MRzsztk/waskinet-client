import React, { useState } from 'react';
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
        try {
            const { data } = await api.post("/messages", {
                message: message, topic: topic, email: email
            });
            setSent('Wiadomość została wysłana.')
            if (data?.hasOwnProperty('error')) {
                return setError(data.error)
            }
            history.push('/kontakt')

        } catch (error) {
            console.log(error)
        }
    }

    return (<>
        <div className="message-container">
            <p className="">Co chciałbyś wiedzieć?</p>
            <form className="message-editor margin-10-h">
                <input name="email" type="text" className="email-field margin-10-h" placeholder="twój adres e-mail" required={true} onChange={(e) => setEmail(e.target.value)} />
                <input name="topic" type="text" className="topic-field" placeholder="temat..." required={true} onChange={(e) => setTopic(e.target.value)} />
                <textarea name="message" wrap="soft" className="message-window margin-10-h" placeholder="wiadomość..." required={true} onChange={(e) => setMessage(e.target.value)} />
                <button className="margin-10-h" type="button" onClick={() => handleMessageSubmit()}>WYŚLIJ</button>
                {error && <span>{error?.message}</span>}
                {sent && <span>{sent}</span>}
            </form>
        </div>
    </>);
}