import React from 'react';

function MenuItem({ nome, descricao, preco, imgSrc }) {
  return (
    <section className="menu-item">
      <h2>{nome}</h2>
      <img src={imgSrc} alt={nome} loading="lazy" />
      <p>{descricao}</p>
      <p><strong>R$ {preco}</strong></p>
      <button className="adicionar-carrinho" aria-label={`Adicionar ${nome} ao carrinho`}>
        Adicionar ao Carrinho
      </button>
    </section>
  );
}

export default MenuItem;