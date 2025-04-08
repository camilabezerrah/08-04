import React from 'react';
import './atividade3.css';
import MenuItem from './MenuItem';
import menuData from './Data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cardápio do Restaurante IFPR</h1>
      </header>
      <main>
        <div className="menu-container">
          {menuData.map((item, index) => (
            <MenuItem 
              key={index}
              nome={item.nome}
              descricao={item.descricao}
              preco={item.preco}
              imgSrc={item.imgSrc}
            />
          ))}
        </div>
      </main>
      <footer>© Restaurante IFPR 2025</footer>
    </div>
  );
}

export default App;