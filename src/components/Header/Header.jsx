import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
            <div className="header__container">
                <a href="#" className="header__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    BCN
                </a>

                <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
                    <button onClick={() => scrollToSection('why')}>Why Barcelona</button>
                    <button onClick={() => scrollToSection('places')}>Must Visit</button>
                    <button onClick={() => scrollToSection('transport')}>How To Get There</button>
                </nav>

                <button
                    className={`header__menu-btn ${isMenuOpen ? 'header__menu-btn--open' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
