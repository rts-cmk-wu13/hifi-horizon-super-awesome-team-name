import { useState } from 'react';
import Navigation from "../navigation/Navigation";
import Logo from "../logo/Logo";
import { FaUser } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import ShoppingCart from './shoppingcart/ShoppingCart';
import { useCart } from './shoppingcart/CartContext';
// import { Link, useLoaderData } from 'react-router';
import Search from '../Search';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    console.log(showMenu);

    // Shopping cart functionality
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { cart } = useCart();
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    // Toggle search input
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };

    const handleChange = e => {
        setSearch(e.target.value)
    }
    // console.log(search);    

    return (
        <header className="header">
            <div className="header__logoNav">
                <Logo />
                <Navigation />
            </div>
            <div className="header__searchUserCart">
                <Search />

                <div className="header__user">
                    <FaUser color="white" />
                </div>

                <div className="header__cart" onClick={toggleCart}>
                    <IoMdCart color="white" />
                    {cartCount > 0 && (
                        <span className="cart-badge">{cartCount}</span>
                    )}
                    <ShoppingCart isOpen={isCartOpen} />
                </div>

                <div className="header__hamburger">
                    <GiHamburgerMenu color="white" className="hamburger" onClick={() => setShowMenu(true)} />                    
                </div>
            </div>
            {showMenu && (
                <>
                    <IoClose color="orange" onClick={() => setShowMenu(false)} className="closeIcon" />
                    <div className="header--mobile">
                        <Logo />
                        <Navigation className="mobile--navigation" />
                    </div>
                </>
            )}
        </header>
    )
}
