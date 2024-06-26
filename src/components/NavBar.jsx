import React from 'react';
import './NavBar.css'
import ButtonGradient from './ButtonGradient';
import SearchLens from './SearchLens';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='navBar'>

       <div className="nbLongScreen">
            {/* NavBar para pantallas > 850px */}

            <div className='nbLogo'>
            </div>
    
            <div className="nbSectionStatus">  
                <SearchLens/>
                <div className="nbUserBalance">
                    <p className='nbUserBalanceText'>Saldo</p>
                    <h3 className='nbUserBalanceMoney'>$00,00</h3>
                </div>

                <ButtonGradient data={"Depositar"} to={"/usermenu/depositar"}/>    
    
                <Link to={'/usermenu/depositar'} className="nbUserAccess">
                    <img src="https://miro.medium.com/v2/resize:fit:1200/1*Fb0XBbV8Z8W7UUHuq69CFA.jpeg" alt="User Profile" />
                </Link>
            </div>


       </div>
       
       
        <div className="nbShortScreen">
            {/* NavBar para pantallas < 850px */}
            
            <div className='nbLogo'>
            </div>

            <div className="nbSectionStatus">  
                <div className="nbUserBalance">
                    <p className='nbUserBalanceText'>Saldo</p>
                    <h3 className='nbUserBalanceMoney'>$00,00</h3>
                </div>

                <ButtonGradient data={"Depositar"}/>    
    
                <Link to={'usermenu'} className="nbUserAccess">
                    <img src="https://miro.medium.com/v2/resize:fit:1200/1*Fb0XBbV8Z8W7UUHuq69CFA.jpeg" alt="User Profile" />
                </Link>
            </div>

            <SearchLens/>

        </div>
        
        
    </nav>
  )
}

export default NavBar