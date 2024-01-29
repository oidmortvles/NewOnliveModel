import { BrowserRouter} from "react-router-dom";
import RoutesList from "./helpers/RoutesList";

export function App(){

    return (
        <BrowserRouter>

            <RoutesList/>
            
        </BrowserRouter>
    );
}