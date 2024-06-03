import axios, { AxiosPromise } from "axios";
import { FilmsData } from "../interface/filmsData";
import { useQuery } from "react-query";

const API_URL = 'http://localhost:8080';
const fetchData = async (nomeCategoria: string): AxiosPromise<FilmsData[]> => {
    const response = await axios.get(`${API_URL}/series/categoria/${nomeCategoria}`);
    return response
}

export function useGenero(nomeCategoria: string) {
    const query = useQuery({
        queryFn: () => fetchData(nomeCategoria),
        queryKey: ['films-genero', nomeCategoria],
        retry: 2,
        refetchInterval: false
    })

    return {
        ...query,
        genero: query.data?.data
    }
}