import { useRef, useState } from 'react';

function Comentarios() {
  const [comentarios, setComentarios] = useState([]);
  const [input, setInput] = useState('');
  const inputElement = useRef();

  function handleClick() {
    if (input) {
      setComentarios((comentarios) => [...comentarios, input]);
      setInput('');
      inputElement.current.focus();
    }
  }

  return (
    <>
      <div>
        <ul>
          {comentarios.map((comentario, index) => (
            <li key={index}>{comentario}</li>
          ))}
        </ul>
        <label htmlFor="comentario">Adicionar Comentario</label>
        <input
          id="comentario"
          type="text"
          value={input}
          ref={inputElement}
          onChange={({ target }) => setInput(target.value)}
        />
        <button onClick={handleClick}>Enviar</button>
      </div>
    </>
  );
}

export default Comentarios;
