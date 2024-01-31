import React from 'react';
import { Routes, Route } from "react-router-dom";
import PrincipalScreen from "../screens/PrincipalScreen";
import GameScreen from "../screens/GameScreen";
import DashboardUser from "../screens/DashboardUser";
import Error404 from '../screens/Error404';
import PrivateRoute from './PrivateRoute';

function RoutesList() {
  return (


    <Routes>
        <Route path="/" element={<PrincipalScreen/>}/>
        <Route path="/game/:id" element={<GameScreen/> }/>

        {/* <PrivateRoute path="/usermenu" element={<DashboardUser/>}/> */}
        
        <Route path='/usermenu' element={<DashboardUser/>}>
            <Route path="depositar" element={<h3>depositar</h3>}/>
            <Route path="retirar" element={<h3>retirar</h3>}/>
            <Route path="perfil" element={<h3>perfil</h3>}/>
            <Route path="apuestas" element={<h3>apuestas</h3>}/>
            <Route path="legales" element={<h3>legales</h3>}/>
            <Route path="favoritos" element={<h3>favoritos</h3>}/>
            <Route path="bonos" element={<h3>bonos</h3>}/>
            <Route path="historial" element={<h3>historial</h3>}/>
        </Route>


        {
        /* 
        <Route path="/" element={}/>
        <Route path="/" element={}/>
        <Route path="/" element={}/>
        <Route path="/" element={}/>
        <Route path="/" element={}/>
        <Route path="/" element={}/> 
        */
        }

        <Route path="*" element={<Error404/>}/>
    </Routes>

    

  )
}

export default RoutesList