import "./ItemPage.css"
import { articles } from "../../data/Article";
import { useParams } from "react-router-dom";
import ItemHero from "../../components/ItemHero/ItemHero";

function ItemPage(){
    const {id} = useParams();
    const article = articles.find(function(a){
        return a.id === id;
    });

    return(
        <div className="itemPage">
            <ItemHero {...article}/>
        </div>
    );
}
export default ItemPage