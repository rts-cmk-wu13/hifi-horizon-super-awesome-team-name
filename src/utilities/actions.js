import { redirect } from "react-router";
import { z } from "zod/v4";

const contactSchema = z.object({
    name: z.string().min(1, "Name is required"), // "" besked er for optional fejlmeddelelese
    email: z.email().optional(), // optional = ikke et krav, kan hoppes over
    message: z.string().min(10, "Message is too short"),
})

export async function handleSubmit({ request }) {
    const formData = await request.formData(); //alle data tages ud af formularen
    const data = Object.fromEntries(formData.entries());
    console.log("Form Submitted", data);


    const result = contactSchema.safeParse(data)

    if (!result.success) {
        const errors = z.treeifyError(result.error)
        return errors.properties
    }

    // her: fetch... method post:
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(result.data)
    })

    if (!response.ok) {
        throw new Error("Could not save data")
    }
    redirect("/") // evt til takkeside/ kvitteringsside (nu index)
}