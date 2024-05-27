import { filmsData } from "../interface/filmsData"

export function CardFilms({ano,atores,avaliacao,descicao,imagem,titulo,totalDeTemporada}: filmsData){
    return(
        <div className="px-10">
            <img src={imagem} alt={titulo} />
            <div>
                <h2>{titulo}</h2>
                <div>
                    <p>{descicao}</p>
                    <p>{avaliacao}</p>
                    <p>{atores}</p>
                    <p>{ano}</p>
                    <p>{totalDeTemporada}</p>
                </div>
            </div>
        </div>
    )
}