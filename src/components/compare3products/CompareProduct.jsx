import { useLoaderData } from "react-router";

export default function CompareProduct() {

  const product = useLoaderData();
  return (
    <div className="compare__left">
      <div>
        <img src={product.image} alt={product.type} />
      </div>
      <div className="compare__right">
        <h4>{product.categories}</h4>
        <p>({product.brand})</p>
        <p className="compare--price">£{product.price}</p>
      </div>
    </div>
  )
}