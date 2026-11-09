import NavBar from "../components/NavBar/NavBar";
import './LayoutHome.css';
import { Outlet } from "react-router-dom"

function LayoutHome(){
    return(
        <>  
            <div className="hexBG"></div>
            <NavBar/>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    );
}

export default LayoutHome