import { Link, useNavigate } from "react-router"
import { useAuth } from "../../contexts/AuthContext"


export default function LogoutBtn() {
    const { logout, token } = useAuth()
    const navigate = useNavigate()

    function handleLogout() {
        logout()
        setTimeout(() => {
            navigate("/")
        }, 0)
    }

    return token ? (
        <button onclick={handleLogout}>Log out</button>
    ) : <Link to="/login">Login</Link>
}