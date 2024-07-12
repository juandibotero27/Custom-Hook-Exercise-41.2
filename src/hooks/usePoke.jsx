import React, {useState} from 'react';
import PokeDex from '../PokeDex';

const usePokeDex = () => {
    const [pokemon, setPokemon] = useState([]);
    const addPokemon = async name => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}/`
    );
    setPokemon(pokemon => [...pokemon, { ...response.data, id: uuid() }]);

}
}
export default usePokeDex;
