import { Form, useActionData } from "react-router"


export default function Contact() {
    const errors = useActionData();

    return (
        <>
            <h1>Contact</h1>
            <Form method="post">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" placeholder="Name" />
                    <p>{errors && errors?.name?.errors[0]}</p>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" placeholder="Email" />
                    <p>{errors && errors?.email?.errors[0]}</p>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message" placeholder="Message"></textarea>
                    <p>{errors && errors?.message?.errors[0]}</p>
                </div>
                <button type="submit">Submit</button>
            </Form>
        </>
    )
}


