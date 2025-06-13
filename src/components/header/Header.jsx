
import Navigation from "../navigation/Navigation"
import Logo from "../logo/Logo"
import { FaUser } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";

export default function Header() {

    return (
        <header className="header">
            <div className="header__logoNav">
            <Logo />
            <Navigation />
            </div>
            <div className="header__searchUserCart">
                <div className="header__search">
                    <input type="text" placeholder="Search..." />
                </div>
                <div className="header__user">
                    <FaUser color="white" />
                </div>
                <div className="header__cart">
                    <IoMdCart color="white" />
                </div>
            </div>
        </header>
    )
}
