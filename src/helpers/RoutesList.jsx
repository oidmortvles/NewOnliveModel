import React, {lazy} from 'react';
import { Routes, Route } from "react-router-dom";
import PrincipalScreen from "../screens/PrincipalScreen";
import GameScreen from "../screens/GameScreen";
import Error404 from '../screens/Error404';
import PrivateRoute from './PrivateRoute';
import Loader from '../components/Loader';
import ErrorList from '../components/ErrorList';

const Register = lazy(()=> import('../screens/Register'));
const Login = lazy(()=> import('../screens/Login'));
const DashboardUser = lazy(()=> import('../screens/DashboardUser'));
const Depositar = lazy(()=> import('../screens/depositarGroup/Depositar'));



function RoutesList() {


  return (
    <>
    {/* //Componente que muestras los errores */}
    <ErrorList/>

    <Routes>        


        {/* //1 */}
        <Route path='/' element={<PrincipalScreen/>}/>
        
        

        {/* //2 */}
        <Route path='/game/:id' element={<GameScreen/>}/>
        


        {/* //3 */}
        <Route path='/login' element={
              <React.Suspense fallback={<Loader/>}>
                  <Login/>
              </React.Suspense>
        }/>
        


        {/* //4 */}
        <Route path='/register' element={
            <React.Suspense fallback={<Loader/>}>
                <Register/>
            </React.Suspense>
        }/>



        {/* //5 */}
        {/*------RUTA PRIVADA Y ANIDADA------*/}
        <Route path='/usermenu' element={<PrivateRoute><DashboardUser/></PrivateRoute>}>        
            <Route path="depositar" element={<Depositar/>}/>
            <Route path="retirar" element={<h3>retirar</h3>}/>
            <Route path="perfil" element={<h3>perfil</h3>}/>
            <Route path="apuestas" element={<h3>apuestas</h3>}/>
            <Route path="legales" element={<h3>legales</h3>}/>
            <Route path="favoritos" element={<h3>favoritos</h3>}/>
            <Route path="bonos" element={<h3>bonos</h3>}/>
            <Route path="historial" element={<h3>historial</h3>}/>
        </Route> 
        {/*------RUTA PRIVADA Y ANIDADA------*/}



        {/* //6 */}
        <Route path="*" element={<Error404/>}/>



    </Routes>
    
    </>
  )
}


        {/* 
        --------MODELOS DE RUTAS----------


        <Route path="/" element={}/> 


        <Route path='' element={
              <React.Suspense fallback={<Loader/>}>
                  
              </React.Suspense>
        }/>  
      

        --------MODELOS DE RUTAS----------
        */}
        

export default RoutesList



