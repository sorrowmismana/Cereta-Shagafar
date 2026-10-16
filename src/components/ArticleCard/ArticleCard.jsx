import image from "./assets/items/Shagafarian-lohtikhar.png"
import religion_icon from "./assets/icon/religion_icon.svg"
import "./ArticleCard.css"
function ArticleCard(){
    return(
        <div className="articleCard">
            <div className="image">
                <img src={image}/>
            </div>
            <div className="articleIcon">
                <div src={religion_icon} className="itemCardIcon">
                </div>
            </div>
            <div className="title">
                <div className="articleCategory"> item</div>
                <div className="articleTitle"> 
                    <h2>TITLE</h2>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard