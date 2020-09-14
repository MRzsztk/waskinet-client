import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {getNewsy} from "../Newsy";

import './style.css';
import api from "../../services/api";

export default function NewsyAdmin() {
  const history = useHistory()
  const [error, setError] = useState('')
  const [newsy, setNewsy] = useState([])

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

    return (
      <>
      <div className="dashboard-slot-title">EDYTUJ/USUŃ</div>
 {newsy.map(news => (
            <div key={news._id} className="news-crud">
                <div className="smalltext"><i>{news.createdAt.split('T')[0]}</i></div>
                <div className=""><b>{news.title}</b></div>
                <div className="">
                  {news.content}
                </div>
                <div className="crud">
                <button name="edytuj" className="news-crud-btn">edytuj</button>
                <button name="edytuj" className="news-crud-btn">usuń</button>
                </div>
                ------------------------------------------------
            </div>
        ))}
      </>
   
    );
  }

  //onClick={}