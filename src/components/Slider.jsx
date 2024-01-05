import React from 'react';
import { motion} from "framer-motion";
import './Slider.css'

const Slider = ({children, itemWidth}) => {

    const windowWidth = window.innerWidth; //ancho de la pantalla total
    const totalItems = React.Children.count(children); //cantidad de "childrens"
    const containerWidth = (itemWidth + 12) * totalItems; //ancho del container que recibe los elementos
    const itemsEnVista = windowWidth / (itemWidth + 24); // cantidad de items que se muestran en la pantalla por default
    
    
    /* console.log('Ancho de ventana',windowWidth );
    console.log('Cantidad de Children',totalItems );
    console.log('Ancho del item en Px',itemWidth);
    console.log('Ancho del container', containerWidth);
    console.log('items mostrados',itemsEnVista ); */
    

    const limitesBox = {
        left: -containerWidth + (itemWidth * itemsEnVista),
        right: 0,
    };

    
    return (
        <section className='sliderContainer'>
            
            <div className='slidePlace'>
                    <motion.div className='slidePasarela'                 
                        drag='x' 
                        dragElastic={.3}
                        dragMomentum={true}
                        dragConstraints={limitesBox}
                    >
                        <div className='slideGradienteInicio'></div>
                        <div className='slideItem'>{children}</div>
                        <div className='slideGradienteFin'></div>
                        
                    </motion.div>
            </div>            
            
        </section>
      )
};

export default Slider;
