import { createContext, useContext, useEffect, useState } from "react";
import { readFromLocalStorage, saveToLocalStorage } from "../../../utilities/localstorage";


const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => readFromLocalStorage('cart') || []);

    useEffect(() => {
        saveToLocalStorage('cart', cart);
    }, [cart]);

    const addToCart = (product, quantity = 1) => {
        setCart(prevCart => {
            const existing = prevCart.find(item => item.id === product.id);
            if (existing) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity }];
            }
        });
    };
    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
        saveToLocalStorage('cart', cart.filter(item => item.id !== productId));
    };
    
    const value = {
        cart,
        addToCart,
        removeFromCart,
        cartCount: cart.reduce((sum, item) => sum + item.quantity, 0),
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}