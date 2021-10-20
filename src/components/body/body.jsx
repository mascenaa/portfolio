import React from 'react'

 // assets
 import './body.css'
 import down from '../assets/down.svg'
 import 'animate.css';

export default function Body() {

    return (
        <body className="conteiner">
            <div id="wave" className="box-text"> 
                <h1 className="animate__animated animate__zoomIn box-title"><span id="color">J</span>oão <span id="color">P</span>edro <span id="color">M</span>ascena</h1>
                <p className="animate__animated animate__zoomIn box-p">software engineer</p>



                <img 
                className="animate__animated animate__slideInDown" 
                id="down" 
                src={down} 
                alt="scroll down" />
            </div>
        </body>
    )
}