import CompareThree from "../components/compare3products/CompareThree";
import Product from "../components/product/Product";
import ProSpecific from "../components/productSpecificComponent/ProSpecific";

export default function ProductDetail() {
    
    return (
        <section className="product-detail">
            <Product />
            <ProSpecific />
            <CompareThree />
        </section>
    )
}
