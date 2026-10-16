import "./ArticleCard.css"
import { Link } from "react-router-dom";
import { CategoryIcon } from "../../data/CategoryIcon";


function ArticleCard({id, name, image, category}){
    const icon = CategoryIcon[category];
    const iconStyle = icon ? { "--icon": `url("${icon}")` } : {}; 
    
    return(
        <Link to={`/articles/${id}`} className="articleCard" style={iconStyle}>
            <div className="image">
                <img src={image}/>
            </div>
            <div className="articleIcon">
                <div className="articleCardIcon">
                </div>
            </div>
            <div className="title">
                <div className="articleCategory"> {category}</div>
                <div className="articleTitle"> 
                    <h3  style={{ "--len": name.length }}>{name}</h3>
                </div>
            </div>
        </Link>
    )
}

export default ArticleCard