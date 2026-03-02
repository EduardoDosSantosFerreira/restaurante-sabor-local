import React from 'react';
import './Cardapio.css';

const Cardapio = ({ itens, whatsappNumber }) => {
    return (
        <section className="section" id="cardapio">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Nosso cardápio</h2>
                    <p className="section-subtitle">Clique no WhatsApp para pedir o seu</p>
                </div>
                <div className="services-grid">
                    {itens.map(item => (
                        <div className="service-card" key={item.id}>
                            <div className="card-icon">
                                <i className={`fas ${item.icone}`}></i>
                            </div>
                            <h3>{item.nome}</h3>
                            <p>{item.descricao}</p>
                            <div className="price-tag">{item.preco}</div>
                            <a 
                                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(item.mensagem)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-card-wpp"
                            >
                                <i className="fab fa-whatsapp"></i> Pedir
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cardapio;
