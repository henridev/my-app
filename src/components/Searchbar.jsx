import React, { useState } from "react";

export default function Searchbar(props) {
    const [state, setState] = useState();

    const handleChange = (e) => {
        setState(e.target.value);
    };

    return (
        <>
            <div>
                <h1>Hello!</h1>
                <h2>Good to see you here.</h2>
            </div>
            <input onChange={handleChange} placeholder="search here"></input>
            <button onClick={fetchSuggestions}>search</button>
            {JSON.stringify(props, null, 2)}
            {JSON.stringify({state}, null, 2)}
        </>
    );
}
