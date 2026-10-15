import image from "./assets/items/Shagafarian-lohtikhar.png"

function ArticleCard(){
    return(
        <div className="articleCard">
            <div className="image">
                <img src={image}/>
            </div>
            <div className="articleIcon">a</div>
            <div className="title">a</div>
        </div>
    )
}

export default ArticleCard