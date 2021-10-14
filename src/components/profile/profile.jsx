import React from 'react'

 // assets 
import './profile.css'

export default function Profile() {
    return (
        <section className="profilebox">
            <div>
              <h1 className="profile-title">Hello, welcome to my portfolio!</h1>
              <p className="profile-p">It is a privilege to have you here, my name is João, I live in São Paulo - Brazil. </p>
              <p className="profile-p">Let's start our adventure? Right now I'm focused on the front-end, but in the future I intend to be a full-stack developer</p>

              <h2 className="profile-title">My skills</h2>
              <ul className="profile-list">
                  <h3 className="profile-list-title">Languages </h3>
                    <li><img className="profileimage" alt="" src="https://img.shields.io/badge/HTML5-151515?style=for-the-badge&logo=html5&logoColor=orange" /></li>
                    <li><img className="profileimage" alt="" src="https://img.shields.io/badge/CSS3-151515?style=for-the-badge&logo=css3&logoColor=blue" /></li>
                    <li><img className="profileimage" alt="" src="https://img.shields.io/badge/JavaScript-151515?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /></li>
                    <li><img className="profileimage" alt="" src="https://img.shields.io/badge/TypeScript-151515?style=for-the-badge&logo=typescript&logoColor=blue" /></li>
                    <li><img className="profileimage" alt="" src="https://img.shields.io/badge/Python-151515?style=for-the-badge&logo=python&logoColor=D98C00" /></li>
              </ul>
                <ul className="profile-list">
                     <h3 className="profile-list-title">Frameworks</h3>
                     <li><img className="profileimage" alt="" src="https://img.shields.io/badge/React-151515?style=for-the-badge&logo=react&logoColor=61DAFB" /></li>
                     <li><img className="profileimage" alt="" src="https://img.shields.io/badge/next.js-151515?style=for-the-badge&logo=nextdotjs&logoColor=white" /></li>
                     <li><img className="profileimage" alt="" src="https://img.shields.io/badge/Express.js-151515?style=for-the-badge&logo=express&logoColor=white"/></li>
                </ul>
                <ul className="profile-list"> 
                    <h3 className="profile-list-title">Learning</h3>
                    <li><img className="profileimage" alt="" src="https://img.shields.io/badge/-GraphQL-151515?style=for-the-badge&logo=graphql&logoColor=AE00FB" /></li>
                    <li><img className="profileimage" alt="" src="https://img.shields.io/badge/node.js-151515?style=for-the-badge&logo=node.js&logoColor=6ECB63" /></li>
                    <li><img className="profileimage" alt="" src="https://img.shields.io/badge/adobeillustrator-151515.svg?style=for-the-badge&logo=adobeillustrator&logoColor=yellow" /></li>
                </ul>
            </div>
        </section>
    )
}