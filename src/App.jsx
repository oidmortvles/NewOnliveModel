import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrincipalScreen from "./screens/PrincipalScreen";
import GameScreen from "./screens/GameScreen";
import DashboardUser from "./screens/DashboardUser";

export function App(){

    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<PrincipalScreen/>}/>
                <Route path="/games/:id" element={<GameScreen/> }/>
                <Route path="/usermenu" element={<DashboardUser/>}/>
            </Routes>

            {/*
            OTRAS RUTAS

            <Route path="/" element={}/>
            <Route path="/" element={}/>
            <Route path="/" element={}/>

            */}
        
            
        </BrowserRouter>
    );
}