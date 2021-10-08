import React from 'react'

    // Modules

    // Assets
import '../../assets/profile/profile.css'


export default function Profile() {


    return (
        <div className="box-profile">
            <div className="box-user">
            <img className="avatar" src={"https://github.com/patrooooo.png"} />
                <h1 className="user">@Mascena</h1>
            </div>
            <div className="box-bio">
                <h2>About me: </h2>
                <p>👋 · Welcome to my portfolio.</p>
                <p>TEXT ABOUT ME</p>
            </div>
        </div>
    )
}