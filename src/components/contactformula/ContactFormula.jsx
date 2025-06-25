import React, { useState } from "react";
import "./_ContactFormula.scss";

export default function ContactFormula() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: undefined });
    };

    const validate = () => {
        const newErrors = {};
        if (!form.name) newErrors.name = "Name is required";
        if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Valid email is required";
        if (!form.subject) newErrors.subject = "Subject is required";
        if (!form.message) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        try {
            const res = await fetch("https://hifi-api-howz.onrender.com/messages", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setSuccess(true);
                setForm({ name: "", email: "", subject: "", message: "" });
            } else {
                setErrors({ api: "Something went wrong. Please try again." });
            }
        } catch {
            setErrors({ api: "Network error. Please try again." });
        }
    };

    return (
        <form className="contact__form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Full Name <span className="red">*</span></label>
                <input type="text" name="name" value={form.name} onChange={handleChange} />
                <p>{errors.name}</p>
            </div>
            <div>
                <label htmlFor="email">Email <span className="red">*</span></label>
                <input type="email" name="email" value={form.email} onChange={handleChange} />
                <p>{errors.email}</p>
            </div>
            <div>
                <label htmlFor="subject">Subject <span className="red">*</span></label>
                <input type="text" name="subject" value={form.subject} onChange={handleChange} />
                <p>{errors.subject}</p>
            </div>
            <div>
                <label htmlFor="message">Message <span className="red">*</span></label>
                <textarea name="message" id="message" value={form.message} onChange={handleChange}></textarea>
                <p>{errors.message}</p>
            </div>
            <button type="submit">Submit</button>
            {errors.api && <p className="error">{errors.api}</p>}
            {success && <p className="success">Thank you for your message!</p>}
        </form>
    );
}