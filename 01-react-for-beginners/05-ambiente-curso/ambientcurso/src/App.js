import React from 'react';

function App() {
  return (
    <>
      <a href='https://www.jw.org/pt' title='Site Oficial das Testemunhas de Jeová' className='ativo' id='nome'>
      JW.ORG
      </a>
      <form>
        <label htmlFor="nome">Nome</label>
        <input type="text" />
      </form>
    </>
  );
}

export default App;
