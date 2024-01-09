import React from 'react';
import './DashboardUser.css';
import Slider from './Slider';
import UserPersonalDataCard from './UserPersonalDataCard'

function DashboardUser() {
  return (
    <section className='dashboardUser'>

        <header className='dshHeader'>
            <UserPersonalDataCard username={'KingJofre'}/>
        </header>
        
    </section>
  )
}

export default DashboardUser