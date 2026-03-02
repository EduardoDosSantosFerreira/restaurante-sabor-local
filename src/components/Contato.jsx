import React from 'react';
import './Contato.css';

const Contato = ({ config }) => {
    const wppLink = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(config.mensagemPadrao)}`;

    const formatPhone = (phone) => {
        return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    };

    return (
        <section className="section" id="contato">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Entre em contato</h2>
                    <p className="section-subtitle">Estamos prontos para atender você</p>
                </div>
                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="info-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>{config.endereco}</span>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-phone-alt"></i>
                            <span>{config.telefone}</span>
                        </div>
                        <div className="info-item">
                            <i className="fab fa-whatsapp"></i>
                            <span>{formatPhone(config.whatsappNumber)}</span>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-envelope"></i>
                            <span>{config.email}</span>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-clock"></i>
                            <span>{config.horario[0]}</span>
                        </div>
                        <a 
                            href={wppLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-whatsapp contact-wpp-btn"
                        >
                            <i className="fab fa-whatsapp"></i> Chamar no WhatsApp
                        </a>
                    </div>
                    <div className="map-placeholder">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197501234567!2d-46.654321!3d-23.561234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa987%3A0x23f8a8d9d9b9f9b9!2sS%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Localização do restaurante"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contato;
