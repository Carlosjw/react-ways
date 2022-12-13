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

// stilos
const styleAtivo = {
    color: 'green'
}

const styleInativo = {
    color: 'red'
}

// definindo teto de gastos
const tetoGasto = 10000;

const App = () => {
  const dados = luana;

  // verificando situação do usuário
  let situacao = dados.ativa ? "Ativa" : "Inativa"; 

  // somando todos os gastos do usuário
 let gastos = dados.compras.reduce((accumulator, object) => {
  return accumulator + Number(object.preco.replace("R$ ", ""))
 }, 0);

 // exibindo mensagem de acordo com os gastos do usuario
 let status = gastos > tetoGasto ? "Você está gastando demais!" : "";

  return (
    <>
      {/* Exibindo informções em tela */}
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>Situação: <span style={dados.ativa ? styleAtivo : styleInativo}>{situacao}</span></p>
      {/* Formatação monetária brasileira */}
      <p>Total gasto: <span style={gastos < tetoGasto ? styleAtivo : styleInativo}>{gastos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></p>
      <span style={styleInativo}>{status}</span>
    </>
  );
}

export default App;
