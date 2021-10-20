import React from 'react'
import EmailForm from './form/email'

import './contact.css'

export default function Contacts() {

    return (
    <div className="contactbox">
        <h1 className="contact-title gradient-line">Contacts</h1>


        <div>
            <EmailForm />
        </div>
    </div>
    )
}