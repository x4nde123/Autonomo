import './index.scss';

import { useState } from 'react';


export default function Teste(){

const [isOpen, setIsOpen] = useState(false);

// Toggle para abrir/fechar a tabela com o hover
const handleMouseEnter = () => setIsOpen(true);
const handleMouseLeave = () => setIsOpen(false);

    return (
        <div 
        className="opcoes-container" 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
        >
        <button className="botao-opcoes">Opções</button>
        <div className={`tabela-opcoes ${isOpen ? 'aberta' : ''}`}>
            <ul>
                <li>Opção 1</li>
                <li>Opção 2</li>
                <li>Opção 3</li>
                <li>Opção 4</li>
            </ul>
        </div>
        </div>
    );
}