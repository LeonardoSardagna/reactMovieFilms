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
        queryFn: fetchData, //Passando a url para acessar o banco de dados
        queryKey: ['films-data'], //Chave para indentificar os dados que estamos solicitandos
        retry: 2,
        refetchInterval: 60 * 5 * 1000
    })

    return {
        ...query,
        data: query.data?.data
    }
}