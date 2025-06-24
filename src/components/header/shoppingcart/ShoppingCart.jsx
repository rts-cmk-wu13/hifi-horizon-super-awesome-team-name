import { Link } from 'react-router'; 
import './_shoppingCart.scss';
import { useCart } from './CartContext';

const ShoppingCart = ({ isOpen }) => {
    const { cart } = useCart(); // <-- use context directly

    return (
        <div className={`shopping-cart-dropdown ${isOpen ? 'open' : ''}`}>
            <div className="cart-content">
                {cart.length === 0 ? (
                    <p className="empty-cart-message">Your cart is empty</p>
                ) : (
                    <ul>
                        {cart.map(item => (
                            <li key={item.id}>
                                {item.type} x {item.quantity} (£{item.price} each)
                            </li>
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