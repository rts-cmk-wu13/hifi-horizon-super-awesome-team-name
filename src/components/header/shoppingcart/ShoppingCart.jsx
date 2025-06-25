import { Link } from 'react-router';
import './_shoppingCart.scss';
import { useCart } from './CartContext';
import { FaRegTrashAlt } from 'react-icons/fa';

const ShoppingCart = ({ isOpen }) => {
    const { cart, clearCart, removeFromCart } = useCart(); // <-- get clearCart from context

    return (
        <div className={`shopping-cart-dropdown ${isOpen ? 'open' : ''}`}>
            <div className="cart-content">
                {cart.length === 0 ? (
                    <p className="empty-cart-message">Your cart is empty</p>
                ) : (
                    <ul>
                        {cart.map(item => (
                            <li key={item.id} className='shop-item'>
                                <Link to={`/products/${item.id}`}>
                                    {item.type} x {item.quantity} (£{item.price} each)
                                </Link>
                                <button className='remove-item-btn'
                                    onClick={e => { e.stopPropagation();
                                        removeFromCart(item.id);}}>
                                    <FaRegTrashAlt />
                                </button>
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