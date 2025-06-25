// import { Link, useLoaderData } from "react-router";
import Compare from '../../components/compare/Compare'
import './_productCard.scss';
import './_PopularProductCard.scss';
import { useCart } from '../header/shoppingcart/CartContext';

export default function ProductCard ({filteredList}){
    // const products = useLoaderData();
    const { addToCart } = useCart();

    function handleAddToCart(product) {
        addToCart(product, 1);
    }

    return (
        <section className="products__card">
            {filteredList.map(product => (
                <div className="product-card" key={product.id}>
                    <Compare comStyle="comStyle"/>
                    <figure className='product-card__figure'>
                        <img className='product-card__img' src={product.image} alt="" />
                    </figure>
                    <p>{product.type}</p>
                    <p>({product.output})</p>
                    <p className="dolars--clr product--cardpara">£{product.price}</p>
                    <div className="addStock">
                        <button className='product-card__btn' onClick={() => handleAddToCart(product)}>Add to cart</button>
                        <div className="stockCircle">
                            <p>In stock</p>
                            <span  className="stock--circle"></span>
                        </div>

                    </div>
                </div>
            ))}
            {filteredList.length === 0 && (
          <div className="">
            Sorry, no products match your filters.
          </div>
        )}
        </section>
    );
}