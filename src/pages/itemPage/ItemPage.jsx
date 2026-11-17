import "./ItemPage.css"
import { articles } from "../../data/Article";
import { useParams } from "react-router-dom";
import ItemHero from "../../components/ItemHero/ItemHero";
import ItemInfo from "../../components/ItemInfo/ItemInfo";

function ItemPage(){

    const categories = [
        {key:"descriptionPage", name:"Description"},
        {key:"geographyPage", name:"Geography"},
        {key:"culturalImpactPage", name:"Cultural Impact"}
    ];

    const availableCategories = categories.filter(function(category) {
        console.log(articles[category.key])
        return articles[category.key];
    });
    
    const {id} = useParams();
    const article = articles.find(function(a){
        return a.id === id;
    });

    if (!article){
        return <div> article not found</div>
    }

    return(
        <div className="itemPage">
            <ItemHero {...article}/>
            {availableCategories.length > 0 && (
                <ItemInfo item={article}></ItemInfo>
            )}
        </div>
    );
}
export default ItemPage