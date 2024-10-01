const express = require('express');
const axios = require('axios');
const cors = require('cors');  

const app = express();
app.use(express.json());

app.use(cors());

const getPokemon = async (idOrName) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
  return response.data;
};

const getPokemonSpecies = async (id) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  return response.data;
};

app.get('/pokemon/:idOrName', async (req, res) => {
  try {
    const { idOrName } = req.params;
    const data = await getPokemon(idOrName);
    const speciesData = await getPokemonSpecies(data.id);
    res.json({ ...data, flavor_text_entries: speciesData.flavor_text_entries });
  } catch (error) {
    res.status(404).json({ error: 'Pokémon não encontrado' });
  }
});

app.post('/pokemon', (req, res) => {
  const { name, type } = req.body;
  if (!name || !type) {
    return res.status(400).json({ error: 'Nome e tipo são obrigatórios' });
  }
  res.json({ message: `Pokémon ${name} do tipo ${type} foi adicionado!` });
});

app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
});
