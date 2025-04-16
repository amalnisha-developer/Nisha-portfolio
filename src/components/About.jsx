import React from 'react';
import Aboutme from '../assets/aboutsme.png';
import '../styles.css';

export default function About() {
    const config = {
        line1: 'Hi, My name is Amal Nisha. I am a Web developer. I build beautiful websites with React.js, and Tailwind CSS.',
        line2: 'I am proficient in frontend skills like React.js, HTML, CSS, JavaScript, Tailwind CSS, CSS3, and many more.',
        line3: 'I also have experience in cloud services, AWS, DevOps practices, Git, and GitLab.'
    };

    return (
        <section id='about'>
            <div className='about-container'>
                <img src={Aboutme} alt="About Me" />
                <div className='about-text'>
                    <h1>About Me</h1>
                    <p>{config.line1}</p>
                    <p>{config.line2}</p>
                    <p>{config.line3}</p>
                </div>
            </div>
        </section>
    );
}
