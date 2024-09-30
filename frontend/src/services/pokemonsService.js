import axios from 'axios';

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
const POKEAPI_SPECIES_URL = 'https://pokeapi.co/api/v2/pokemon-species';

export const getPokemon = async (idOrName) => {
  try {
    const response = await axios.get(`${POKEAPI_BASE_URL}/${idOrName}`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar Pokémon');
  }
};

export const getPokemonSpecies = async (id) => {
  try {
    const response = await axios.get(`${POKEAPI_SPECIES_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar informações da espécie do Pokémon');
  }
};

export const getAllPokemons = async () => {
};
