import mainBorder from "../../assets/borders/shagafar_border_1.svg";
import descBorder from "../../assets/borders/shagafar_border_2.svg";
import quoteBorder from "../../assets/borders/shagafar_border_3_quote.svg";
import "./ItemHero.css";


function ItemHero({id, name, image, category}){
    return(
        <div className="itemHeroLink">
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
                        <h1>{name}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ItemHero