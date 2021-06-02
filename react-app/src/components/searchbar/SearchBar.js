import React from "react";

//Searchbar inspired by codepen example
//https://codepen.io/pascalcodes/pen/JjbYvwK
//https://codepen.io/pascalcodes
import "./SearchBar.css"

export default function SearchBar() {
    return(
            <div className="DnD__SearchBar">
                <label><input type="text" id="DnD__SearchBar--search-bar" /><span className="DnD__SearchBar--search-icon" /> $filter$ </label>
                <div className="DnD__SearchBar--buttonWrapper">
                    <button>Opt1</button>
                    <button>Opt2</button>
                </div>

            </div>

    )
}