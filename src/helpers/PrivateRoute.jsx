import React from 'react';
import { Navigate, Route } from "react-router-dom";


//Funcion que permita saber si el usuario esta autorizado o no
let auth;
auth = true;

function PrivateRoute({componente:Componente, ...props}) {
  return (
    <Route {...props}>
        {auth ? <Componente/>: <Navigate replace to="/45151"/>}        
    </Route>
  )
}

export default PrivateRoute