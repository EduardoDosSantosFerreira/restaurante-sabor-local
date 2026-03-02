import React from 'react';
import './Sobre.css';

const Sobre = () => {
    return (
        <section className="section" id="sobre">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Nossa história</h2>
                    <p className="section-subtitle">Tradição familiar desde 1995</p>
                </div>
                <div className="about-grid">
                    <div className="about-text">
                        <p>
                            O <strong>Sabor Local</strong> nasceu do sonho de levar comida caseira de qualidade para todos. 
                            Com receitas que passam de geração em geração, nosso restaurante se tornou referência em 
                            pratos saborosos e atendimento acolhedor.
                        </p>
                        <p>
                            <strong>Missão:</strong> Proporcionar experiências gastronômicas inesquecíveis com 
                            ingredientes frescos e muito amor.
                        </p>
                        <p>
                            <strong>Diferencial:</strong> Produtos orgânicos, fornecedores locais e receitas exclusivas.
                        </p>
                    </div>
                    <div className="about-highlight">
                        <div className="highlight-card">
                            <i className="fas fa-utensils"></i>
                            <h4>+2.000 pratos servidos/mês</h4>
                        </div>
                        <div className="highlight-card">
                            <i className="fas fa-truck"></i>
                            <h4>Delivery em até 45min</h4>
                        </div>
                        <div className="highlight-card">
                            <i className="fas fa-star"></i>
                            <h4>4.8 avaliação no iFood</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sobre;
