import { NavLink } from "react-router";

export default function Navigation() {

    return(
        <nav>
            <ul>
                <li>
                    <NavLink to="/products">SHOP</NavLink>
                </li>
                <li>
                    <NavLink to="/about">ABOUT US</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">CONTACT US</NavLink>
                </li>
            </ul>
        </nav>
    )
}