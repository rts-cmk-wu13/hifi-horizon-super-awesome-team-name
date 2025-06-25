
import CompareThree from "../components/compare3products/CompareThree";
import Product from "../components/product/Product";
import ProductTable from "../components/productTable/ProductTable";

export default function ProductDetail() {
    
    return (
        <section className="product-detail">
            <Product />
            <ProductTable />
            <CompareThree />
        </section>
    )
}
