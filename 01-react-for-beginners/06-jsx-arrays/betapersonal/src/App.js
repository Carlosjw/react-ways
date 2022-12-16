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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'silver',
    borderRadius: '10px',
}

const listStyle = {
  listStyle: 'none'
}

function App() {
  return (
    <div className="App" style={divStyle}>
      <p>{myself.name}</p>
      {myself.hobbies.map((hobbie) => (
        <ul key={hobbie}>
          <li style={listStyle}>{hobbie}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;
