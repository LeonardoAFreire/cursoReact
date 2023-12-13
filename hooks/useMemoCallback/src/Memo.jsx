import React, { useMemo, useState } from 'react';

// Use memo
// Memoriza um valor, evitando a recriação do mesmo todas as vezes em que um componente for atualizado. Recebe um callback e uma array de dependências.

function operacaoLenta() {
  let c;
  for (let i = 0; i < 1000000000; i++) {
    c = i + i / 10;
  }
  return c;
}

function Memo() {
  const [contar, setContar] = React.useState(0);
  const t1 = performance.now();
  const valor = React.useMemo(() => operacaoLenta(), []);
  // é mais rápido que
  // const valor = operacaoLenta();
  console.log(performance.now() - t1);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
}

export default Memo;
