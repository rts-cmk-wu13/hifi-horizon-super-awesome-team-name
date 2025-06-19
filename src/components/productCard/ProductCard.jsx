import React from 'react';
import { Link, useLoaderData } from "react-router";
import Compare from '../../components/compare/Compare'
import './_productCard.scss';

export default function ProductCard (){
    const products = useLoaderData();

    return (
        <section className="products__card">
            {products.map(product => (
                <div className="product-card" key={product.id}>
                    <Compare className=""/>
                    <figure className='product-card__figure'>
                        <img className='product-card__img' src={product.image} alt="" />
                    </figure>
                    <p>{product.type}</p>
                    <p>({product.output})</p>
                    <p className="dolars--clr product--cardpara">£{product.price}</p>
                    <div className="addStock">
                        <Link to={`/products/${product.id}`} className='product-card__btn'>Read more</Link>
                        <div className="stockCircle">
                            <p>In stock</p>
                            <span  className="stock--circle"></span>
                        </div>

                    </div>
                </div>
            ))}
        </section>
    );
}