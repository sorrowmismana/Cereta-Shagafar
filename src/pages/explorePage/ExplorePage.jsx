import "./ExplorePage.css"
import { articles } from "../../data/Article";
import ArticleCard from "../../components/ArticleCard/ArticleCard"
import FilterBar from "../../components/FilterBar/FilterBar"
import { filters } from "../../data/Filter";
import { useState } from "react";

function ExplorePage(){
    const [category, setCategory] = useState("All");
    const [sort, setSort] = useState("Newest");

    function handleSelect(filterId, option){
        if (filterId === "category"){
            setCategory(option);
        }
        if (filterId === "sort"){
            setSort(option);
        }
    }

    let shown = articles;

    if (category !== "All"){
        shown = shown.filter(function(a){
            return a.category.toLowerCase() === category.toLowerCase();
        });
    }

    if (sort === "A-Z"){
        shown = shown.slice().sort(function(a, b){
            return a.name.localeCompare(b.name);
        });
    }

    return(
        <div className="explorePage">
            <h1 className="explorePageTitle">EXPLORE</h1>

            <div className="filterGroup">
                {filters.map(function(f){
                    function onSelect(option){
                        handleSelect(f.id, option);
                    }

                    return(
                        <FilterBar
                            key={f.id}
                            label={f.label}
                            options={f.options}
                            onSelect={onSelect}
                        />
                    );
                })}
                {filters.map(function(f){
                    function onSelect(option){
                        handleSelect(f.id, option);
                    }

                    return(
                        <FilterBar
                            key={f.id}
                            label={f.label}
                            options={f.options}
                            onSelect={onSelect}
                        />
                    );
                })}
            </div>

            

            <div className="cardGrid">
                {shown.map(function(a){
                    return <ArticleCard key={a.id} {...a} />;
                })}
            </div>
        </div>
    );
}
export default ExplorePage