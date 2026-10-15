import border from "./assets/borders/border_card_top_1.svg";
import image from "./assets/items/Shagafarian-lohtikhar.png"
import religion_icon from "./assets/icon/religion_icon.svg"

function ItemCard(){
    return(
        <div className="itemCard">
            <div className="itemCardTop">
                <div src={border} className="itemCardFrame"/>
                <div className="itemCardImage">
                    <img src={image}></img>
                </div>
                <div className="symbolIcon">
                    <div src={religion_icon} className="itemCardIcon"></div>
                </div> 
                    
            </div>
            <div className="itemCardBot">
                <div className="squareLeft"></div>
                <div className="itemCardName"><h2>LOHTIKHAR</h2></div>
                <div className="squareRight"></div>
            </div>
        </div>
    )
}
export default ItemCard