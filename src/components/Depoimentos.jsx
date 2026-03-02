import React from 'react';
import './Depoimentos.css';

const Depoimentos = ({ depoimentos }) => {
    return (
        <section className="section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">O que nossos clientes dizem</h2>
                    <p className="section-subtitle">Feedbacks reais de quem já experimentou</p>
                </div>
                <div className="testimonials-grid">
                    {depoimentos.map(item => (
                        <div className="testimonial-card" key={item.id}>
                            <p className="testimonial-text">"{item.texto}"</p>
                            <div className="testimonial-author">
                                <i className="fas fa-user-circle"></i>
                                <div>
                                    <h4>{item.autor}</h4>
                                    <span>{item.detalhe}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Depoimentos;
