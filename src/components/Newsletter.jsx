import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!email || !email.includes('@')) {
            alert('Por favor, digite um e-mail válido.');
            return;
        }

        setStatus('loading');
        
        setTimeout(() => {
            setStatus('success');
            setEmail('');
            
            const toast = document.createElement('div');
            toast.className = 'toast-notification';
            toast.textContent = 'Obrigado! Você receberá nossas novidades.';
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.remove();
                setStatus('idle');
            }, 3000);
        }, 1500);
    };

    return (
        <section className="section newsletter-section">
            <div className="container">
                <div className="newsletter-card">
                    <h3><i className="fas fa-envelope-open-text"></i> Receba novidades</h3>
                    <p>Cadastre-se e ganhe 10% OFF na primeira compra</p>
                    <form className="newsletter-form" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Seu melhor e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            disabled={status === 'loading'}
                        />
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? 'Enviando...' : 'Cadastrar'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
