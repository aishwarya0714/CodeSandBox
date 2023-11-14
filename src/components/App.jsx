import React, { useState } from "react";

function App() {
  const [state, setState] = useState(0);
  console.log(state);
  function increaseCount() {
    setState(state + 1);
  }
  function decreaseCount() {
    setState(state - 1);
  }
  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
    </div>
  );
}

export default App;
