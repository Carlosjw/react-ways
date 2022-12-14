import React from 'react';

function App() {
  const produtos = [<li key="e1 ">Notebook</li>, <li key="e2">Smartphone</li>]
  return (
    <div className="App">
      {produtos}
    </div>
  );
}

export default App;
