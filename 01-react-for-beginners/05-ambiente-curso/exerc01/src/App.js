import React from 'react';

const luana = {
  cliente: 'Luana',
  idade:27,
  compras: [
    {nome: 'Notebook', preco: 'R$ 2500'},
    {nome: 'Geladeira', preco: 'R$ 3000'},
    {nome: 'Smartphone', preco: 'R$ 1500'},
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    {nome: 'Notebook', preco: 'R$ 2500'},
    {nome: 'Geladeira', preco: 'R$ 3000'},
    {nome: 'Smartphone', preco: 'R$ 1500'},
    {nome: 'Guitarra', preco: 'R$ 3500'},
  ],
  ativa: false,
}

const styleActivo = {
    color: 'green'
}

const styleInativo = {
    color: 'red'
}

const App = () => {
  const dados = luana;

  return (
    <div className="App">
      <p style={styleInativo}>Teste</p>
    </div>
  );
}

export default App;
