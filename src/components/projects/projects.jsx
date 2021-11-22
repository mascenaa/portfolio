import React, { useState } from 'react'
import 'animate.css'

import '../projects/slidesProjects/projectsactive.css'
import './project.css'

export default function Projects() {

    const [etapaA, setEtapaA] = useState(0)
    const first = 0;
    const second = 1;
    const third = 2;
    const fourth = 3;


    function Slides(etapa) {
        switch (etapa) {
            case first:
                return (
                    <>
                    <div className="project-box">
                        <h1 className="project-title">Sweecherry</h1>
                            <div className="project-desc">
                                <h2 className="project-subtitle">Description</h2>
                                <p className="project-desctext">Site made for a bakery in Rio De Janeiro, in colaboration with @diasproductor. </p>
                            </div>
                            <div className="project-tech">
                                <h2 className="project-subtitle">Tecnologies</h2>
                                <p className="project-desctext">React and GraphQL</p>
                            </div>
                    </div>
                    <img className="image" src={'https://github.com/patrooooo.png'} />
                     </>
                );
            case second:
                return (
                    <>
                    <div className="project-box">
                        <h1 className="project-title">ByteBank</h1>
                            <div className="project-desc">
                                <h2 className="project-subtitle">Description</h2>
                                <p className="project-desctext">Building a bank is a very old dream, 
                                but now with the power of code this dream is closer</p>
                            </div>
                            <div className="project-tech">
                                <h2 className="project-subtitle">Tecnologies</h2>
                                <p className="project-desctext">React</p>
                            </div>
                    </div>
                    <img className="image" src={'https://github.com/patrooooo.png'} />
                     </>
                );
            case third:
                return (
                    <>
                    <div className="project-box">
                        <h1 className="project-title">Noteblock</h1>
                            <div className="project-desc">
                                <h2 className="project-subtitle">Description</h2>
                                <p className="project-desctext">One of my first projects in react, 
                                helped me focus on my dreams</p>
                            </div>
                            <div className="project-tech">
                                <h2 className="project-subtitle">Tecnologies</h2>
                                <p className="project-desctext">React and GraphQL</p>
                            </div>
                    </div>
                    <img className="image" src={'https://github.com/patrooooo.png'} />
                     </>
                );
            case fourth:
                return (
                    <>
                    <div className="project-box">
                        <h1 className="project-title">Soon</h1>
                            <div className="project-desc">
                                <h2 className="project-subtitle">Description</h2>
                                <p className="project-desctext">Soon</p>
                            </div>
                            <div className="project-tech">
                                <h2 className="project-subtitle">Tecnologies</h2>
                                <p className="project-desctext">Soon</p>
                            </div>
                    </div>
                    <img className="image" src={'https://github.com/patrooooo.png'} />
                     </>
                );
            default:
                return console.log("err")
        }
    }


    return (
        <section className="projects" id="projects">
            <h2 className="projects-title">PRO<span id="color">J</span>ECTS</h2>

            <div className="column">
                {Slides(etapaA)}
            </div>

            <div className="slide-button">
                <button className="button" id="activefirst" onClick={() => { 
                    setEtapaA(first); 
                    }}>
                    </button>
                <button className="button" id="activefirst" onClick={() => { setEtapaA(second) }}></button>
                <button className="button" id="activefirst" onClick={() => { setEtapaA(third) }}></button>
                <button className="button" id="activefirst" onClick={() => { setEtapaA(fourth) }}></button>
            </div>
        </section>

    )
}