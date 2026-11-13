import emblem from "../../assets/icon/shagafar_emblem.svg";
import "./NavBar.css";
import { navLink } from "../../data/NavLinks";
import { NavLink } from "react-router-dom";
import { TransitionLink } from "../Transition/Transition"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


function NavBar(){

    const location = useLocation()

    const[menuOpen, setMenuOpen] = useState(false);

    function toggleMenu(){
        setMenuOpen(!menuOpen);
        console.log("1")
    }

    useEffect(function(){
        setMenuOpen(false);
        console.log("2")
    }, [location.pathname]);
    
    const left = navLink.filter(i => i.side === "left");
    const right = navLink.filter(i =>i.side === "right");
    return(
        <div className={"nav " + (menuOpen ? "menuOpen" : "")}>
            <div className="navLeft">
                {left.map(i=> (<TransitionLink key={i.to} to={i.to}>{i.label}</TransitionLink>))}
            </div>
            <div className="icon" onClick={toggleMenu}>
                    <img src={emblem}></img>
            </div>
            <div className="navRight">
                {right.map(i =>(<TransitionLink key={i.to} to={i.to}>{i.label}</TransitionLink>))}
            </div>
            <div className={`dropdownNav ${menuOpen ? "open": ""}`}>
                <div className="dropDownNavWrapper">
                    <div className="dropDownNavSearchDiv"></div>
                    <div className="dropDownNavBar"></div>
                    <div className="dropDownNavSearchWrapper"></div>
                    <div className="dropDownNavOption">
                        {navLink.map(navLink => (<TransitionLink key={navLink.to} to={navLink.to}>{navLink.label}</TransitionLink>))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar