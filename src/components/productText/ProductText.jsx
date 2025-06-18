
export default function ProductText({ product }) {

  
  return (
    <div className="product__text">
      <h2>{product.categories}</h2>
      <p>({product.brand})</p>
      <p className="product-description">{product.description}</p>
    </div>
  )
}