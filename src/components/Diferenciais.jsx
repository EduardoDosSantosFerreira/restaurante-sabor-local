import React from 'react';
import './Diferenciais.css';

const Diferenciais = ({ diferenciais }) => {
    return (
        <section className="section section-diff">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Nossos diferenciais</h2>
                    <p className="section-subtitle">Por que clientes escolhem a gente</p>
                </div>
                <div className="differentials-list">
                    {diferenciais.map((item, index) => (
                        <div className="diff-item" key={index}>
                            <i className={`fas ${item.icone}`}></i>
                            <span>{item.texto}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Diferenciais;
