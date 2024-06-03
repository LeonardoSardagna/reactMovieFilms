import axios from "axios";
import { FilmsData } from "../interface/filmsData";
import { useQuery } from "react-query";

const API_URL = 'http://localhost:8080';
const fetchLancamento = async (): Promise<FilmsData[]> => {
    const response = await axios.get(API_URL + "/series/lancamentos");
    return response.data;
}

export function useLancamentos() {
    const query = useQuery({
        queryFn: fetchLancamento,
        queryKey: ['films-lancamento'],
        retry: 2,
        refetchInterval: 60 * 5 * 1000
    })

    return {
        ...query,
        lancamentos: query.data
    }
}