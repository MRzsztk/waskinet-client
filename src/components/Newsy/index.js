import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import './style.css';
import api from "../../services/api";

export default function Newsy() {
  const history = useHistory()
  const [error, setError] = useState('')
  const [newsy, setNewsy] = useState([])

const getNewsy = async () => {
  setNewsy([{_id: '00000000', createdAt: '', title: 'fetching news...', content: 'this might take a few seconds. If it takes longer than that, click the link again, maybe it fell asleep.'}])
  try {
      const { data } = await api.get("/newsy");
      if (data?.hasOwnProperty('error')) {
          return setError(data.error)
      }
      setNewsy(data)
  } catch (error) {
      console.log(error)
  }
}

useEffect(() => {
  getNewsy()
}, [])

    return (
      <div className="newsy">
      <div className="newsy-container">
      {newsy.map(news => (
            <div key={news._id} className="news-container">
                <i className="news-date smalltext">{news.createdAt.split('T')[0]}</i>
                <h2 className="news-title margin-10-h">{news.title}</h2>
                <div className="news-content margin-5">
                <p className="margin-5">{news.content}</p>
                </div>
                <hr />
            </div>
        ))}
      </div>
      </div>
    );
  }