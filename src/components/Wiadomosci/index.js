import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import './style.css';
import api from "../../services/api";

export default function Messages() {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [error, setError] = useState('')
  const [messages, setMessages] = useState([])

const getMessages = async () => {
  setMessages([{_id: '00000000', email: "pobieram wiadomości...", message: "może to zajać kilka sekund.", createdAt: ""}])
  try {
      const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
      const { data } = await api.get("/messages", config );
      if (data?.hasOwnProperty('error')) {
          return setError(data.error)
      }
      setMessages(data)
  } catch (error) {
      console.log(error)
  }
}

const deleteMessage = async (messageId) => {
  try {
      const config = {
          headers: { Authorization: `Bearer ${token}` }
      };
      await api.delete(`/messages/delete/${messageId}`, config);
      await getMessages()
  } catch (error) {
      console.log(error)
  }
}

useEffect(() => {
  getMessages()
}, [])

return (<>
    <div className="messages">
      <div className="dashboard-slot-title">WIADOMOŚCI</div>
      <div className="m-container">
        {messages && messages.map(message => (
            <div key={message._id} className="message-container">
            <div className="message-body">
                <div className="nadawca">od: <b>{message.email}</b></div>
                <div className="temat">temat: <b>{message.topic}</b></div>
                <div className="message-content">
                {message.message}
                <div className="smalltext"><i>otrzymano: {message.createdAt}</i></div>
                </div>
                </div>
                <div>
                <button className="usun-wiadomosc" onClick={() => deleteMessage(message._id)} >usuń</button>
                </div>
            </div>
        ))}
      </div>
      </div>
</>);
  }