import React from 'react'
import './PanelUser.css';
import Slider from './Slider.jsx';
import UserPersonalDataCard from './UserPersonalDataCard.jsx';
import SoftToastRounded from './SoftToastRounded.jsx';
import Depositar from '../assets/Depositar.jsx';
import Retirar from '../assets/Retirar.jsx';
import Perfil from '../assets/Perfil.jsx';
import Apuestas from '../assets/Apuestas.jsx';
import Legales from '../assets/Legales.jsx';
import CerrarSesion from '../assets/CerrarSesion.jsx';


function PanelUser() {
    const windowWidth = window.innerWidth;

  return (
    <section className='panelUser'>

      <header className='panelUserHeader'>
            <UserPersonalDataCard username={'KingJofre'} nameUser={'Fabian'}/>
        

          {windowWidth<=880?(
          <Slider itemWidth={96}>
            <SoftToastRounded texto={'Depositar'} icon={<Depositar/>}/>
            <SoftToastRounded texto={'Retirar'} icon={<Retirar/>}/>
            <SoftToastRounded texto={'Mi perfil'} icon={<Perfil/>}/>
            <SoftToastRounded texto={'Apuestas'} icon={<Apuestas/>}/>
            <SoftToastRounded texto={'Legales'} icon={<Legales/>}/>
            <SoftToastRounded texto={'Logout'} icon={<CerrarSesion/>}/>
          </Slider>
          ):(
            <aside className='panelUserItemsMenu'>
                <SoftToastRounded texto={'Depositar'} icon={<Depositar/>}/>
                <SoftToastRounded texto={'Retirar'} icon={<Retirar/>}/>
                <SoftToastRounded texto={'Mi perfil'} icon={<Perfil/>}/>
                <SoftToastRounded texto={'Apuestas'} icon={<Apuestas/>}/>
                <SoftToastRounded texto={'Legales'} icon={<Legales/>}/>
                <SoftToastRounded texto={'Logout'} icon={<CerrarSesion/>}/>
            </aside>
          )}
      </header>   


    </section>
  )
}

export default PanelUser