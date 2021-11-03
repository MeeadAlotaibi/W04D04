import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]);

  //promises fetch
  // useEffect(() => {
  //   // 1- get the data from the api
  //   fetch("https://api.pokemontcg.io/v2/cards")
  //     .then((response) => response.json())
  //     .then((body) => {
  //       // 2- check on the data object
  //       console.log(body.data);
  //       // 3- store the data in a variable
  //       setPokemon(body.data);
  //     });

  // }, []);

  //async await inside useEffect fetch
  // useEffect(async () => {
  //   const response = await fetch("https://api.pokemontcg.io/v2/cards");
  //   const body = await response.json();
  //   setPokemon(body.data);
  // }, []);

  //async await outside useEffect fetch
  // useEffect(() => {
  //   getPokemon();
  // }, []);

  // const getPokemon = async () => {
  //   const response = await fetch("https://api.pokemontcg.io/v2/cards");
  //   const body = await response.json();
  //   setPokemon(body.data);
  // };

  //promises axios
  // useEffect(() => {
  //   // 1- get the data from the api
  //   axios
  //     .get("https://api.pokemontcg.io/v2/cards?pageSize=10")
  //     .then((response) => setPokemon(response.data.data));
  // }, []);

  //async await inside useEffect axios
  // useEffect(async () => {
  //   const response = await axios.get(
  //     "https://api.pokemontcg.io/v2/cards?pageSize=10"
  //   );
  //   // console.log(response);
  //   setPokemon(response.data.data);
  // }, []);

  // async await outside useEffect fetch
  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    const response = await axios.get(
      "https://api.pokemontcg.io/v2/cards?pageSize=10"
    );
    setPokemon(response.data.data);
  };

  return (
    <div className="App">
      {pokemon.length ? (
        <ul>
          {pokemon.map((poke, i) => (
            <div key={i}>
              <li>{poke.name}</li>
              <img
                src={poke.images.large}
                style={{ height: "100px", width: "100px" }}
              />
            </div>
          ))}
        </ul>
      ) : (
        <h1>Loading... </h1>
      )}
    </div>
  );
}

export default App;
