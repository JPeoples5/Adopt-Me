import React from "react";

export default function Pet({ name, animal, breed, media, location, id }) {
  let hero = "http://placecorgi.com/300/300";
  if (media.length) {
    hero = medio[0].small;
  }

  return(
    <a href={`/details/${id}} className="pet"`}
  )
}

//non destructured
// const Pet = props => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h2>{props.animal}</h2>
//       <h2>{props.breed}</h2>
//     </div>
//   );
// };

// export default Pet;
