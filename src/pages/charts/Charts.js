import React from 'react'
import { useEffect } from 'react';
import "./charts.css";

const Charts = () => {

  const axios = require('axios');

  axios.get('https://api.binance.com/api/v3/exchangeInfo').then((response) => {
    console.log(response.data)
  });


  return (
    <div>Charts</div>
  )
}

export default Charts