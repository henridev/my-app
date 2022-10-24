import { useState, useEffect } from "react";

// ! CUSTOM HOOK
function usePokemons() {
    const [pokemons, setpokemons] = useState([]);

    useEffect(() => {
        fetchPokemon();
    }, []);

    // ! PROMISES
    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then((x) => x.json())
            .then((data) => setpokemons(data.results));
    };

    // const fetchPokemon = async () => {
    //     const response = await fetch(
    //         "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    //     );
    //     const data = await response.json();
    //     // console.log(data.results);
    //     setpokemons(data.results);
    // };

    return [pokemons];
}

export default usePokemons;
