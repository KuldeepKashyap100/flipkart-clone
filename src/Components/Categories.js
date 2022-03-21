import React from "react"
import {Category} from ".";
const Categories = ({categoryList}) => {
    return (
        <div className="category-list">
            {categoryList.map(category => <Category {...category}></Category>)}
        </div>
    );
}

export default Categories;