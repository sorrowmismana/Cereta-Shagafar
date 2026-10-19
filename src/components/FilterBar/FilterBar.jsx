import "./FilterBar.css";
import { useRef, useState, useEffect } from "react";
import { CategoryIcon } from "../../data/CategoryIcon";

function FilterBar({ label, options, onSelect }){
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(label);
    const [hovered, setHovered] = useState(null);

    const filterRef = useRef(null)

    useEffect(function(){
        if (!open) return;

        function handleOutside(event){
            if (filterRef.current && !filterRef.current.contains(event.target)){
                setOpen(false);
                setHovered(null);
            }
        }

        function handleKey(event){
            if (event.key === "Escape"){
                setOpen(false);
                setHovered(null);
            }
        }

        document.addEventListener("pointerdown", handleOutside);
        document.addEventListener("keydown", handleKey);

        return function(){
            document.removeEventListener("pointerdown", handleOutside);
            document.removeEventListener("keydown", handleKey);
        };
    }, [open]);

    function toggle(){
        setOpen(!open);
    }

    function pick(option){
        setSelected(option);
        setOpen(false);
        if (onSelect){
            onSelect(option);
        }
    }

    const shownKey = hovered || selected;
    const icon = CategoryIcon[shownKey] ;

    return(
        <div
            ref={filterRef}
            className={"filterBar " + (open ? "open" : "")}
            style={{ "--count": options.length }}
        >
            <div className="filterBadge" onClick={toggle}>
                <div className="filterIcon">
                    <div key={shownKey} className="filterGlyph" style={{ "--icon": `url("${icon}")`}}></div>
                </div>
                <div className="badgeV"></div>
            </div>

            <div className="filterTitle">
                <div className="filterTitleLabel" onClick={toggle}>
                    {selected}
                </div>
                <div className="filterArrows"></div>
            </div>
            <div className="filterList">
                <div className="filterListInner">
                    {options.map(function(option, i){
                        function handleClick(){
                            pick(option);
                        }
                        function handleEnter(){
                            setHovered(option);
                        }
                        function handleLeave(){
                            setHovered(null);
                        }

                        return(
                            <div
                                key={option}
                                className="filterRow"
                                style={{ "--i": i }}
                                
                            >
                                <div className="filterRowHex"></div>
                                <div className="filterRowText" 
                                onClick={handleClick}
                                onMouseLeave={handleLeave}
                                onMouseEnter={handleEnter}
                                >
                                    {option}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
export default FilterBar