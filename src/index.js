import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Posts } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>

      <button onClick={
        () => {
          setCounter(50);
        }
      }>
        reiniciar
      </button>
    </div>
  );
}

root.render(
  <>
    <Counter />
  </>
);
