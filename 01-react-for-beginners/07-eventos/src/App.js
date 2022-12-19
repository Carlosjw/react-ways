import React from "react";

function App() {

  function handleClick(event){
    console.log(event)
  }

  return (
    <div className="App">
      <button onClick={handleClick} onMouseOver={handleClick}>Clique</button>
    </div>
  );
}

export default App;
