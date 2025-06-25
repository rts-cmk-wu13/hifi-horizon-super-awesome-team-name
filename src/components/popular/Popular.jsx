import PopularProductCard from '../productCard/PopularProductCard';
import './_Popular.scss';
import { Link, useLoaderData } from 'react-router';

export default function Popular() {
    const allProducts = useLoaderData();

    // Vælg 4 tilfældige produkter
    const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 4);

    return (
        <section className="popular">
            <div className="popular__header">
                <h2>Popular Products</h2>
                <Link to="/products" className='popular__header__btn'>See all products</Link>
            </div>
            <div className="popular__grid">
                {selected.map(product => (
                    <PopularProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
