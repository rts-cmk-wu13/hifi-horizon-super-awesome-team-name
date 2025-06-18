import "../style/_Contact.scss";
import { Link } from "react-router"
import ContactFormula from "../components/contactformula/ContactFormula"

export default function Contact() {

    return (
        <section className="contact">
            <h1>get in touch with us</h1>
            <ContactFormula />
            <p className="contact__text">Visit our sister companies <Link to="/" className="contact__link">Home Sound</Link> and The <Link to="/" className="contact__link">Movie Rooms</Link> part of the HiFi Horizon Group. </p>
        </section>
    )
}


