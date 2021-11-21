import React from 'react';


import './header.css'

export default function Header() {

    return (
    <>
        <section className="header">   
            <h1 className="header-title"><span id="color">Mascena</span></h1>
                <ul className="header-nav-list">
                    <li className="header-nav-item"><a className="option" href="#about">about</a></li>
                    <li className="header-nav-item"><a className="option" href="#projects">projects</a></li>
                    <li className="header-nav-item"><a className="option" href="#contact">contacts</a></li>
                </ul>
        </section>
        <section id="about" className="welcome">
           <h2 className="welcome-title">Welcome to my portfolio! <span id="lets">Let's Go?</span></h2>
        <div className="welcome-about">
            <p className="welcome-about-paragraph">Let's start our adventure? Right now I'm focused on the front-end, but in the future I intend to be a full-stack developer</p>
        </div>
        </section>
    </>
    );
}