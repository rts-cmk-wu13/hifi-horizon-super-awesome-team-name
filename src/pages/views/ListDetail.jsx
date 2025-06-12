import { useLoaderData } from "react-router";

export default function ListDetail() {
    
   const list = useLoaderData()

    return (
        <>
        <h2>{list.name}</h2>
        </>
    )
}
