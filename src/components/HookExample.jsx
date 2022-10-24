import { useState } from "react";
import usePokemons from "../hooks/usePokemons";

function HookExample() {
    const [pokemons] = usePokemons();
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>Click me</button>
            </div>
            {pokemons.map((pokemon) => (
                <div key={pokemon.name}>{pokemon.name}</div>
            ))}
        </div>
    );
}

export default HookExample;
