import React, { useEffect, useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";

const reducer = (state, action) => {
  if(action.type === "INCR") {
    state = state + 1;
  }
  if((state > 0) && (action.type === "DECR")) {
    state = state - 1;
  }
  return state;
}

function App() {
  const initialData = 0;
  const [state, dispatch] = useReducer(reducer, initialData);

  useEffect(() => {
    document.title = `Chat(${state})`;
  })

  return (
    <div className="App">
      <h1>{state}</h1>
      <div className="buttons">
        <button className="btn" onClick={() => dispatch({type:"INCR"})}>Increment</button>
        <button className="btn" onClick={() => dispatch({type:"DECR"})}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
