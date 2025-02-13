import React from 'react';
import ResumeImg from '../assets/girlresume.jpg';
import '../styles.css'; // Import the CSS file

export default function Resume() {
    const config = {
        line1: 'You can view my Resume'
    };

    return (
        <section className='resume-section' id='resume'>
            <div className='resume-image'>
                <img src={ResumeImg} alt="Amal Nisha's Resume" className='resume-img' />
            </div>
            <div className='resume-content'>
                <h1 className='resume-title'>Resume</h1>
                <p className='resume-text'>
                    {config.line1} 
                    <a href="https://www.canva.com/design/DAGANNoSjEk/jW5YZ042_6zyDy3irftQ6A/edit?utm_content=DAGANNoSjEk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" 
                       download 
                       className='resume-button'>
                        Download
                    </a>
                </p>
            </div>
        </section>
    );
}
