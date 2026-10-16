import "./ExplorePage.css"
import { articles } from "../../data/Article";
import ArticleCard from "../../components/ArticleCard/ArticleCard"

function ExplorePage(){
    return(
        <div className="explorePage">
            <div className="pageTitle">
                <p>EXPLORE</p>
            </div>
            <div className="cardGrid">
                {articles.map(article => (
                    <ArticleCard key={article.id} {...article}/>
                ))}
            </div>
        </div>
    );
}

export default ExplorePage