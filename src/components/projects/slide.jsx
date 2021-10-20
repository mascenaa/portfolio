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
                Alurakut foi um projeto feito pela plataforma Alura. Foi o meu primeiro projeto usando o React, 
                além de abrir portas para eu começar a usar essa Framework. Sensacional!</p>
                <h2 className="box-title-slide" >Technologies</h2>
                <img className="profileimage" alt="" src="https://img.shields.io/badge/next.js-ffffff?style=for-the-badge&logo=nextdotjs&logoColor=151515" />
            </div>
        </div>
        <div className="box">
            <div className="box-header">
                <h2 className="box-title-slide">MascenaBank</h2>
                <p className="box-desc">
                  Um sonho besta de criança que coloquei em prática. Decidi criar um site do nicho monetário, 
                  para treinar o meu HTML E CSS. 
                </p>
                <h2 className="box-title-slide" >Technologies</h2>
                <img className="profileimage" alt="" src="https://img.shields.io/badge/next.js-ffffff?style=for-the-badge&logo=nextdotjs&logoColor=151515" />
            </div>
        </div>
        <div className="box">
                <h2 className="box-title-slide">Lorem</h2>
                <p className="box-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas ducimus eos voluptatibus? Illo doloribus odit quam aspernatur cum quasi est temporibus, pariatur voluptatem fuga delectus quisquam voluptas ipsam voluptatibus nihil?</p>
                
        </div>
      </section>
      <section className="column2">
      <div className="box">
                <h2 className="box-title-slide">Lorem</h2>
                <p className="box-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas ducimus eos voluptatibus? Illo doloribus odit quam aspernatur cum quasi est temporibus, pariatur voluptatem fuga delectus quisquam voluptas ipsam voluptatibus nihil?</p>
                
        </div>
        <div className="box">
                <h2 className="box-title-slide">Lorem</h2>
                <p className="box-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas ducimus eos voluptatibus? Illo doloribus odit quam aspernatur cum quasi est temporibus, pariatur voluptatem fuga delectus quisquam voluptas ipsam voluptatibus nihil?</p>
              
        </div>
        <div className="box">
                <h2 className="box-title-slide">Lorem</h2>
                <p className="box-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas ducimus eos voluptatibus? Illo doloribus odit quam aspernatur cum quasi est temporibus, pariatur voluptatem fuga delectus quisquam voluptas ipsam voluptatibus nihil?</p>
               
        </div>
      </section>
    </section>
</>
  );
}
