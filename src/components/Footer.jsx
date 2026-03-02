import React from 'react';
import './Footer.css';

const Footer = ({ nome, redesSociais }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-info">
                        <h3><i className="fas fa-utensils"></i> {nome}</h3>
                        <p>Comida caseira com amor e tradição desde 1995.</p>
                    </div>
                    <div className="footer-links">
                        <h4>Links rápidos</h4>
                        <ul>
                            <li><a href="#hero">Início</a></li>
                            <li><a href="#sobre">Sobre</a></li>
                            <li><a href="#cardapio">Cardápio</a></li>
                            <li><a href="#contato">Contato</a></li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <h4>Redes sociais</h4>
                        <div className="social-icons">
                            <a href={redesSociais.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href={redesSociais.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href={redesSociais.whatsapp} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {currentYear} {nome}. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
