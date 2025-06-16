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
        <div className="product__amount">
            <div className="product__colors">

            </div>
            <div className="offer__amount">
                <button type="button" class="subtractButton" onClick={handleSubtract}>-</button>
                <div id="result">{count}</div>
                <button type="button" class="addButton" onClick={handleAdd}>+</button>
            </div>
        </div>
    );
}