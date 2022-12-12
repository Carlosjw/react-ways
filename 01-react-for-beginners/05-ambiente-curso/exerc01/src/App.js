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

const styleAtivo = {
    color: 'green'
}

const styleInativo = {
    color: 'red'
}

const App = () => {
  const dados = mario;
  let sitituacao = dados.ativa ? "Ativa" : "Inativa"; 
  let gastos = Object.keys(dados.compras);
  console.log(gastos)
  
  console.log(gastos) 
  return (
    <div className="App">
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>Situação: <span style={dados.ativa ? styleAtivo : styleInativo}>{sitituacao}</span></p>
    </div>
  );
}

export default App;
