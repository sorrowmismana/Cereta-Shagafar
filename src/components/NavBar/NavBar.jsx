import emblem from "../../assets/icon/shagafar_emblem.svg";
import "./NavBar.css";

function NavBar(){
    return(
        <div className="nav">
            <div className="navLeft">
                <a>REGIONS</a>
                <a>ITEMS</a>
                <a>CHARACTERS</a>
            </div>
            <div className="icon">
                <img src={emblem}></img>
            </div>
            <div className="navRight">
                <a>SEARCH</a>
                <a>MAP</a>
                <a>COMMUNITY</a>
            </div>
                
            <div className="navBottom"></div>
        </div>
    );
}

export default NavBar