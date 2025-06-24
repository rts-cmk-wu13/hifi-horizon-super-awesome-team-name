import { Link } from "react-router";
import './_productCard.scss';

export default function PopularProductCard({ product }) {
    return (
        <div className="product-card popular" key={product.id}>
            <figure className='product-card__figure'>
                <img className='product-card__img' src={product.image} alt={product.type} />
            </figure>
            <p>{product.type}</p>
            <p>({product.output})</p>
            <p className="dolars--clr product--cardpara">£ {product.price}</p>
            <Link to={`/products/${product.id}`} className='product-card__btn'>Read more</Link>
        </div>
    );
}
