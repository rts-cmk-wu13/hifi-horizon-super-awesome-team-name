import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export default function AuthProvider({ children }) {

    const [token, setToken] = useState(sessionStorage.getItem("token"));

    function login (newToken){
        setToken(newToken)
        sessionStorage.setItem("token", newToken)
    }
    function logout() {
        setToken(null)
        sessionStorage.removeItem("token", newToken)
    }

    return(
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}