import React from 'react';
import "./CategoryCard.css";
import { Link } from 'react-router-dom';

function CategoryCard({title, informacion, img, enlace}) {

    let imagen = `"${img}"`;

  return (

    <Link to={enlace} className='cmBody'>
        <header className='cmHeader'>
            <h3>{title}</h3>
            <p>{informacion}</p>
        </header>

        <img src={img} alt=""  className='cmImg'/>

    </Link>

  )
}

export default CategoryCard