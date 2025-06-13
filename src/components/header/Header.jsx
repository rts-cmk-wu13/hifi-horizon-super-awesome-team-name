// import { useLocation } from "react-router"
import Logo from "../logo/Logo"
import Navigation from "../navigation/Navigation"
// import LogoutBtn from "../logout/LogoutBtn"


export default function Header() {
    // const location = useLocation()

    return (
        <header className="header">
            < Logo />
            <Navigation />            
        </header>
    )
}