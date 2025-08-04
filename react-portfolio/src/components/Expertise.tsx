import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faCode } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Postman",
    "JWT"
];

const labelsSecond = [
    "C",
    "C++",
    "JavaScript",
    "Python",
    "Go"
];

const labelsThird = [
    "Git",
    "Github",
    "Vercel",
    "Netlify"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development (MERN Stack)</h3>
                    <p>I specialize in building responsive, full-stack web applications using the MERN stack. I am experienced in building secure APIs, RESTful services, authentication systems, and dynamic UIs following best practices of the SDLC.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Data Structures and Algorithms (DSA)</h3>
                    <p>Strong grasp of core algorithms, problem-solving patterns, and data structures. Regularly practice and solve problems on platforms like LeetCode and CodeChef, improving both logic-building and optimization skills.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGitAlt} size="3x"/>
                    <h3>Version Control and Deployment</h3>
                    <p>Efficient in using Git and GitHub for version control. I deploy full-stack apps using services like Vercel and Netlify, ensuring smooth CI/CD workflows.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;