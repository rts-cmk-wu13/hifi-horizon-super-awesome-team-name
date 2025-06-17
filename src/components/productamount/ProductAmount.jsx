import { useState } from "react";
import "./_ProductAmount.scss";

const initialCount = 0;

export default function ProductAmount() {
    const [count, setCount] = useState(initialCount);

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

            </div>
            <div className="product__amount">
                <button type="button" class="subtractButton" onClick={handleSubtract}>-</button>
                <div>{count}</div>
                <button type="button" class="addButton" onClick={handleAdd}>+</button>
            </div>
        </div>
    );
}