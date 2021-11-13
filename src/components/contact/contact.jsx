import React from 'react'

import './contact.css'

export default function Contact() {


    return(
        <form id="contact" className="contact-form">
            <div>
                <h1 className="contact-title">Contact me</h1>
            </div>

            <div className="form-inputs">
                <input 
                placeholder="name" 
                type="text" />
                <input 
                placeholder="email"
                type="email"
                />

                <textarea 
                placeholder="write your message..."
                rows="4" 
                cols="50"></textarea>

                <h2 className="contact-title">Priority</h2>
                <input class="range" type="range" />
                <button className="button-form">Submit</button>
            </div>
        </form>
    )
}