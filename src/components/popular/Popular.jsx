
import ProductCard from '../productCard/ProductCard';
import './_Popular.scss';

export default function Popular() {
  return (
    <section className="popular">
      <h2>Popular Products</h2>
      <div className="popular__grid">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}