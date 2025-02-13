import React from 'react';
import '../styles.css';

export default function Contact() {
    const config = {
        line1: 'If you want to discuss more in detail, please contact me'
    };

    return (
        <section id="contact">
            <div className="contact-container">
                <h1>Contact</h1>
                <p className="contact-text">{config.line1}</p>
                <p className="contact-info"> <strong style={{color:"#FFD700"}}>Email:</strong>amalnisha7705@gmail.com</p>
                <p className="contact-info"><strong style={{color:"#FFD700"}}>Phone:</strong> 8525986468</p>
            </div>
        </section>
    );
}
