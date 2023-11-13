import React from "react";
import ReactDOM from "react-dom";

var count = 0;

function increaseCount() {
  count++;

  ReactDOM.render(
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increaseCount}>+</button>
    </div>,
    document.getElementById("root")
  );
}
ReactDOM.render(
  <div className="container">
    <h1>{count}</h1>
    <button onClick={increaseCount}>+</button>
  </div>,
  document.getElementById("root")
);
