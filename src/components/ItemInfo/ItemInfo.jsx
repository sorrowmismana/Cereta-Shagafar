
import "./ItemInfo.css";
import { useState } from "react";

function ItemInfo({item}) {

    const categories = [
        {key:"descriptionPage", name:"Description"},
        {key:"geographyPage", name:"Geography"},
        {key:"culturalImpactPage", name:"Cultural Impact"}
    ];

    const availableCategories = categories.filter(function(category) {
        return item[category.key];
    });

    const [activeCategory, setActiveCategory] = useState(
        availableCategories[0]?.key
    );

    return (
        <div className="itemInfoWrapper">

            <div className={`itemInfoDivDiamondWrapper ${
                availableCategories.length === 1 ? "single" : "multiple"
            }`}>

                {availableCategories.map(function(category) {
                    return (
                        <button
                            type="button"
                            className={`itemInfoDivDiamond ${
                                activeCategory === category.key ? "active" : ""
                            }`}
                            key={category.key}
                            aria-label={category.name}
                            title={category.name}
                            aria-pressed={activeCategory === category.key}
                            onClick={function() {
                                setActiveCategory(category.key);
                            }}
                        />
                    );
                })}

            </div>

            <div className="itemInfoBorder"></div>

            <div className="itemInfoDiv">
                {activeCategory && (
                    <div className="itemInfoDescWrapper">

                        {/* <h2>
                            {categories.find(function(category) {
                                return category.key === activeCategory;
                            })?.name}
                        </h2> */}

                        {Object.entries(item[activeCategory]).map(
                            function([key, value]) {
                                return (
                                    <div className="itemInfoDesc" key={key}>
                                        <h3 className="itemInfoDescTitle">
                                            {key}
                                        </h3>

                                        <p className="itemInfoDescDesc">
                                            {Array.isArray(value)
                                                ? value.join(", ")
                                                : value}
                                        </p>
                                    </div>
                                );
                            }
                        )}

                    </div>
                )}
            </div>

        </div>
    );
}

export default ItemInfo;
