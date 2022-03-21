import React from "react";
import {BiSearch} from "react-icons/bi";

const SearchBar = () => {
    return (
        <div className="search-bar-wrapper">
            <form>
                <input type="text"></input>
                <button type="submit">
                    <BiSearch />
                </button>
            </form>
        </div>
    );
}

export default SearchBar;