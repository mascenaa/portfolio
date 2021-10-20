import React from "react";

// assets
import "./slide.css";


export default function Slide() {
  return (
<>
    <section className="projects">
      <h1 className="animate__animated animate__slideInLeft projects-title">My projects</h1>
   
    <section className="column1">
        <div className="box">
            <div className="box-header">
                <h2 className="box-title-slide" >AluraKut</h2>
                <p className="box-desc">
                Alurakut was a project made by the Alura platform. It was my first project using React, and it opened doors for me to start using this framework. Sensational!</p>
                <h2 className="box-title-slide" >Technologies</h2>
                <img className="profileimage slide" alt="" src="https://img.shields.io/badge/next.js-ffffff?style=for-the-badge&logo=nextdotjs&logoColor=151515" />
                <img className="profileimage slide" alt="" src="https://img.shields.io/badge/-GraphQL-ffffff?style=for-the-badge&logo=graphql&logoColor=AE00FB" />
            </div>
        </div>
        <div className="box">
            <div className="box-header">
                <h2 className="box-title-slide">MascenaBank</h2>
                <p className="box-desc">
                A silly childhood ambition that I put into practice. I decided to create a website of banking , to practice my HTML & CSS.
                </p>
                <h2 className="box-title-slide" >Technologies</h2>
                <img className="profileimage slide" alt="" src="https://img.shields.io/badge/React-ffffff?style=for-the-badge&logo=react&logoColor=61DAFB" />
                <img className="profileimage slide" alt="" src="https://img.shields.io/badge/node.js-ffffff?style=for-the-badge&logo=node.js&logoColor=6ECB63" />
            </div>
        </div>
        <div className="box">
                <h2 className="box-title-slide">Guessing game</h2>
                <p className="box-desc">My first python project. I will admit it was a challenge, since I had no experience with logic. 
                Soon I intend to make an upgraded xD. </p>
                <h2 className="box-title-slide" >Technologies</h2>
                <img className="profileimage slide" alt="" src="https://img.shields.io/badge/Python-ffffff?style=for-the-badge&logo=python&logoColor=D98C00" />
        </div>
      </section>
      <section className="column2">
      <div className="box">
                <h2 className="box-title-slide">NoteBlock</h2>
                <p className="box-desc">One more project made in react. This time I thought to make a notepad to write down useless tasks. 
                The purpose of making it was to train my js skills.</p>
                <h2 className="box-title-slide" >Technologies</h2>
                <img className="profileimage slide" alt="" src="https://img.shields.io/badge/React-ffffff?style=for-the-badge&logo=react&logoColor=61DAFB" />
        </div>
      </section>
    </section>
</>
  );
}
