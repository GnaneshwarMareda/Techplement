import React from "react";
import "./App.css";

import RandomQuote from "./Components/RandomQuote";
const App = () => {
  return (
    <div className="App">
      <h1>Quote of the day</h1>
      <RandomQuote />
    </div>
  );
};

export default App;
