import { useState } from "react";
import { useLoaderData } from "react-router";
import "./_ProductAmount.scss";

const initialCount = 0;

export default function ProductAmount() {
    const [count, setCount] = useState(initialCount);
    const product = useLoaderData()
    function handleSubtract() {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    function handleAdd() {
        setCount(count + 1);
    }

    return (
        <div className="product__choice">
            <div className="product__colors">
                <button>
                    <span className="black"></span>
                    <p>Black</p>
                </button>
                <button>
                    <span className="silver"></span>
                    <p>Silver</p>
                </button>
                <button>
                    <span className="gold"></span>
                    <p>Gold</p>
                </button>
            </div>
            <div className="product__price">
                <p>£ {product.price}</p>
                <p>In stock
                    <span className="available"></span>
                </p>
            </div>
            <div className="product__amount">
                <button type="button" class="subtractButton" onClick={handleSubtract}>-</button>
                <div>{count}</div>
                <button type="button" class="addButton" onClick={handleAdd}>+</button>
                <button className="product__btn">Add to cart</button>
            </div>
        </div>
    );
}