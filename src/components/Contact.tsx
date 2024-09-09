import './Contact.css'

function Contact(){
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
                <form className="contact-form">
                <input type="text" placeholder="Name" className="contact-text" />
                <input type="email" placeholder="Email" className="contact-email" />
                <textarea placeholder="Message" className="contact-message" />
                <button className="contact-button">Submit</button>
                </form>
            </div>
        </section>
    )
}
export default Contact