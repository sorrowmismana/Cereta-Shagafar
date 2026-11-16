import "./SearchBox.css"



function SearchBox(){

    return(
        <div className="searchBoxWrapper">
            <input type="search" className="searchInput" onChange={handleChange} placeholder="Search"/>{value !== "" &&(<button className="searchClear"></>)}
        </div>
    );
}

export default SearchBox