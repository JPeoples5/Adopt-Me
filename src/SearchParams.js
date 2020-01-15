import React, { useState, useEffect } from "react";
//Parcel reaches out to FEM and installs {ANIMALS}
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  //this is a hook, all begin with 'use'| useState always give back an array
  //never use hooks inside loops
  const [location, setLocation] = useState("Seattle, WA");
  //const [animal, setAnimal] = useState("dog");
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  // const [breed, setBreed] = useState(""); ||||| Used thisway before useDropdown component
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);
  const [breeds, setBreeds] = useState([]);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            //single line arrow functions {} are optional
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        {/* <BreedDropdown /> */}
        {/* <AnimalDropdown /> */}

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
