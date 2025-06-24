import React from 'react';
import ProductCard from './../components/productCard/ProductCard';
import Sort from '../components/sort/Sort';

export default function ProductsPage() {
    return (
        <section className='products'>
            <h3 className="products--header">PRODUCTS</h3>
            <div className="products__main">
                <Sort />
                {/* <ProductCard /> */}
            </div>
        </section>  
    );
}