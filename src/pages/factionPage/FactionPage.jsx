import "./FactionPage.css"
import { factions } from "../../data/Faction";
import FactionCard from "../../components/FactionCard/FactionCard"

function FactionPage(){
    return(
        <div className="factionPage">
            <div className="factionPageTitle">
                <p>FACTIONS</p>
            </div>
            <div className="FactionGrid">
                {factions.map(faction => (
                <FactionCard key={faction.id} {...faction}/>
            ))}
            </div>
        </div>
    );
}

export default FactionPage