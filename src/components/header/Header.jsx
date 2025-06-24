import { useState } from 'react';
import { useLoaderData } from 'react-router';
import Navigation from "../navigation/Navigation";
import Logo from "../logo/Logo";
import { FaUser } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import ShoppingCart from './shoppingcart/ShoppingCart';

export default function Header() {

    const [showMenu, setShowMenu] = useState(false);
    const [active, setActive] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [search, setSearch] = useState("");
    console.log(search);

    const searchData = useLoaderData();
    console.log(searchData);
    
    const handleChange = e => {
        setSearch(e.target.value)
    }
    // console.log(showMenu);   
 
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };
    // console.log(showMenu);   

    const handleClick = () => {
     setActive(!active);
    };

    return (
        <header className="header">
            <div className="header__logoNav">
            <Logo />
            <Navigation />
            </div>
            <div className="header__searchUserCart">
                <div className="header__search">
                    <input 
                        type="text" 
                        name="search" 
                        id="search" 
                        placeholder="Search product..." 
                        onChange={handleChange}
                        onClick={handleClick}
                    />
                    <FaSearch 
                        onClick={handleClick}
                        style={{ color: active ? 'red' : 'white', cursor: 'pointer' }}
                    />
                    <div className="searchShow">
                        {active && searchData && searchData
                        .filter((itm) => 
                            search.trim() !== '' && itm.type.toLowerCase().includes(search.toLowerCase())
                        )
                        .map((itm) => (                        
                            <p key={itm.id}>{itm.type}</p>
                        ))}
                    </div>
                </div>
                <div className="header__user">
                    <FaUser color="white" />
                </div>
                <div className="header__cart"
                 onClick={toggleCart}
                 >
                    <IoMdCart color="white" />
                    <ShoppingCart isOpen={isCartOpen} />
                </div>
                <GiHamburgerMenu color="white" className="hamburger" onClick={() => setShowMenu(true)}/>                
            </div>

            {showMenu && (
                <>
                <IoClose color="red"  onClick={() => setShowMenu(false)} className="closeIcon"/>
                {/* <GiHamburgerMenu color="white" className="hamburger" onClick={() => setShowMenu(false)}/>                 */}
                <div className="header--mobile">
                    <Logo />
                    <Navigation className="mobile--navigation" />
                </div>
                </>
            )}

            {/* {active && (
                <>
                    <input type="text" name="search" id="search" placeholder="Search product..." />
                </>
            )} */}
        </header>
    )
}
