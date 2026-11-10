import "./LandingHero.css";
import image from "../../assets/location/rib_hall.png"
import arch from "../../assets/borders/palmArch.svg"
import archMobile from "../../assets/borders/palmArchMobile.svg"



function LandingHero(){
    return(
        <div className="landingHeroDiv">
            <picture>
                <source media="(max-width: 768px)" srcSet={archMobile}/>
                <img className="landingHeroDivArch" src={arch}></img>
            </picture>
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