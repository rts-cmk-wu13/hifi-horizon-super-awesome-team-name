import { Link } from "react-router";
import "./_Logo.scss";

export default function Logo() {

    return (
        <Link to="/" className="logo">
            <p>HI FI</p>
        </Link>
    )
}