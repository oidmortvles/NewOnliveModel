import React, { useState } from 'react';
import "./Carrousel.css"
import { motion } from 'framer-motion';
import ButtonGradient from './ButtonGradient';
import ButtonAditional from './ButtonAditional';

function Carrousel({imagenes}) {

    const [index,setIndex] = useState(0);

    const nextSliderImg = ()=>{
        if(index === imagenes.length -1){
            setIndex(0);
            return
        }
        setIndex(index + 1)
    }

    const prevSliderImg = ()=>{
        if(index === 0){
            setIndex(imagenes.length - 1);
            return
        }
        setIndex(index - 1)
    }

    //Objeto que guarda las animationes de traspaso entre cada Imagen
    const variants ={
        initial:{
            x:50,
            opacity:0
        },

        animate:{
            x:0,
            opacity:1
        },
        
        exit:{
            x:-50,
            opacity:0
        }
    }


  return (
    <>
    <motion.div className="carrouselContainer">
        <motion.section className='carrouselSection'>
            <motion.img src={imagenes[index].img} alt=""  key={imagenes[index].img}             
                variants={variants}
                animate='animate'
                initial='initial'
                exit='exit'
                drag='x'
            />
            
             <aside className='btnCarrousel'>

                <button className='btnPrevAndNext' onClick={prevSliderImg}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
                     </svg>
                </button>


                <button className='btnPrevAndNext' onClick={nextSliderImg}> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                    </svg>
                </button>

             </aside>

            <aside className='infoCarrousel'>
                <h3>{imagenes[index].title}</h3>
                <p>{imagenes[index].description}</p>
                <div>
                    <ButtonGradient>JUGAR DEMO</ButtonGradient>
                    <ButtonAditional data={'+INFO'} colorSet={'White'}></ButtonAditional>
                </div>
            </aside>
        </motion.section>
    </motion.div>
    </>
  )
}

export default Carrousel
