import { Link } from "react-router"

export default function ButtonLink({to, text}){
    return (
        <Link to={to}><button>{text}</button></Link>
    )
}