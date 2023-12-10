// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo
import { useEffect } from 'react';
import { useState } from 'react';
import Produto from './Produto';

function App() {
  const [produto, setProduto] = useState(null);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  useEffect(() => {
    const temProduto = localStorage.getItem('produto');
    if (temProduto) {
      setProduto(temProduto);
    }
  }, []);

  useEffect(() => {
    if (produto) {
      localStorage.setItem('produto', produto);
    }
  }, [produto]);

  return (
    <>
      <h1>Preferência: {produto}</h1>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      {<Produto produto={produto} />}
    </>
  );
}

export default App;
