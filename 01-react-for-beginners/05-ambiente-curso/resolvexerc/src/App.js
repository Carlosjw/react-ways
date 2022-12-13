import React from "react";

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

function App() {
  const dados = mario;

  let total = dados.compras
  .map(item => Number(item.preco.replace("R$ ", "")))
  .reduce((beforeValue, atualValue) => beforeValue + atualValue)

  return (
    <div className="App">
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>Situação: <span style={{color: dados.ativa ? 'green' : 'red'}}>{dados.ativa ? "Ativa" : "Inativa"}</span></p>
      <p>Total: {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
      {total > 10000 && <p>'Você está gastando muito.'</p>}
       
    </div>
  );
}

export default App;
