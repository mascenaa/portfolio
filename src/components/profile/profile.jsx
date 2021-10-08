import React from "react";

// Modules

// Assets
import "../../assets/profile/profile.css";
import location from '../../assets/profile/location.svg'
import mail from '../../assets/profile/mail.svg'
import twitter from '../../assets/profile/twitter.svg'


export default function Profile() {
  return (
    <div className="box-profile">
      <div className="box-user">
        <img className="avatar" src={"https://github.com/patrooooo.png"} />
        <h1 className="user">mascena</h1>
        <p>Welcome to my portfolio, I hope you enjoy this trip. </p>
        <p>
          Actually I am focused on Front-End, but I am ready for new
          experiences!
        </p>
        <ul>
          <li><img className="bio-icons" src={location} />sp - brazil</li>
          <li><img className="bio-icons" src={twitter} />@webcoroinha</li>
          <li><img className="bio-icons" src={mail} />developermascena@gmail.com</li>
        </ul>
      </div>

      <div className="box-lg">
        <h2>Languages</h2>
        <img className="imgsrc" src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
        <img className="imgsrc" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
        <img className="imgsrc" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
        <img className="imgsrc" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
        <img className="imgsrc" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
        <img className="imgsrc" src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" />
        <h2>Frameworks</h2>
        <img className="imgsrc" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
        <img className="imgsrc" src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
        <img className="imgsrc" src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
        <img className="imgsrc" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
      </div>
    </div>
  );
}
