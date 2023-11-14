import React from "react";

function App() {
  var count = 0;

  function increaseCount() {
    count++;
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increaseCount}>+</button>
    </div>
  );
}

export default App;
