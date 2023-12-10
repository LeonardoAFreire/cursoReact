import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function Produto({ produto }) {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    async function fetchProduto() {
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${produto}`
      );
      const json = await response.json();

      setDados(json);
    }

    if (produto) {
      fetchProduto();
    }
  }, [produto]);

  if (!dados) {
    return null;
  }

  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
      <img src={dados.fotos[0].src} alt={dados.descricao} />
    </div>
  );
}

export default Produto;
