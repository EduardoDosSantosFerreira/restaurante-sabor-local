import React from 'react';
import './WhatsAppFloat.css';

const WhatsAppFloat = ({ whatsappNumber, mensagem }) => {
    const wppLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;

    return (
        <a 
            href={wppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="WhatsApp"
        >
            <i className="fab fa-whatsapp"></i>
        </a>
    );
};

export default WhatsAppFloat;
