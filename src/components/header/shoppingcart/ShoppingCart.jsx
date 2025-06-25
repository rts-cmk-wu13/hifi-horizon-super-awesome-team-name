import { Link } from 'react-router';
import './_shoppingCart.scss';
import { useCart } from './CartContext';

const ShoppingCart = ({ isOpen }) => {
    const { cart, clearCart } = useCart(); // <-- get clearCart from context

    return (
        <div className={`shopping-cart-dropdown ${isOpen ? 'open' : ''}`}>
            <div className="cart-content">
                <button
                    className="cart-clear-btn"
                    onClick={clearCart}
                    aria-label="Empty cart"
                    title="Empty cart"
                >
                    ×
                </button>
                {cart.length === 0 ? (
                    <p className="empty-cart-message">Your cart is empty</p>
                ) : (
                    <ul>
                        {cart.map(item => (
                            <Link to={`/products/${item.id}`}>
                                <li key={item.id}>
                                    {item.type} x {item.quantity} (£{item.price} each)
                                </li>
                            </Link>
                        ))}
                    </ul>
                )}
                <div className="cart-buttons">
                    <Link to="/cart" className="cart-button view">
                        View Cart
                    </Link>
                    <Link to="/checkout" className="cart-button checkout">
                        Checkout
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;