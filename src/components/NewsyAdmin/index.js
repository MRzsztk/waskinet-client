import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import './style.css';
import api from "../../services/api";

export default function NewsyAdmin() {
  const history = useHistory()
  const [error, setError] = useState('')
  const [newsy, setNewsy] = useState([])
  const [token, setToken] = useState(localStorage.getItem('token'))

const getList = async () => {
  setNewsy([{_id: '00000000', createdAt: '', title: 'pobieram...', content: ''}])
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
  getList()
}, [])

const deleteNews = async (newsId) => {
  try {
      const config = {
          headers: { Authorization: `Bearer ${token}` }
      };
      await api.delete(`/newsy/delete/${newsId}`, config);
      await getList()
  } catch (error) {
      console.log(error)
  }
}

    return (
      <>
      <div className="dashboard-slot-title">USUŃ</div>
 {newsy.map(news => (
            <div key={news._id} className="news-crud">
                <div className="smalltext"><i>{news.createdAt.split('T')[0]}</i></div>
                <div className=""><b>{news.title}</b></div>
                <div className="">
                  {news.content}
                </div>
                <div className="crud">
                <button name="usun" onClick={() => deleteNews(news._id)} className="news-crud-btn">usuń</button>
                </div>
                -----------------------------------
            </div>
        ))}
      </>
   
    );
  }