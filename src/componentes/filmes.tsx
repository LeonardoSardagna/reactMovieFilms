import { Button, Card, Image } from "@nextui-org/react"
import { Star } from "lucide-react"
import { Link } from "react-router-dom"
interface PropsFilms {
    id?: number,
    titulo: string,
    avaliacao: number,
    imagem: string
}

export function CardFilms({ avaliacao, imagem, titulo }: PropsFilms) {
    return (
        <div className="px-10">
            <Card className="w-full h-[500px] col-span-12 sm:col-span-7 max-tablet:w-10/12 max-tablet:h-[350px]">
                <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src={imagem}
                />
            </Card>
            <div className="flex flex-col gap-4 py-4 px-5">
                <h3 className="text-xl font-roboto">{titulo}</h3>
                <div className="flex gap-3 items-center">
                    <Star className="text-yellow-500" />
                    <p className="text-lg">{avaliacao}</p>
                </div>
                <Link to={"/info"}>
                    <Button
                        radius="full"
                        className="bg-custom-botao text-white shadow-lg text-lg"
                    >
                        Detalhes
                    </Button>
                </Link>

            </div>
        </div>

    )
}