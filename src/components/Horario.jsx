import React from 'react';
import './Horario.css';

const Horario = ({ horarios }) => {
    return (
        <section className="section schedule-section">
            <div className="container">
                <div className="schedule-card">
                    <h3><i className="fas fa-clock"></i> Horário de Funcionamento</h3>
                    <div className="schedule-grid">
                        {horarios.map((horario, index) => {
                            const [dia, hora] = horario.split(': ');
                            return (
                                <div key={index}><strong>{dia}:</strong> {hora}</div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Horario;
