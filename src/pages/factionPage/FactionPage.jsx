import "./FactionPage.css"
import { factions } from "../../data/Faction";
import FactionCard from "../../components/FactionCard/FactionCard"

function FactionPage(){
    return(
        <div className="factionPage">
            {factions.map(faction => (
                <FactionCard key={faction.id} {...faction}/>
            ))}
        </div>
    );
}

export default FactionPage