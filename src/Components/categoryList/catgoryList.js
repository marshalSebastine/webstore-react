import React from "react";
import CategoryCard from "../categoryCard/CategoryCard";
import './categoriesList.styles.scss'

const CategoryList = ({categories}) => {

    return(
        <article className="category-list-box">
            {
                categories.map((category) => (
                    <CategoryCard key={category.id} category={category}></CategoryCard>
                ))
            }
        </article>
    )
}


export default CategoryList