import React from 'react';
import './CategorySeccion.css';

function CategorySeccion({children}) {
  return (
    <section className='cardSeccion'>
        {children}
    </section>
  )
}

export default CategorySeccion