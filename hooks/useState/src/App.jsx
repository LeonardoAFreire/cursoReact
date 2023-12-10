// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

import { useState } from 'react';
import Produto from './Produto';

function App() {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleClick({ target }) {
    try {
      setLoading(true);
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${target.innerText}`
      );
      const json = await response.json();

      setDados(json);
      setLoading(false);
    } catch (error) {
      console.log(`Erro: `, error);
    }
  }

  return (
    <>
      <button onClick={handleClick}>tablet</button>
      <button onClick={handleClick}>smartphone</button>
      <button onClick={handleClick}>notebook</button>

      {loading && <p>Carregando...</p>}
      {!loading && dados && <Produto dados={dados} />}
    </>
  );
}

export default App;
