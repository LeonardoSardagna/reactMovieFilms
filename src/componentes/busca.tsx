import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { Carrossel } from "./carrossel";
import { useBusca } from "../hooks/useBuscarApi";

export function Busca() {
    const [searchParams] = useSearchParams();
    const resultado = searchParams.get("q") || "";
    const { data } = useBusca(resultado)
    const [slide, setSlide] = useState(4);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 600) {
                setSlide(1);
            } else if (window.innerWidth < 1000) {
                setSlide(2)
            } else {
                setSlide(4);
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <div>
            <h1 className="text-center font-roboto text-2xl py-5">Resultados para <strong className="text-yellow-300">"{resultado}"</strong> </h1>
            <div>
                <Carrossel data={data} slide={slide} />
            </div>
        </div>
    )
}