import { Link, useLoaderData } from "react-router";
import Compare from '../../components/compare/Compare'
import './_productCard.scss';
import './_PopularProductCard.scss';

export default function ProductCard ({filteredList}){
    // const products = useLoaderData();

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
                        <Link to={`/products/${product.id}`} className='product-card__btn'>Read more</Link>
                        <div className="stockCircle">
                            <p>In stock</p>
                            <span  className="stock--circle"></span>
                        </div>

                    </div>
                </div>
            ))}
            {filteredList.length === 0 && (
          <div className="text-center text-gray-500 mt-4">
            Sorry, no products match your filters.
          </div>
        )}
        </section>
    );
}