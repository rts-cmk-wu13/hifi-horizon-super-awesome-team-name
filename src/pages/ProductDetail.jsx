import { useLoaderData } from "react-router";
import ProductAmount from "../components/productamount/ProductAmount";

export default function ProductDetail() {
    
   const list = useLoaderData()

    return (
        <>
        <h2>{list.name}</h2>
        <ProductAmount />
        </>
    )
}
