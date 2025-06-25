
// import { redirect } from "react-router"
import queryClient from "./queryClient"

// ! Uden tanstack:
// export async function getLists() {
//     const response = await fetch('/public/db.json')

//     console.log(response);
//     if(!response.ok){
//         throw new Error('Network response was not ok')
//     }
//     return response.json()
// }

// //! Med tanstack:

export async function getLists() {

    //     // const token = sessionStorage.getItem("token")
    //     // if(!token) redirect("/login")

    return queryClient.fetchQuery({
        queryKey: ['users'],
        queryFn: async function () {
            const response = await fetch('https://hifi-api-howz.onrender.com/products')
            if (!response.ok) {
                throw new Error('Network response was not ok for fetching product data');
            }
            return response.json()
        }
    })
}


export async function getList({ params }) {
    const response = await fetch(`https://hifi-api-howz.onrender.com/products/${params.id}`)
    if (!response.ok) {
        throw new Error('Network response was not ok for fetching specific product data');
    }
    return response.json()
}

export async function getAbout() {
    const response = await fetch('https://hifi-api-howz.onrender.com/about');
    if (!response.ok) {
        throw new Error('Network response was not ok for fetching about data');
    }
    return response.json();
}