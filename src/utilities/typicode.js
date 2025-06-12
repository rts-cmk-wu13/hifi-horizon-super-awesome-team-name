import { redirect } from "react-router"
import queryClient from "./queryClient"

// ! Uden tanstack:
// export async function getLists() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     if(!response.ok){
//         throw new Error('Network response was not ok')
//     }
//     return response.json()
// }

// //! Med tanstack:
export async function getLists() {

    const token = sessionStorage.getItem("token")
    if(!token) redirect("/login")

    return queryClient.fetchQuery({
        queryKey: ['users'],
        queryFn: async function () {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        }
    })
}


export async function getList({ params }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    return response.json()
}