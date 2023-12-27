import React from 'react'
import "./CategoryCard.css"

function CategoryCard({title, informacion, img}) {

    let imagen = `"${img}"`;

  return (

    <article className='cmBody'>
        <header className='cmHeader'>
            <h3>{title}</h3>
            <p>{informacion}</p>
        </header>

        <img src={img} alt=""  className='cmImg'/>

    </article>

  )
}

export default CategoryCard