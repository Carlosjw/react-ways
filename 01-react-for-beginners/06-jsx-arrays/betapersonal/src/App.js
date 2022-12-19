import React from "react";

const myself = {
  name: 'Carlos Lima',
  age: 35,
  weight: 74,
  hobbies: [
    'Estudar',
    'Tocar Violão', 
    'Andar de Bicicleta'
  ]
}

const divStyle = {
    width: '250px',
    height: '250px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'silver',
    borderRadius: '10px',
    boxShadow: '2px 8px 9px rgba(0, 0, 0, 0.5)'
}

const listStyle = {
  listStyle: 'square',
  marginLeft: '25px'
}

const nameStyle = {
  fontWeight: 'bold',
}

function App() {
  return (
    <div className="App" style={divStyle}>
      <h1>{myself.name}</h1>
      {myself.hobbies.map((hobbie) => (
        <ul key={hobbie}>
          <li style={listStyle}>{hobbie}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;
