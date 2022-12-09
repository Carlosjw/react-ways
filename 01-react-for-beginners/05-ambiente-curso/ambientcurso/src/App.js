import React from 'react';

const title = <h1>This is a title</h1>

const App= () => {
  const name = 'Carlos';
  const ramdonValue = Math.random();
  const active = true;

  function showName(sobrenome){
    return 'Carlos' + sobrenome
  }

  const carro = {
    marca: 'Ford',
    rodas:4
  }

  const estiloP = {
    color: 'blue',
    fontSize: `100rem`

  }
  return (
    <>
      {title}
      <p>{true ? "true" : "false"}</p>
      {showName(`Lima`)}
      <p>{name}</p>
      {/* Passando expressões no JSX */}
      <p style={estiloP}>Valor randônico: {ramdonValue * 1.5}</p>
      <p className={active ? 'active' : 'desactive'}></p>
      <p style={estiloP}>{new Date().getFullYear()}</p>
      <span>{carro.marca} tem {carro.rodas} rodas.</span>
    </>
  );
}

export default App;
