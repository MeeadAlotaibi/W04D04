import React from "react";

const Cards = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {}, []);

  const getPokemon = async () => {
    const response = await axios.get(
      "https://api.pokemontcg.io/v2/cards?pageSize=10"
    );
    setPokemon(response.body.data);
  };
  return (
    <div className="pokemon">
      {pokemon.length ? (
        <ul>
          {pokemon.map((poke, i) => (
            <div key={i}>
              <li>{poke.name}</li>
              <img
                src={poke.images.larg}
                style={{ height: "100px", width: "100px" }}
              />
            </div>
          ))}
        </ul>
      ) : (
        <h1> Loading ... </h1>
      )}
    </div>
  );
};

export default Cards;
