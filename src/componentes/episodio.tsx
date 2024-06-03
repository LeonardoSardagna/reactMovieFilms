import { Clapperboard } from "lucide-react";

interface Props {
    numero: number,
    titulo: string

}

export function Episodio({ numero, titulo }: Props) {
    return (
        <div>
            <div className="flex items-center gap-5">
                <Clapperboard />
                <li className="list-none text-lg">Episódio: {numero} - {titulo}</li>
            </div>
        </div>
    )
}