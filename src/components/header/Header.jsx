import { useLocation } from "react-router"
import LogoutBtn from "../logout/LogoutBtn"
import Navigation from "../navigation/Navigation"

export default function Header({ header }) {
    const location = useLocation()

    return (
        <>
            <h1>{header}</h1>
            {/* Conditional rendering */}
            {location.pathname !== "/login" && (
                <>
                    <Navigation />
                    <LogoutBtn />
                </>
            )}
        </>
    )
}