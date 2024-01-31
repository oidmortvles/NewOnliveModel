import React from 'react';
import { Navigate } from "react-router-dom";
import { getAutenticado } from '../services/AutenticationService';



function PrivateRoute({children}) {

  if (!getAutenticado()){
    return <Navigate to='/login'/>
  }

  return children
}

export default PrivateRoute