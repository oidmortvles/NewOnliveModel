import React from 'react';
import './LoaderItem.css';
import coinBag from "../assets/coinBag.gif"

function LoaderItem({msj}) {
  return (
    <div className='loaderItem'>
        <h3>{msj}</h3>
        <img src={coinBag} alt="loading..." />
    </div>
  )
}

export default LoaderItem