import React from 'react'
import {useState} from "react"
import {motion,AnimatePresence} from "framer-motion";
import "./coinLabel.css"
import PriceChange from '../PriceChange/PriceChange'

const CoinLabel = ({coin}) => {

    const [expandLabel,setExpandLabel] = useState(false)

    const labelVariants = {
        hidden:{
            opacity:0,
        },
        visible:{
            opacity:1,
        },
        exit:{
            opacity:0
        }
    }

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
        <AnimatePresence>
            {expandLabel && 
            <motion.div 
                className="extended-info"
                key="modal"
                variants={labelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                    <span>24h low: ${coin.low_24h}</span>
                    <span>24h high: ${coin.high_24h}</span>
                </motion.div>}
        </AnimatePresence>
    </div>
  )
}

export default CoinLabel