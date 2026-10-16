import emblem from "../../assets/icon/shagafar_emblem.svg";
import "./NavBar.css";
import { navLink } from "../../data/NavLinks";
import { Link } from "react-router-dom";

function NavBar(){
    const left = navLink.filter(i => i.side === "left");
    const right = navLink.filter(i =>i.side === "right");
    return(
        <div className="nav">
            <div className="navLeft">
                {left.map(i=> (<Link key={i.to} to={i.to}>{i.label}</Link>))}
            </div>
            <div className="icon">
                <img src={emblem}></img>
            </div>
            <div className="navRight">
                {right.map(i =>(<Link key={i.to} to={i.to}>{i.label}</Link>))}
            </div>
                
            <div className="navBottom"></div>
        </div>
    );
}

export default NavBar