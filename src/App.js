import React from "react";
//pull just 'render' module from react-dom
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Rudolph" animal="Rednose" breed="Reindeer" />
      <Pet name="Iqarus" animal="Guinea Pig" breed="Slickback" />
    </div>
  );
};
render(<App />, document.getElementById("root"));
