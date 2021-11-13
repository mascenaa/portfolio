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
                        <div className="rightBox swechery">
                            <p id="text">
                                <a>Swecherry<p>made in react</p></a>
                            </p>
                        </div>
                        <div className="middleBox bytebank"><p id="text"><a>ByteBank<p>made in react</p></a></p></div>
                        <div className="leftBox alurakut"><p id="text"><a>Alurakut<p>made in next.js</p></a></p></div>
                    </>
                );
            case second:
                return (
                    <>
                        <div className="rightBox loginstyle"><p id="text"><a>LoginStyle<p>made in react</p></a></p></div>
                        <div className="middleBox notes"><p id="text"><a>Notes<p>made in react</p></a></p></div>
                        <div className="leftBox gg"><p id="text"><a>GuessingGame<p>made in python</p></a></p></div>
                    </>
                );
            case third:
                return (
                    <>
                        <div className="rightBox"><p id="text"><a>Soon</a></p></div>
                        <div className="middleBox"><p id="text"><a>Soon</a></p></div>
                        <div className="leftBox"><p id="text"><a>Soon</a></p></div>
                    </>
                );
            case fourth:
                return (
                    <>
                        <div className="rightBox"><p id="text"><a>Soon</a></p></div>
                        <div className="middleBox"><p id="text"><a>Soon</a></p></div>
                        <div className="leftBox"><p id="text"><a>Soon</a></p></div>
                    </>
                );
            default:
                return console.log("err")
        }
    }


    return (
        <section className="projects" id="projects">
            <h2 className="projects-title">My projects</h2>

            <div className="column">
                {Slides(etapaA)}
            </div>

            <div className="slide-button">
                <button id="activefirst" onClick={() => { 
                    setEtapaA(first); 
                    }}>
                    </button>
                <button id="activefirst" onClick={() => { setEtapaA(second) }}></button>
                <button id="activefirst" onClick={() => { setEtapaA(third) }}></button>
                <button id="activefirst" onClick={() => { setEtapaA(fourth) }}></button>
            </div>
        </section>

    )
}