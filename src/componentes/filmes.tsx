interface FilmsProps{
    id?: number,
    titulo: string,
    ano: string,
    totalDeTemporada: number,
    avaliacao: number,
    descicao: string,
    atores: string,
    imagem: string
}

export function CardFilms({ano,atores,avaliacao,descicao,imagem,titulo,totalDeTemporada}: FilmsProps){
    return(
        <div>
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