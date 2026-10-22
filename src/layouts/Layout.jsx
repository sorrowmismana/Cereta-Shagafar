import NavBar from "../components/NavBar/NavBar";
import './Layout.css';
import { Outlet } from "react-router-dom"

function Layout(){
    return(
        <>  
            <div className="hexBG"></div>
            <NavBar/>
            <main className="wrapper">
                <Outlet></Outlet>
            </main>
        </>
    );
}

export default Layout