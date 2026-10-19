import "./ArticleCard.css"
import { Link } from "react-router-dom";
import { CategoryIcon } from "../../data/CategoryIcon";
import { useLayoutEffect, useRef } from "react";

function useFitText(deps){
    const ref = useRef(null);

    useLayoutEffect(function(){
        const el = ref.current;
        if (!el) return;

        function fit(){
            el.style.fontSize = "";                      // back to the CSS maximum
            let size = parseFloat(getComputedStyle(el).fontSize);
            const min = size * 0.3;                      // floor: never below 30%

            while (el.scrollHeight > el.clientHeight && size > min){
                size -= 0.5;
                el.style.fontSize = size + "px";
            }
        }

        fit();
        if (document.fonts){
            document.fonts.ready.then(fit);              // refit once Inter has loaded
        }

        const ro = new ResizeObserver(fit);
        ro.observe(el);
        return function(){
            ro.disconnect();
        };
    }, deps);

    return ref;
}

function ArticleCard({id, name, image, category}){
    const icon = CategoryIcon[category];
    const iconStyle = icon ? { "--icon": `url("${icon}")` } : {}; 
    const titleRef = useFitText([name])
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
                <div ref={titleRef} className="articleTitle"> 
                    <h3>{name}</h3>
                </div>
            </div>
        </Link>
    )
}

export default ArticleCard