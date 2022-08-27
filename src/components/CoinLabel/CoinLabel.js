import React from 'react'
import {useState} from "react"
import "./coinLabel.css"
import PriceChange from '../PriceChange/PriceChange'

const CoinLabel = ({coin}) => {

    const [expandLabel,setExpandLabel] = useState(false)

 return (
    <div className="coin-label" onClick={() => setExpandLabel(!expandLabel)}>
        <div className="main-info">
            <div className="name">
                <span>{coin.market_cap_rank}</span>    
                <div><img src={coin.image} alt="coin" /></div>
                <span>{coin.name}</span>
            </div>
            <div className="prices">
                <PriceChange priceChange={coin.price_change_percentage_24h}/>
                <span>${coin.current_price}</span>
            </div>
        </div>
        {expandLabel && <div className="extended-info">
            <h2>hello</h2>
            </div>}
    </div>
  )
}

export default CoinLabel