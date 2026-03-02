import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Cardapio from './components/Cardapio';
import Diferenciais from './components/Diferenciais';
import Depoimentos from './components/Depoimentos';
import Horario from './components/Horario';
import CTA from './components/CTA';
import Contato from './components/Contato';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import { cardapioData, diferenciaisData, depoimentosData, configData } from './data/cardapioData';

function App() {
    return (
        <div className="App">
            <Navbar logoNome={configData.nome} whatsappNumber={configData.whatsappNumber} />
            <Hero whatsappNumber={configData.whatsappNumber} />
            <Sobre />
            <Cardapio itens={cardapioData} whatsappNumber={configData.whatsappNumber} />
            <Diferenciais diferenciais={diferenciaisData} />
            <Depoimentos depoimentos={depoimentosData} />
            <Horario horarios={configData.horario} />
            <CTA whatsappNumber={configData.whatsappNumber} />
            <Contato config={configData} />
            <Newsletter />
            <Footer nome={configData.nome} redesSociais={configData.redesSociais} />
            <WhatsAppFloat 
                whatsappNumber={configData.whatsappNumber} 
                mensagem={configData.mensagemPadrao}
            />
        </div>
    );
}

export default App;
