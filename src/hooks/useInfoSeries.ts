import axios from "axios";
import { FilmsData } from "../interface/filmsData";
import { useQuery } from "react-query";

const API_URL = 'http://localhost:8080';

const fetchData = async (id: number): Promise<FilmsData> => {
    const response = await axios.get(`${API_URL}/series/${id}`);
    return response.data;
}

export function useInfoFilms(id: number) {
    return useQuery({
        queryFn: () => fetchData(id),
        queryKey: ['films-info', id],
        retry: 2,
    })
}