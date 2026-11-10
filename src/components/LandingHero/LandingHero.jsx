import "./LandingHero.css";
import image from "../../assets/location/rib_hall.png"
import arch from "../../assets/borders/palmArch.svg"

function LandingHero(){
    return(
        <div className="landingHeroDiv">
            <img className="landingHeroDivArch" src={arch}></img>
            <img className="landingHeroDivImg"src={image}></img>
            <div className="landingHeroDivTitle">
                SHAGAFAR
            </div>
            <div className="landingHeroDivSub">
                INDUSTRY | UNITY | MILITARY
            </div>
        </div>
    );
}

export default LandingHero;