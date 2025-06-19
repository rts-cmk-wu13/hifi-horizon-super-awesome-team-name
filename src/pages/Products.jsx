import React from 'react';
import ProductCard from './../components/productCard/ProductCard';

export default function ProductsPage() {
    return (
        <section className='products'>
            <h3 className="products--header">PRODUCTS</h3>
            <div className="products__main">
                <ProductCard />
            </div>
        </section>  
    );
}