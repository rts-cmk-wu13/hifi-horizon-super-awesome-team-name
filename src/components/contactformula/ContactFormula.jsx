import "./_ContactFormula.scss";
import { Form, useActionData } from "react-router"


export default function ContactFormula() {
    const errors = useActionData();

    return (
        <Form method="post">
            <div>
                <label htmlFor="name">Full Name <span className="red">*</span></label>
                <input type="text" name="name" />
                <p>{errors && errors?.name?.errors[0]}</p>
            </div>
            <div>
                <label htmlFor="email">Email <span className="red">*</span></label>
                <input type="email" name="email" />
                <p>{errors && errors?.email?.errors[0]}</p>
            </div>
            <div>
                <label htmlFor="subject">Subject <span className="red">*</span></label>
                <input type="text" name="subject" />
                <p>{errors && errors?.subject?.errors[0]}</p>
            </div>
            <div>
                <label htmlFor="message">Message <span className="red">*</span></label>
                <textarea name="message" id="message"></textarea>
                <p>{errors && errors?.message?.errors[0]}</p>
            </div>
            <button type="submit">Submit</button>
        </Form>

    )
}