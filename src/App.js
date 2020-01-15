import React from "react";
//pull just 'render' module from react-dom
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};
render(<App />, document.getElementById("root"));
