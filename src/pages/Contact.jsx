import { Link } from "react-router"
import ContactFormula from "../components/contactformula/ContactFormula"

export default function Contact() {

    return (
        <>
            <h1>get in touch with us</h1>
            <ContactFormula />
            <p>Visit our sister companies <Link to="/">Home Sound</Link> and The <Link to="/">Movie Rooms</Link> part of the HiFi Horizon Group. </p>
        </>
    )
}


