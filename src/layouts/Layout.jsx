import NavBar from "../components/NavBar/NavBar";
import './Layout.css';
import { Outlet } from "react-router-dom"

function Layout(){
    return(
        <>
            <NavBar/>
            <main className="wrapper">
                <Outlet></Outlet>
            </main>
        </>
    );
}

export default Layout