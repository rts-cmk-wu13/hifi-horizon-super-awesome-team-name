import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { FaRegDotCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import ProductAmount from "../productamount/ProductAmount";
import ProductText from "../productText/ProductText";

export default function ProductSpecific({ product }) {
    console.log("ProductSpecific component rendered with product:", product);
    
    return (
        <section className="product-specific">
            <div className="product__left">            
                <div className="product__leftImage">
                    <MdOutlineArrowBackIosNew className="arrow-icon" />
                    <div className="product-image">
                        <img src={product.image} alt={product.type} />
                    </div>
                    <MdArrowForwardIos className="arrow-icon" />
                </div>
                <div className="product__dots">
                    <FaRegDotCircle className="dot-icon" />
                    <FaRegCircle className="dot-icon" />
                    <FaRegCircle className="dot-icon" />
                </div>
            </div>
            <div>
            <ProductText product={ product }/>
            <ProductAmount />

            </div>
            {/* <div className="product__text">
                <h2>{product.categories}</h2>
                <p>({product.brand})</p>
                <p className="product-description">{product.description}</p>
            </div> */}
        </section>
    )
}