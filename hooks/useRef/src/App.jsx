// useRef
// Retorna um objeto com a propriedade current. Esse objeto pode ser utilizado para guardarmos valores que irão persistir durante todo o ciclo de vida do elemento. Geralmente usamos o mesmo para nos referirmos a um elemento do DOM, sem precisarmos utilizar o querySelector ou similar.

import Comentarios from './Comentarios';
import Notificacao from './Notificacao';

function App() {
  return (
    <>
      <Comentarios />
      <Notificacao />
    </>
  );
}

export default App;
