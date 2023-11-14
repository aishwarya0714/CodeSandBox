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
  let time = new Date().toLocaleTimeString();
  const [getTime, setTime] = useState();
  function timeFun() {
    setTime(time);
  }
  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>

      <h1>{getTime}</h1>
      <button onClick={timeFun}>get time</button>
    </div>
  );
}

export default App;
