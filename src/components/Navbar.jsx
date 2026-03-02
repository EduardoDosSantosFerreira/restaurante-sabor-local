import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ logoNome, whatsappNumber }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const wppLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de fazer um pedido.`;

    return (
        <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="container navbar-container">
                <a href="#hero" className="logo" onClick={closeMenu}>
                    <i className="fas fa-utensils"></i> <span>{logoNome}</span>
                </a>
                
                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="navMenu">
                    <ul className="nav-list">
                        <li><a href="#hero" className="nav-link" onClick={closeMenu}>Início</a></li>
                        <li><a href="#sobre" className="nav-link" onClick={closeMenu}>Sobre</a></li>
                        <li><a href="#cardapio" className="nav-link" onClick={closeMenu}>Cardápio</a></li>
                        <li><a href="#contato" className="nav-link" onClick={closeMenu}>Contato</a></li>
                    </ul>
                </nav>

                <div className="navbar-actions">
                    <a href={wppLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-nav-wpp">
                        <i className="fab fa-whatsapp"></i> <span>Faça seu pedido</span>
                    </a>
                    <button className="menu-toggle" onClick={toggleMenu} aria-label="Menu">
                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
