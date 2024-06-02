import { Button, CircularProgress, Image } from "@nextui-org/react"
import { useInfoFilms } from "../hooks/useInfoSeries"
import { Calendar, CornerDownLeft, NotebookText, Star, Users } from "lucide-react"
import { Link, useParams } from "react-router-dom"
import { Episodio } from "./episodio";
import { Temporada, useTemp } from "../hooks/useTemporadas";
import { useState } from "react";

export function InfoFilms() {

    const { id } = useParams<{ id: string }>();
    const { data: info, isLoading, error } = useInfoFilms(Number(id))
    const [temporadaSelecionada, setTemporadaSelecionada] = useState<number | undefined>()
    const { data: temporadas } = useTemp(Number(id), temporadaSelecionada)


    if (isLoading) {
        return <CircularProgress size='lg' label='Carregando...' />
    }

    if (error) {
        return <p>Erro</p>
    }

    const handleSeasonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const season = e.target.value === "Todas"
            ? undefined
            : Number(e.target.value);
        setTemporadaSelecionada(season)
        console.log(season)
    };

    return (
        <div className="max-w-[1500px] mx-auto py-10 flex flex-col gap-5">
            <Link to={"/"}>
                <Button
                    isIconOnly
                    color="warning"
                    variant="bordered"
                    aria-label="home">
                    <CornerDownLeft />
                </Button>
            </Link>
            <div className="flex gap-10 items-center max-laptop:flex-col">
                <Image
                    isBlurred
                    src={info?.imagem} alt={info?.titulo}
                    className="m-5 h-[430px]"
                />
                <div className="flex flex-col gap-5 max-laptop:px-10">
                    <h1 className="font-roboto text-4xl">{info?.titulo}</h1>
                    <div className="flex gap-5 items-center text-2xl">
                        <Calendar className="size-7" />
                        {info?.ano}
                    </div>
                    <div className="flex gap-5 items-center text-2xl">
                        <Star className="text-yellow-300 size-7" />
                        {info?.avaliacao}
                    </div>
                    <div className="flex gap-5 items-center text-2xl">
                        <NotebookText className="size-7 max-laptop:hidden" />
                        <p className="w-[700px] max-laptop:w-full">{info?.descicao}</p>
                    </div>
                    <div className="flex gap-5 items-center text-2xl">
                        <Users className="size-7 max-laptop:hidden" />
                        Estrelando: {info?.atores}
                    </div>
                </div>
            </div>
            <h2 className="text-2xl max-laptop:px-5">Total de Temporadas: {info?.totalDeTemporadas}</h2>
            <div className="flex flex-col gap-1">
                <label htmlFor="">Selecione a temporada</label>
                <select className="max-w-sm bg-transparent border border-zinc-500 p-1 rounded-md" onChange={handleSeasonChange}>
                    {temporadas.map((temporada: Temporada) => (
                        <option className="bg-black/80" key={temporada.numero} value={temporada.numero} >Temporada: {temporada.numero}</option>
                    ))}
                    <option className="bg-black/80" value="Todas">
                        Todas
                    </option>
                </select>
            </div>
            {temporadas.map((temporada: Temporada) => (
                (temporadaSelecionada === undefined || temporada.numero === temporadaSelecionada) && (
                    <div key={temporada.numero} className="flex flex-col gap-3">
                        <h3 className="font-roboto text-xl">Temporada: {temporada.numero}</h3>
                        <div className="flex flex-col gap-2">
                            {temporada.episodios.map(episodio => (
                                <Episodio
                                    numero={episodio.numeroEpisodio}
                                    titulo={episodio.titulo}
                                    key={episodio.numeroEpisodio}
                                />
                            ))}
                        </div>
                    </div>
                )
            ))}
        </div>
    )
}