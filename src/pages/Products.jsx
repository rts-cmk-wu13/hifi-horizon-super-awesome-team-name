import { Link, useLoaderData } from "react-router";
import { useAuth } from "../contexts/AuthContext"
import ProductCard from "../components/productCard/ProductCard";

export default function Products() {
    const lists = useLoaderData();
    // console.log("Products lists:", lists);
    const productLists = lists.Products.slice(0, 5); // Limiting to first 5 for demonstration
    console.log("Products productLists:", productLists);

    // const { token } = useAuth()

    return (
        <section className="product">
            <ul>
                {productLists.map(list => (
                    <li key={list.id}>
                        <Link to={`/lists/${list.id}`}>
                            <ProductCard product={list} />
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}