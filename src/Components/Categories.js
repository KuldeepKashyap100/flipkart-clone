import React from "react"
import {Category} from ".";
export const Categories = ({categoryList}) => {
    return (
        <div className="category-list">
            {categoryList.map((category, categoryIdx) => <Category key={categoryIdx} {...category}></Category>)}
        </div>
    );
}