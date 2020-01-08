//replacing {props} with the key is called restructuring
//reduced the need to say props.name
const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const x = 5;
const App = () => {
  /*Components are just something that contain markup*/
  /*Anytiime APP gets called it will create */
  /*params in createElement are: type of tag(div), attrs to give component (id: "im and attrb"), children */
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "hey im called an attrb" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Golden Shepard"
    }),

    React.createElement(Pet, {
      name: "Iqarus",
      animal: "Guinea Pig",
      breed: "slickback"
    }),

    React.createElement(Pet, {
      name: "Rudolph",
      animal: "Reindeer",
      breed: "Rednose"
    })
  ]);
};

/* Tell React to render , what to render, and where to render it*/
ReactDOM.render(React.createElement(App), document.getElementById("root"));
