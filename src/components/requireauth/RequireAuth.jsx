import { Navigate, useLocation } from "react-router";
import { useAuth } from "../../contexts/AuthContext";

export default function RequireAuth({ children }) {

    const { token } = useAuth()
    const location = useLocation()
    
    if(!token){
        // no token - redirect to login
        return <Navigate to="/login" state={{ from: location}}/>
    }

    return children
}