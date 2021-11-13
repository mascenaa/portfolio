import React from 'react';


import './header.css'

export default function Header() {

    return (
        <section className="header">
                <h1 className="header-title">João Pedro <span id="color">Mascena</span></h1>
            <div className="header-nav">
                <ul className="header-nav-list">
                    <li className="header-nav-item"><a href="#about">about</a></li>
                    <li className="header-nav-item"><a href="#projects">projects</a></li>
                    <li className="header-nav-item"><a href="">contacts</a></li>
                </ul>
            </div>
        </section>
    );
}