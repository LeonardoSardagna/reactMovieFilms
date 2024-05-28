import axios, { AxiosPromise } from "axios";
import { FilmsData } from "../interface/filmsData";
import { useQuery } from "react-query";

const API_URL = 'http://localhost:8080';

const fetchLancamento = async (): AxiosPromise<FilmsData[]> => {
    const response = await axios.get(API_URL + "/series/lancamentos");
    return response;
}

export function useLancamentos() {
    const query = useQuery({
        queryFn: fetchLancamento, //Passando a url para acessar o banco de dados
        queryKey: ['films-lancamento'], //Chave para indentificar os dados que estamos solicitandos
        retry: 2,
        refetchInterval: 60 * 5 * 1000
    })

    return {
        ...query,
        lancamentos: query.data?.data
    }
}