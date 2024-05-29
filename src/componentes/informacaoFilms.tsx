import { useInfoFilms } from "../hooks/useInfoSeries"
export function InfoFilms() {
    
    const { info } = useInfoFilms(12)

    return (
        <div>
            <div>
                <img src="" alt="" />
                <div>
                    <h1>{}</h1>
                    <p>Ano: {}</p>
                    <p>Média de avaliações: {}</p>
                    <p>{}</p>
                    <p>Estrelando: {}</p>
                </div>
                <h2>Total de Temporadas: {}</h2>
            </div>
        </div>
    )
}