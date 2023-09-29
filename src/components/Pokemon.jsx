import React, { useState, useEffect } from 'react';
import '../styles/Pokemon.css'
import { useParams } from 'react-router-dom';

function Pokemon() {
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);
  const { idx } = useParams();

  useEffect(() => {
    // Obtener la lista de nombres de Pokémon disponibles desde la API
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
      .then((response) => response.json())
      .then((data) => {
        const names = data.results.map((pokemon) => pokemon.name);
        setPokemonList(names);
      });
  }, []);

  const handleSelectChange = (e) => {
    setSelectedPokemon(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${selectedPokemon.toLowerCase()}`;

    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        setPokemonData(data);
      } else {
        setPokemonData(null);
      }
    } catch (error) {
      console.error(error);
      setPokemonData(null);
    }
  };

  return (
    <div className="centered">
      <h1 data-aos="fade-left" data-aos-delay="50" data-aos-duration="500" className='Customh1'> 
      <img className='gifc' width="80px" src="src\assets\pika.gif" alt="" />
        Busca tu pokemon!
        <img className='gifc' width="100px" src="src\assets\pika2.gif" alt="" />
      </h1>
      
      <div className='customform'>
      <form  onSubmit={handleSubmit}>
       
        <select  data-aos="fade-right" data-aos-delay="50" data-aos-duration="3000" className='Customop'
          id="pokemon-select"
          value={selectedPokemon}
          onChange={handleSelectChange}
          required
        >
          
          <option value="" disabled>
            Elige un Pokémon
          </option>
          {pokemonList.map((pokemonName) => (
            <option key={pokemonName} value={pokemonName}>
              {pokemonName.toUpperCase()}
            </option>
           
          ))}
        </select>
        <button  data-aos="fade-left" data-aos-delay="50" data-aos-duration="3000"  className='custombut' type="submit">Buscar</button>
       
      </form>
      
      </div>
   
      {pokemonData && (
        
        <div className="card">
          <h3 className='paramsss'>{idx}</h3>
          <h2>{pokemonData.name.toUpperCase()}</h2>
          
          <img
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
          />
          <p>Altura: {pokemonData.height / 10} metros</p>
          <p>Peso: {pokemonData.weight / 10} kg</p>
          <p>Tipo: {pokemonData.types.map((type) => (
              <li key={type.slot}>{type.type.name}</li>
            ))}</p>
          <ul>
            
          </ul>
        </div>
      )}
      {pokemonData === null}
    </div>
  );
}

export default Pokemon;