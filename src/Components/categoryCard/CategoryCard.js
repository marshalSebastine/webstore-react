import React from "react";
import './category-card.styles.scss'

const CategoryCard = ({category}) => {

    return (
        <div className='debug debug-grid category-card' >

            <img src={category.imageUrl} alt="cart item" className="card-background-image"></img>
            <div className='category-card-body-container'>
            <h2>{category.title}</h2>
            <p>Shop Now</p>
            </div>

      </div>
    );

}


export default CategoryCard