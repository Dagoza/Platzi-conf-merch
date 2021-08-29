import React from 'react'
import '../styles/components/Products.scss'

export const Product = ({product, handleAddToCart}) => {
    return (
        <div className="products__item">
            <img src={product.image} alt={product.title}/>
             <div className="products__item--info">
                <h2>{product.title}
                   <span>${product.price}</span>
                </h2>
                <p>{product.description}</p>
             </div>
             <button onClick={handleAddToCart(product)} type="button">Buy</button>
        </div>
    )
}
