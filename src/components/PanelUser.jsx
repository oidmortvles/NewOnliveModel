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
            <UserPersonalDataCard username={'KingJofre'} nameUser={'Fabián'}/>
        

          {windowWidth<=850?(
          <Slider itemWidth={93}>
            <SoftToastRounded texto={'Depositar'} icon={<Depositar/>} enlace={"depositar"}/>
            <SoftToastRounded texto={'Retirar'} icon={<Retirar/>} enlace={"retirar"}/>
            <SoftToastRounded texto={'Mi perfil'} icon={<Perfil/>} enlace={"perfil"}/>
            <SoftToastRounded texto={'Apuestas'} icon={<Apuestas/>} enlace={"apuestas"}/>
            <SoftToastRounded texto={'Legales'} icon={<Legales/>} enlace={"legales"}/>
            <SoftToastRounded texto={'Logout'} icon={<CerrarSesion/>} enlace={"depositar"}/>
          </Slider>
          ):(
            <aside className='panelUserItemsMenu'>
                <SoftToastRounded texto={'Depositar'} icon={<Depositar/>} enlace={"depositar"}/>
                <SoftToastRounded texto={'Retirar'} icon={<Retirar/>} enlace={"retirar"}/>
                <SoftToastRounded texto={'Mi perfil'} icon={<Perfil/>} enlace={"perfil"}/>
                <SoftToastRounded texto={'Apuestas'} icon={<Apuestas/>} enlace={"apuestas"}/>
                <SoftToastRounded texto={'Legales'} icon={<Legales/>} enlace={"legales"}/>
                <SoftToastRounded texto={'Logout'} icon={<CerrarSesion/>} enlace={"depositar"}/>
            </aside>
          )}
      </header>   


    </section>
  )
}

export default PanelUser