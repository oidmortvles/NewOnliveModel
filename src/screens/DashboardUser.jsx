import React, {lazy} from 'react';
import './DashboardUser.css';
import PanelUser from '../components/PanelUser.jsx';
import Footer from '../components/Footer.jsx';
import { Outlet } from 'react-router-dom';
import NavSimple from '../components/NavSimple.jsx';


/* const PanelUser = lazy(()=> import('../components/PanelUser.jsx')) */

function DashboardUser() {

  return (
      <>
          <NavSimple/>
          <main className='dashboardUser'>
          <PanelUser/>

          <section className='dashboardSection'> 
            <Outlet/>      
          </section>

          </main>

          <Footer/>
      </>
  )
}

export default DashboardUser