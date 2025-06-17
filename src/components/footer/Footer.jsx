import { FaCcMastercard, FaCcStripe, FaCcVisa, FaFacebookSquare, FaInstagramSquare, FaPhone, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa"
import { Link, NavLink } from "react-router"

export default function Footer() {

    return (
        <footer className="footer">
            <div className="footer__linkings">
                <ul className="footer__links">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/products">Shop</NavLink></li>
                    <li><NavLink to="/about">About Us</NavLink></li>
                </ul>
                <ul className="footer__links">
                    <li><Link to="#">Return & Refunds</Link></li>
                    <li><Link to="#">Delivery</Link></li>
                    <li><Link to="#">Privacy Policy</Link></li>
                    <li><Link to="#">Terms & Conditions</Link></li>
                </ul>
                <ul className="footer__somes">
                    <li className="footer__some footer__contact">
                        Contact
                    </li>
                    <li className="footer__some">
                        2 Joppa Rd, Edinburgh, EH15 2EU
                    </li>
                    <li className="footer__some">
                        <FaPhone className="footer__phone" /><a href="tel:+4401315567901">0131 556 7901</a>
                    </li>
                    <li className="footer__some">
                        44 Cow Wynd, Falkirk, Central Region, FK1 1PU
                    </li>
                    <li className="footer__some">
                        <FaPhone className="footer__phone" /><a href="tel:+4401324629011">01324 629 011</a>
                    </li>
                    <ul className="footer__socials">
                        <li className="footer__social">
                            <a href="#" target="_blank"><FaFacebookSquare /></a>
                        </li>
                        <li className="footer__social">
                            <a href="#" target="_blank"><FaTwitterSquare /></a>
                        </li>
                        <li className="footer__social">
                            <a href="#" target="_blank"><FaInstagramSquare /></a>
                        </li>
                        <li className="footer__social">
                            <a href="#" target="_blank"><FaYoutubeSquare /></a>
                        </li>
                    </ul>
                </ul>
            </div>
            <div className="footer__copyright">
                <div>
                    <FaCcStripe />
                    <FaCcVisa />
                    <FaCcMastercard />
                </div>
                <div>
                    <p>HiFi Horizon (Edinburgh) Ltd is registered in Scotland. No: SC049298. Registered office: 2 Joppa Rd, Edinburgh EH15 2EU</p>
                    <p>Designed by WU07 :)</p>
                </div>
            </div>
        </footer>

    )
}