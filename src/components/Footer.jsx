import { Link as ScrollLink } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__inner">
                <ScrollLink to="hero" smooth duration={600} className="footer__logo">
                    <span className="logo-bracket">&lt;</span>Rozi<span className="logo-bracket">/&gt;</span>
                </ScrollLink>



                <div className="footer__socials">
                    <a href="https://github.com/rozichilwal" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
                    <a href="https://www.linkedin.com/in/rozi-chilwal-6b7723260" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
                    <a href="mailto:rozichilwal09@gmail.com" aria-label="Email"><FiMail /></a>
                </div>

                <p className="footer__copy">
                    Made with <FiHeart className="heart" /> by Rozi &nbsp;·&nbsp; {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
}
