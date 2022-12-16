import React from 'react';

const listStyle = {
  color: 'blue',
  listStyle: 'none',
  fontFamily: 'sans-serif'
}

function App() {
  // forma incorreta
  /*   const produtos = [<li key="e1 ">Notebook</li>, <li key="e2">Smartphone</li>, <li key="e3">Console</li>] */

  // forma correta
/*   const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight'];

  return (
    <ul>
      {filmes.map((filme) => (
        <li key={filme}>{filme}</li>
      ))}
    </ul>
  ); */

  const livros = [
            {nome: 'A Game of Thrones', ano: 1996},
            {nome: 'A Clash of Kings', ano: 1998},
            {nome: 'A Storm of Swords', ano : 2000}
        ];

  return (
    <ul>
      {/* destructuring */}
      {livros.filter(({ano}) => ano >= 1998).map(({nome, ano}) => (
        <li key={nome}>{nome} - {ano}</li>))}
    </ul>
  )

    // Obrigatório o uso da `key`
}

export default App;
