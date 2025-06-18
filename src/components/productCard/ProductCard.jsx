import React from 'react';
import { Link, useLoaderData } from "react-router";
import './_productCard.scss';

export default function ProductCard (){
    const products = useLoaderData();

    return (
        <div className="products-page ">
            {products.map(product => (
                <div className="product-card" key={product.id}>
                    <figure className='product-card__figure'>
                        <img className='product-card__img' src={product.image} alt="" />
                    </figure>
                    <h3>{product.type}</h3>
                    <p>{product.output}</p>
                    <p>£{product.price}</p>
                    <Link to={`/products/${product.id}`} className='product-card__btn'>Read more</Link>
                </div>
            ))}
        </div>
    );
}