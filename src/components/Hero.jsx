import HeroImg from '../assets/developer.png';
import '../styles.css';

export default function Hero() {
    return (
        <section className='hero'>
            <div className='hero-text'>
                <h1>Hi..👋,<br />I'm Amal Nisha</h1>
                <p>A Passionate Web Developer</p>
                <div className='social-links'>
                    <a href="https://www.linkedin.com/in/amal-nisha-mernstackdeveloper/" aria-label="LinkedIn">
                        <i className="fa-brands fa-linkedin fa-2x"></i>
                    </a>
                    <a href="https://wa.me/8525986468" aria-label="WhatsApp">
                        <i className="fa-brands fa-whatsapp fa-2x"></i>
                    </a>
                    <a href="https://www.instagram.com" aria-label="Instagram">
                        <i className="fa-brands fa-instagram fa-2x"></i>
                    </a>
                </div>
            </div>
            <img className='hero-img' src={HeroImg} alt="Developer Illustration" />
        </section>
    );
}
