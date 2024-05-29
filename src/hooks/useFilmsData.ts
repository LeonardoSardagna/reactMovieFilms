import axios, { AxiosPromise } from "axios";
import { FilmsData } from "../interface/filmsData";
import { useQuery } from "react-query";

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<FilmsData[]> => {
    const response = await axios.get(API_URL + "/series");
    return response;
}

export function useFilmsData() {
    const query = useQuery({
        queryFn: fetchData, 
        queryKey: ['films-data'],
        retry: 2,
        refetchInterval: 60 * 5 * 1000
    })

    return {
        ...query,
        data: query.data?.data
    }
}