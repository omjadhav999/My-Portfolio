import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png'
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://e-com-r9m3.vercel.app/" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://e-com-r9m3.vercel.app/" target="_blank" rel="noreferrer"><h2>E-Com Website</h2></a>
                <p>Created a MERN stack e-commerce platform with real-time product updates, secure login system, and interactive cart functionality. Enabled role-based access for admins and users, integrated PayPal for seamless payments, and delivered a fully responsive user experience.</p>
            </div>
            <div className="project">
                <a href="https://job-listing-portal-henna.vercel.app/" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://job-listing-portal-henna.vercel.app/" target="_blank" rel="noreferrer"><h2>Job Listing Portal</h2></a>
                <p>A full-stack MERN application that connects recruiters and job seekers with real-time listings and secure user authentication. Features role-based access, resume uploads, and responsive UI with Material-UI.</p>
            </div>
            <div className="project">
                <a href="https://github.com/omjadhav999/project-management-system" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/omjadhav999/project-management-system" target="_blank" rel="noreferrer"><h2>Project Management System</h2></a>
                <p>A full-stack Project Management System Web Application built using the MERN stack. It allows teams and individuals to manage projects, assign tasks, set deadlines, and collaborate efficiently in real time.</p>
            </div>
            <div className="project">
                <a href="https://population-web.vercel.app/" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://population-web.vercel.app/" target="_blank" rel="noreferrer"><h2>Population Density Website</h2></a>
                <p>An interactive data visualization tool that displays population statistics using charts and maps. Built with React and external APIs to provide demographic insights and trends.</p>
            </div>
            <div className="project">
                <a href="https://rms-sand-eight.vercel.app/" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://rms-sand-eight.vercel.app/" target="_blank" rel="noreferrer"><h2>Result Management System</h2></a>
                <p>A web-based system for administrators to upload and manage student marks via Excel sheets. Students can securely view real-time updates across attendance, assessments, and projects.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;