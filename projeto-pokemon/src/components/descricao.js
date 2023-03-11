import Tipo from "./tipo";
import Ability from "./habilidade";
import Ataques from "./ataque";

function Desc(props){
    let pokemon = props.pokemon;
    let controle = props.controle;

    return(
        <>
        <h1>{pokemon.name}</h1>
        <br></br>
        <h2>Tipo: {pokemon.types.map(tipo => <Tipo tipo = {tipo} />)}</h2>
        <br></br>
        <h2>Habilidades: {pokemon.abilities.map(ability => <Ability ability = {ability.ability}/>)}</h2>
        <br></br>   
        <h2>Ataques:</h2> 
        <div class = "row justify-content-around">
            <h3>{pokemon.moves.slice(0,1).map(move => <Ataques move = {move.move}/>)}</h3>
            <h3>{pokemon.moves.slice(3,4).map(move => <Ataques move = {move.move}/>)}</h3>
        </div>

        <div class = "row justify-content-around">
            <button class="btn btn-secondary btn-lg col-4" onClick={controle.Voltar}>Voltar</button>
            <button class="btn btn-secondary btn-lg col-4" onClick={controle.Proximo}>Proximo</button>
          </div>
        </>);
        }

export default Desc; 