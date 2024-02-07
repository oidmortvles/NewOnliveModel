import React from 'react';
import "./Loader.css";
import coinBag from "../assets/coinBag.gif"

function Loader() {
  return (
    <aside className='loaderContent'>
        
        <img src={coinBag} alt="loading..." />
        <h3>Cargando</h3>
    </aside>
  )
}

export default Loader