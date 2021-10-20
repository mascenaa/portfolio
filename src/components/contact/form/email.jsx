import React from 'react'


export default function EmailForm() {

    return (
        <>
        <form className="form">
            <div className="form-infos">
                <label className="form-text">Name</label>
                
                <input 
                placeholder="your name"
                 /> 

                <label className="form-text">Email</label>
                
                <input 
                placeholder="example@example.com" 
                /> 
            </div>


            <div className="form-m">
                <label className="form-text">Your Message</label>
                <textarea /> 
            </div>

            <button
                type="submit"
            >
                Submit
                
            </button>

        </form>
        </>
    )
}