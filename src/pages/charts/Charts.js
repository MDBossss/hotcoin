import React from 'react'
import { useState,useEffect } from 'react';
import axios from "axios"
import "./charts.css";

const Charts = () => {

  const [data,setData] = useState([])

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(result => {
      setData(result.data)
    })
  },[])

  console.log(data)


  return (
    <>
      <h2>Crypto Prices</h2>
    </>
  )
}

export default Charts