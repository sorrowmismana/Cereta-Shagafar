import mainBorder from "./assets/borders/shagafar_border_1.svg";
import descBorder from "./assets/borders/shagafar_border_2.svg";
import lohtikhar from "./assets/items/Shagafarian-lohtikhar.png";
import mainMask1 from "./assets/borders/border_mask_1.1.svg";;
import quoteBorder from "./assets/borders/shagafar_border_3_quote.svg";
import "./ItemHero.css";


function ItemHero(){
    return(
        <div className="itemHero">
            <div className="itemImage">
                <img src={lohtikhar}></img>
            </div>    
            <img src={mainBorder} className="itemHeroBorder"/>

            <div className="itemHeroDesc">
                <img src={descBorder}/>
                <div className="itemHeroDescQuoteDiv">
                    <img src={quoteBorder}/>
                    
                </div>
                <div className="itemHeroDescTitle">
                    <h1>LOHTIKHAR</h1>
                </div>
            </div>
        </div>
    );
}
export default ItemHero