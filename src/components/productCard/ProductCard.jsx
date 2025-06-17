export default function ProductCard({ product }) {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.type} />
            <h3>{product.type}</h3>
            <p>£{product.price}</p>
        </div>
    );
}