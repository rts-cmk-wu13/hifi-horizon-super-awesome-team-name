import { useLoaderData } from "react-router";
// import ProductAmount from "../components/productamount/ProductAmount";
import ProductSpecific from "../../components/productSpecific/ProductSpecific";
import Compare from "../compare/Compare";


export default function Product() {
  const list = useLoaderData();

  return (
    <section className="product">
      <h2>PRODUCT</h2>
            <Compare />
            <ProductSpecific product={list} />
            {/* <h2>{list.name}</h2> */}
            {/* <ProductAmount /> */}
    </section>
  )
}