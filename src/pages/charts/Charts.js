import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios"
import CoinLabel from "../../components/CoinLabel/CoinLabel"
import Loading from "../../components/loading/Loading"
import "./charts.css";

const Charts = () => {

  const [coinsArray,setCoinsArray] = useState([])
  const [status,setStatus] = useState(null)

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(result => {
      setCoinsArray(result.data)
      setStatus(result.status)
    })
  },[])

  return (
    <div className='charts'>
      
      {status === 200 ? <>
        <h2>Crypto Prices</h2>
        <div className="heading">
          <div className="heading-left">
            <h3>#</h3>
          </div>
          <div className="heading-right">
            <h3>24h%</h3>
            <h3>Price</h3>
          </div>
        </div>
        {coinsArray?.map((coin) => (<CoinLabel coin={coin}/>))}
      </> : <Loading/>}
    </div>
  )
}

export default Charts