import React from 'react'
import {IoMdArrowDropdown, IoMdArrowDropup} from "react-icons/io"
import "./priceChange.scss"

const PriceChange = ({priceChange}) => {

  return (
    <>
        {priceChange > 0 ? <div className='change positive'>
            <IoMdArrowDropup/>
            <span>{priceChange.toFixed(2)}%</span>
        </div> : 
        <div className='change negative'>
            <IoMdArrowDropdown/>
            <span>{priceChange.toFixed(2)}%</span>
        </div>}
    </>
  )
}

export default PriceChange