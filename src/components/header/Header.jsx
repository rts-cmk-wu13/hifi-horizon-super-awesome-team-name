import { useState } from 'react';
import Navigation from "../navigation/Navigation";
import Logo from "../logo/Logo";
import { FaUser } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Header() {

    const [showMenu, setShowMenu] = useState(false);
    const [active, setActive] = useState(false);
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
                    <input type="text" name="search" id="search" placeholder="Search product..." />
                    <FaSearch 
                        onClick={handleClick}
                        style={{ color: active ? 'red' : 'white', cursor: 'pointer' }}
                    />
                </div>
                <div className="header__user">
                    <FaUser color="white" />
                </div>
                <div className="header__cart">
                    <IoMdCart color="white" />
                </div>
                <GiHamburgerMenu color="white" className="hamburger" onClick={() => setShowMenu(true)}/>                
            </div>
            {showMenu && (
                <>
                <IoClose color="red"  onClick={() => setShowMenu(false)} className="closeIcon"/>
                <div className="header--mobile">
                    <Logo />
                    <Navigation className="mobile--navigation" />
                </div>
                </>
            )}
        </header>
    )
}
