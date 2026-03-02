import React from 'react';
import './CTA.css';

const CTA = ({ whatsappNumber }) => {
    const wppLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de fazer um pedido.`;

    return (
        <section className="section cta-section">
            <div className="container cta-container">
                <h2 className="cta-title">Está com fome?</h2>
                <p className="cta-subtitle">Peça agora pelo WhatsApp e receba em casa!</p>
                <a 
                    href={wppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-large"
                >
                    <i className="fab fa-whatsapp"></i> Fazer pedido agora
                </a>
            </div>
        </section>
    );
};

export default CTA;
