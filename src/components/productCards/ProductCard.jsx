import React from 'react';
import './_productCard.scss';

export default function ProductCard (){
    return (
        <div className="product-card">
            <figure className='product-card__figure'>
            <img className='product-card__img' src="public/Produktbilleder/cd_afspillere/creek_classic_cd.jpg" alt="" />
            </figure>
            <h3>Classic CD Player</h3>
            <p>(2V RMS)</p>
            <p>4999dkk</p>
            <button className='product-card__btn'>Read more</button>
        </div>
    );
}