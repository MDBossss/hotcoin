import React from 'react'
import { useEffect } from 'react';
import axios from "axios"
import "./charts.css";

const Charts = () => {

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(result => {
      console.log(result)
    })
  })


  return (
    <div>Charts</div>
  )
}

export default Charts