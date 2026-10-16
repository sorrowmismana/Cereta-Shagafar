import mainBorder from "../../assets/borders/shagafar_border_1.svg";
import descBorder from "../../assets/borders/shagafar_border_2.svg";
import mainMask1 from "../../assets/borders/border_mask_1.1.svg";;
import quoteBorder from "../../assets/borders/shagafar_border_3_quote.svg";
import "./ItemHero.css";
import { Link } from "react-router-dom"


function ItemHero({id, title, image, quote, summary}){
    return(
        <Link to={`items/${id}`} className="itemHeroLink">
            <div className="itemHero">
                <div className="itemImage">
                    <img src={image}></img>
                </div>    
                <img src={mainBorder} className="itemHeroBorder"/>

                <div className="itemHeroDesc">
                    <img src={descBorder}/>
                    <div className="itemHeroDescQuoteDiv">
                        <img src={quoteBorder}/>
                        
                    </div>
                    <div className="itemHeroDescTitle">
                        <h1>{title}</h1>
                    </div>
                </div>
            </div>
        </Link>
    );
}
export default ItemHero