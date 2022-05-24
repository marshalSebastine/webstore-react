import React from "react";
import {CategoryCardBody,CardBackground,CategoryCardContainer} from './category-card.styles.js'


const CategoryCard = ({category}) => {

    return (
        <CategoryCardContainer >

            <CardBackground imageUrl = {category.imageUrl}/>
            <CategoryCardBody to = {`/shop/${category.title}`}>
            <h2>{category.title}</h2>
            <p>Shop Now</p>
            </CategoryCardBody>

      </CategoryCardContainer>
    );

}


export default CategoryCard