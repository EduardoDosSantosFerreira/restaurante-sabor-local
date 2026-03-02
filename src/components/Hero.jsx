import React from 'react';
import './Hero.css';

const Hero = ({ whatsappNumber }) => {
    const wppLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de fazer um pedido.`;

    return (
        <section className="hero" id="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">O verdadeiro sabor da comida caseira</h1>
                    <p className="hero-subtitle">
                        Delivery rápido, ingredientes frescos e receitas que encantam. 
                        Experimente o melhor da culinária local!
                    </p>
                    <div className="hero-buttons">
                        <a href="#cardapio" className="btn btn-primary">Ver cardápio</a>
                        <a href={wppLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                            <i className="fab fa-whatsapp"></i> Pedir agora
                        </a>
                    </div>
                </div>
                <div className="hero-image">
                    <img 
                        src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600" 
                        alt="Prato de comida deliciosa" 
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
