import "./ExplorePage.css"
import { articles } from "../../data/Article";
import ArticleCard from "../../components/ArticleCard/ArticleCard"

function ExplorePage(){
    return(
        <div className="ArticlePage">
            {articles.map(article => (
                <ArticleCard key={article.id} {...article}/>
            ))}
        </div>
    );
}

export default ExplorePage