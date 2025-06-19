import { useState } from 'react';
import Navigation from "../navigation/Navigation"
import Logo from "../logo/Logo"
import { FaUser } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {

    const [showMenu, setShowMenu] = useState(false);
    console.log(showMenu);   

    return (
        <header className="header">
            <div className="header__logoNav">
            <Logo />
            <Navigation />
            </div>
            <div className="header__searchUserCart">
                <div className="header__search">
                    <input type="text" name="search" id="search" placeholder="Search product..." />
                    <FaSearch className="clr"/>
                </div>
                <div className="header__user">
                    <FaUser color="white" />
                </div>
                <div className="header__cart">
                    <IoMdCart color="white" />
                </div>
                <GiHamburgerMenu color="white" className="hamburger" onClick={() => setShowMenu(true)}/>
            </div>
            {showMenu && (<div className="header--mobile">
            <Logo />
            <Navigation className="mobile--navigation" />
            </div>)}
        </header>
    )
}
