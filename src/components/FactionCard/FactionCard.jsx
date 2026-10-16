import "./FactionCard.css";
import { Link } from "react-router-dom";
import { CategoryIcon } from "../../data/CategoryIcon";

function FactionCard({ id, name, image, category }){
    const icon = CategoryIcon[category];
    const iconStyle = icon ? { "--icon": `url("${icon}")` } : {};
    return(
        <Link to={`/factions/${id}`} className="itemCard" style={iconStyle}>
            <div className="itemCardTop">
                <div className="itemCardFrame"></div>
                <div className="itemCardImage">
                    <img src={image} alt={name} />
                </div>
                <div className="symbolIcon">
                    <div className="itemCardIcon"></div>
                </div>
            </div>
            <div className="itemCardBot">
                <div className="squareLeft"></div>
                <div className="itemCardName"><h2>{name}</h2></div>
                <div className="squareRight"></div>
            </div>
        </Link>
    )
}
export default FactionCard