import React from 'react';
import { Routes, Route } from "react-router-dom";
import PrincipalScreen from "../screens/PrincipalScreen";
import GameScreen from "../screens/GameScreen";
import DashboardUser from "../screens/DashboardUser";
import Error404 from '../screens/Error404';

function RoutesList() {
  return (


    <Routes>
        <Route path="/" element={<PrincipalScreen/>}/>
        <Route path="/game/:id" element={<GameScreen/> }/>
        <Route path="/usermenu" element={<DashboardUser/>}/>
        

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