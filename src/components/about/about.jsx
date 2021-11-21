import React from 'react'

import './about.css'

export default function About() {
    return (
        <section id="about" className="about">
            <div className="skills">
                <h3 className="skills-title">SKILLS</h3>
                    <div className="prg">
                        <h2 className="sub-title prg-active">Programming</h2>
                            <p className="about-paragraph">I specialize in building websites, so that includes the front-end, and a part of the back-end</p>
                        <div>
                            <ul className="list-of-skills">
                                <li className="itens-of-skills pr">JavaScript</li>
                                <li className="itens-of-skills pr">Python</li>
                                <li className="itens-of-skills pr">HTML & CSS</li>
                                <li className="itens-of-skills pr">React</li>
                            </ul>
                            </div>
                    </div>
                    <div className="dzn">
                        <h2 className="sub-title dzn-active">Design</h2>
                        <p className="about-paragraph">In design is the time where I can express my thoughts, usually by creating web applications</p>
                        <ul className="list-of-skills">
                                <li className="itens-of-skills">Figma</li>
                                <li className="itens-of-skills">Photoshop</li>
                            </ul>
                    </div>
            </div>
        </section>
    );
}