// import React from "react";
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container ">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://res.cloudinary.com/dzuckvltu/image/upload/v1751805510/profilepic_kqqp2e.jpg" alt="Avatar" />
        </div>
        <div className="content">
          <h1>Om Jadhav</h1>
          <h2>Full Stack Developer</h2>
          <p>A curious mind with a passion for C++ and a fascination for data structures and algorithms shape my journey as an IT Engineering student at IIIT Bhopal. I'm exploring code, logic, and creative problem-solving.
             Alongside mastering C++ and DSA, I’ve built strong skills in MERN stack development—creating full-stack web apps with MongoDB, Express.js, React.js, and Node.js. I love turning ideas into scalable, user-friendly products with clean code.
             Beyond academics, I’m a cinema lover, avid actor, and often find inspiration in nature during my college days.</p>
        </div>
      </div>
    </div>
  );
}

export default Main;

