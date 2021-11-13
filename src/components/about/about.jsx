import React from 'react'

import './about.css'

export default function About() {
    return (
        <section id="about" className="about">
                <img className="icon" src={'https://github.com/patrooooo.png'} alt="a" />
            <div className="about-body">
                <h2 className="about-title">Welcome to my portfolio!</h2>
            <div className="about-block">
                <p className="about-paragraph">Its is a privilege to have you here, my name is João, I live in São Paulo - Brazil.</p>
                <p className="about-paragraph">Let's start our adventure? Right now I'm focused on the front-end, but in the future I intend to be a full-stack developer</p>
            </div>
                <h3 className="about-title-skills">My Skills</h3>
                    <div className="about-block">
                    <p className="about-paragraph">My primary skills include javascript, html, css, python, graphql and typescript. In addition to my programming skills, I can lead teams in an efficient manner, making decisions to find the best solution to a problem.</p>
                    </div>
            </div>
        </section>
    );
}