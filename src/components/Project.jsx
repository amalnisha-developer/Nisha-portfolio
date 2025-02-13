import React from 'react';
import websiteImg1 from '../assets/ecommerce-websites.jpg';
import websiteImg2 from '../assets/udemy.webp';
import websiteImg3 from '../assets/react todolist.jpg';
import '../styles.css';

export default function Projects() {
    const config = {
        projects: [
            {
                image: websiteImg1,
                description: 'An E-commerce Website. Built with HTML, CSS, JS.',
                link: 'http://amalnisha.me/NostraProject/'
            },
            {
                image: websiteImg2,
                description: 'A Udemy Clone. Built with HTML, CSS & React Js.',
                link: 'https://udemy-react-self.vercel.app/'
            },
            {
                image: websiteImg3,
                description: 'An ActTodo App. Built with React.js & Tailwind CSS.',
                link: 'https://acttodo-opal.vercel.app/'
            }
        ]
    };

    return (
        <section id="projects">
            <div className="projects-container">
                <div className="projects-header">
                    <h1>Projects</h1>
                    <p>These are some of my best projects. I have built them with React.js, CSS, HTML, and JavaScript. Check them out.</p>
                </div>
                <div className="projects-grid">
                    {config.projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <img className="project-image" src={project.image} alt="Project Preview" />
                            <div className="project-desc">
                                <p>{project.description}</p>
                                <a className="view-project-btn" target="_blank" rel="noopener noreferrer" href={project.link}>
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
