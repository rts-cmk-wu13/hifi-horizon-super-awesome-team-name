import { useLoaderData } from "react-router";
import ProductAmount from "../components/productamount/ProductAmount";
import ProductSpecific from "../components/productSpecific/ProductSpecific";

export default function ProductDetail() {
    
   const list = useLoaderData()

    return (
        <section className="product-detail">
            <h2>Product Details</h2>
            <ProductSpecific />
            {/* <h2>{list.name}</h2> */}
            <ProductAmount />
        </section>
    )
}
