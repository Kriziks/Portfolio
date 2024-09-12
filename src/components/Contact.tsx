import './Contact.css'
import { useState } from "react";

function Contact(){
    const [status, setStatus] = useState("Submit")
    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus("Sending...")
        const { name, email, message } = e.target.elements
        let details = {
            name: name.value,
            email: email.value,
            message: message.value
        }
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json;charset=utf-8"
            },
            body: JSON.stringify(details)
        });
        setStatus("Submit")
        let result = await response.json();
        alert(result.status); 
    }
    return(
        <section id="contact" className="contact">
            <div className="contact-root">
                <div className="contact-branch1">
                    <div className="contact-leaf1">
                        <h2 className="contact-title">
                            Contact Me
                        </h2>
                        <p className="contact-question">
                            Have a question or want to work together?
                        </p>
                    </div>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input type="text" id="name" placeholder="Name" className="contact-name" required/>
                    <input type="email" id="email" placeholder="Email" className="contact-email" required/>
                    <textarea id="message" placeholder="Message" className="contact-message" required />
                    <button className="contact-button">{status}</button>
                </form>
            </div>
        </section>
    )
}
export default Contact