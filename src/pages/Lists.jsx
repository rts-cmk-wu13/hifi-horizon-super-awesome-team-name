import { Link, useLoaderData } from "react-router";
import { useAuth } from "../contexts/AuthContext";

export default function Lists() {
    const lists = useLoaderData();
    const { token } = useAuth()

    return (
        <ul>
            {lists.map(list => (
                <li key={list.id}>
                    <Link to={`/lists/${list.id}`}>{list.name}</Link>
                </li>
            ))}
        </ul>
    )
}