import "./ItemInfo.css";


function ItemInfo({id, name, image, category}){
    return(
        <div className="itemInfoWrapper">
            <div className="itemInfoDivDiamond"></div>
            <div className="itemInfoBorder"></div>
            <div className="itemInfoDiv"></div>
        </div>
    );
}
export default ItemInfo