import React, { useRef, useState } from 'react';

function Notificacao() {
  const [contar, setContar] = useState(0);
  const [notificacao, setNotificacao] = useState(null);
  const timeoutRef = useRef();

  function handleClick() {
    setNotificacao('Obrigado por comprar');

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 1000);

    setContar(contar + 1);
  }

  return (
    <div>
      {notificacao}
      <button style={{ display: 'block' }} onClick={handleClick}>
        {contar}
      </button>
    </div>
  );
}

export default Notificacao;
