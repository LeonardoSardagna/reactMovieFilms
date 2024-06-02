import axios, { AxiosPromise } from "axios";
import { FilmsData } from "../interface/filmsData";
import { useQuery } from "react-query";

const API_URL = 'http://localhost:8080';
const fetchData = async (busca: string): AxiosPromise<FilmsData[]> => {
    const response = await axios.get(`${API_URL}/series/busca?q=${busca}`);
    console.log(response.data)
    return response;
}

export function useBusca(busca: string) {
    const query = useQuery({
        queryFn: () => fetchData(busca), 
        queryKey: ['films-busca', busca],
        retry: 2,
    })

    return {
        ...query,
        data: query.data?.data
    }
}