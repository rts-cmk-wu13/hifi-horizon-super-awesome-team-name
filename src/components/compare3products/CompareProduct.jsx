import { useLoaderData } from "react-router";

export default function CompareProduct() {

  const product = useLoaderData();
  return (
    <div className="compare__left">
      <div>
        <img src={`/${product.image}`} alt={product.image} />
      </div>
      <div className="compare__right">
        <h2>{product.categories}</h2>
        <p>({product.brand})</p>
        <p className="compare--price">£{product.price}</p>
      </div>
    </div>
  )
}