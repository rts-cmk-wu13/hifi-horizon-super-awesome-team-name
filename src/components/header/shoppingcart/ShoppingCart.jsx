
import React from 'react';
import { Link } from 'react-router';
import './_shoppingCart.scss';

const ShoppingCart = ({ isOpen }) => {
    return (
        <div className={`shopping-cart-dropdown ${isOpen ? 'open' : ''}`}>
            <div className="cart-content">
                <p className="empty-cart-message">Your cart is empty</p>
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