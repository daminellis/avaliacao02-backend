import React, { useEffect, useState } from 'react';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRandomPokemons = async () => {
      const randomPokemons = [];
      const totalPokemons = 898;

      while (randomPokemons.length < 30) {
        const randomIndex = Math.floor(Math.random() * totalPokemons) + 1;
        if (!randomPokemons.includes(randomIndex)) {
          randomPokemons.push(randomIndex);
        }
      }

      const promises = randomPokemons.map(id =>
        fetch(`http://localhost:8080/pokemon/${id}`).then(res => res.json())
      );
      const pokemonsData = await Promise.all(promises);
      setPokemons(pokemonsData);
    };

    fetchRandomPokemons();
  }, []);

  const handleSearch = async () => {
    setError('');

    if (!searchTerm) {
      setError('Por favor, digite o nome do Pokémon.');
      setSelectedPokemon(null);
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/pokemon/${searchTerm.toLowerCase()}`);
      const data = await response.json();
      if (response.ok) {
        setSelectedPokemon(data);
      } else {
        setError('Pokémon não encontrado');
        setSelectedPokemon(null);
      }
    } catch (error) {
      setError('Erro ao buscar Pokémon');
      setSelectedPokemon(null);
    }
  };

  const handlePokemonClick = (name) => {
    setSearchTerm(name);
    handleSearch();
  };

  const formatTypes = (types) => {
    return types.map(typeInfo => typeInfo.type.name).join(', ');
  };

  const formatAbilities = (abilities) => {
    return abilities.map(abilityInfo => abilityInfo.ability.name).join(', ');
  };

  return (
    <div className="container mt-5">
      <h1>Lista de Pokémons</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Digite o nome do Pokémon"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Buscar
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {selectedPokemon ? (
        //Altura: 1 decímetro = 10 centímetros
        //Peso: 1 hectograma = 0,1 quilos
        //Vem e decimetros e hectogramas, então multiplicamos por 10 e dividimos por 10 para converter para centímetros e quilogramas
        //Alguns dados retornam em ingles por conta de vir diretamente da api
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">{selectedPokemon.name}</h5>
            <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} />
            <p className="card-text">
              <strong>Altura:</strong> {selectedPokemon.height * 10} centimetros<br />
              <strong>Peso:</strong> {selectedPokemon.weight / 10} kilos<br />
              <strong>Tipos:</strong> {formatTypes(selectedPokemon.types)}<br />
              <strong>Habilidades:</strong> {formatAbilities(selectedPokemon.abilities)}<br />
              <strong>Descrição:</strong> {selectedPokemon.flavor_text_entries.find(entry => entry.language.name === 'en')?.flavor_text || "Descrição não disponível."}
            </p>
          </div>
        </div>
      ) : (
        <ul className="list-group mt-3">
          {pokemons.map((pokemon) => (
            <li
              key={pokemon.id}
              className="list-group-item"
              style={{ cursor: 'pointer' }}
              onClick={() => handlePokemonClick(pokemon.name)}
            >
              {pokemon.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
