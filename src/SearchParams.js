import React, { useState, useEffect } from "react";
//pet is a client of ANIMALS
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";

const SearchParams = () => {
  //return destructure arr [initValue, function that updates value]
  const [location, updateLocation] = useState("Seattle, WA");
  const [breeds, updateBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, updateBreed] = useDropdown("Breed", "", breeds);
  const [pets, updatePets] = useState([]);

  // asyncs always returns a promise to resolve what function completes
  async function requestPets() {
    // await = waits for pet.animals() to finish then spits back data
    //only modern browesers handle can await
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });

    // if noting comes back from API then set as empty arr
    updatePets(animals || []);
  }

  //runs after render
  // used for changing breed type i.e cats -> dogs
  //when change is made it sets Breeds to [] Breed to "" then when API call is done it will populate fields
  useEffect(() => {
    updateBreeds([]);
    updateBreed("");
    //promise below
    pet.breeds(animal).then(({ breeds }) => {
      //list of objects transform to list of strings -> use map()
      //{name} desructured from breed Object
      const breedStrings = breeds.map(({ name }) => name);
      updateBreeds(breedStrings);
    }, console.error);
    //useEffect will only run on change if [animal] is changed not every new render
    //below.. [] == static results, Breed wont update after Animal reselection
  }, [animal]);

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => updateLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
