import React, { Suspense } from 'react';
import { Navigate } from "react-router-dom";
import { getAutenticado } from '../services/AutenticationService';
import Loader from '../components/Loader';

function PrivateRoute({children}) {

  //Si el usuario NO esta autenticado, se lo envia al Login
  if (!getAutenticado()){
    return <Navigate to='/login'/>
  }

  return (
    <Suspense fallback={<Loader/>}>
      {children}
    </Suspense>
  );
}

export default PrivateRoute