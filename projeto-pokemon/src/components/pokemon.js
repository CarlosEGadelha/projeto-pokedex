import Imagem from "./imagem";
import Desc from "./descricao";

function Pokemon(props){
    return(
        <div className="row">
            <div className="col-4" class="text-center">
                <Imagem imagem={props.imagem}/>
            </div>
            <div className="col-8" class="text-center">
                <Desc pokemon = {props.pokemon} controle = {props.controle}/>
            </div>
        </div>
      
    );

}



export default Pokemon;