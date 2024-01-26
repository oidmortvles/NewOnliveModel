import React from 'react';
import './DashboardUser.css';
import PanelUser from '../components/PanelUser.jsx';
import Footer from '../components/Footer.jsx';

function DashboardUser() {

  return (
    <>
      <main className='dashboardUser'>
          <PanelUser/>

          <section className='dashboardSection'>        
          </section>

      </main>

      <Footer/>
    </>
  )
}

export default DashboardUser