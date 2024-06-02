import axios from "axios";
import { useQuery } from "react-query";

export interface Episodio {
    temporada: number;
    numeroEpisodio: number;
    titulo: string;
}

export interface Temporada {
    numero: number;
    episodios: Episodio[];
}

const API_URL = 'http://localhost:8080';

const fetchData = async (id: number, temporada?: number) => {
    const url = temporada
    ? `${API_URL}/series/${id}/temporadas/${temporada}`
    : `${API_URL}/series/${id}/temporadas/todas`;
    const response = await axios.get(url);
    console.log(response.data)
    return response;
}

const episodioPorTemporada = (episodios: Episodio[]): Temporada[] => {
    const agrupamento = episodios.reduce((cont:Temporada[], episodio) => {
        const temp = cont.find(t => t.numero === episodio.temporada)
        if(temp){
            temp.episodios.push(episodio)
        }else{
            cont.push({
                numero: episodio.temporada,
                episodios: [episodio] 
            })
        }
        return cont
    }, []);
    return agrupamento
}

export function useTemp(id: number, temporada?: number) {
    const query = useQuery({
        queryFn: () => fetchData(id, temporada),
        queryKey: ['films-temp'],
        retry: 2,
    })

    const dadosAgrupamento = query.data ? episodioPorTemporada(query.data.data) : [];

    return {
        ...query,
        data: dadosAgrupamento
    }
}