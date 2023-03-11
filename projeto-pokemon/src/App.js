import React from 'react';
import Pokemon from "./components/pokemon";


function App() {
  const [pokemon, setPokemon] = React.useState({});
  const [num_poke, setNumPoke] = React.useState(1);

  function Carregar(){
    fetch(`https://pokeapi.co/api/v2/pokemon/${num_poke}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setPokemon(data);
    });
  }

  function Proximo(){
    setNumPoke(num_poke + 1);
  }

  function Voltar(){
    if(num_poke != 1)
    setNumPoke(num_poke - 1);
  }

  React.useEffect(()=>{
    Carregar();
  },[num_poke]);

  React.useEffect(()=>{
    Carregar();
  },[]);

  return (
    pokemon.sprites ?
      <div class=" col-md-12 text-center d-flex align-items-center justify-content-center text-white bg-secondary">
        <div class = "w-75 p-3 bg-danger  border-dark border border-4">
        <h2>Nº {num_poke}</h2>
          <Pokemon imagem = {pokemon.sprites.front_default} pokemon = {pokemon} controle = {{num_poke, Proximo, Voltar}}/>

        </div>
        
        
      </div>
    :
    <div class=" col-md-12 text-center d-flex align-items-center justify-content-center text-white bg-secondary">
      <div class="w-75 p-3 bg-danger  border-dark border border-4">
        <button class="btn  btn-secondary " onClick={Carregar}>Carregar</button>
      </div>
    </div>
  );
}

export default App;
