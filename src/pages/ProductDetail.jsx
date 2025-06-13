import { useLoaderData } from "react-router";

export default function ProductDetail() {
    
   const list = useLoaderData()

    return (
        <>
        <h2>{list.name}</h2>
        </>
    )
}
