import axios, { AxiosPromise } from "axios";
import { FilmsData } from "../interface/filmsData";
import { useQuery } from "react-query";

const API_URL = 'http://localhost:8080';
const fetchLancamento = async (): AxiosPromise<FilmsData[]> => {
    const response = await axios.get(API_URL + "/series/top5");
    return response;
}

export function useTop5() {
    const query = useQuery({
        queryFn: fetchLancamento,
        queryKey: ['films-top5'],
        retry: 2,
        refetchInterval: 60 * 5 * 1000
    })

    return {
        ...query,
        top5: query.data?.data
    }
}