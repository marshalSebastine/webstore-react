import React from "react";
import CategoryCard from "../categoryCard/CategoryCard";
import {CategoryListBox} from  './categoriesList.styles.js'

const CategoryList = ({categories}) => {

    return(
        <CategoryListBox>
            {
                categories.map((category) => (
                    <CategoryCard key={category.id} category={category}></CategoryCard>
                ))
            }
        </CategoryListBox>
    )
}


export default CategoryList