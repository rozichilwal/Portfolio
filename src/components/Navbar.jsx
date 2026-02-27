import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const navItems = [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
    { label: 'Experience', to: 'experience' },
    { label: 'Contact', to: 'contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar__inner">
                <ScrollLink to="hero" smooth duration={600} className="navbar__logo">
                    <span className="logo-bracket">&lt;</span>
                    Rozi
                    <span className="logo-bracket">/&gt;</span>
                </ScrollLink>

                <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <ScrollLink
                                to={item.to}
                                smooth
                                duration={600}
                                offset={-70}
                                spy
                                activeClass="active"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.label}
                            </ScrollLink>
                        </li>
                    ))}
                    <li>
                        <a
                            href="/resume.pdf"
                            className="btn btn-primary navbar__resume"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Resume
                        </a>
                    </li>
                </ul>

                <button className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>
        </nav>
    );
}
