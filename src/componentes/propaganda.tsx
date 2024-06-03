import { Button } from "@nextui-org/react";

export function Propaganda() {
    return (
        <div className="flex items-center justify-between bg-custom-gradient px-10 py-12 max-desktop:flex-col-reverse ">
            <div className="flex flex-col gap-28 w-[600px] max-desktop:items-center max-desktop:gap-14  max-tablet:gap-5 max-tablet:w-[300px]">
                <h3 className="text-3xl font-roboto max-tablet:text-center">Assista em Qualquer Lugar</h3>
                <p className="text-xl font-roboto">Encontre tudo sobre filmes aqui, sem limites. Navegue em qualquer lugar pelo seu telefone, tablet ou laptop. Seja flexível e aproveite nosso aplicativo offline para assistir quando e onde quiser. </p>
                <Button color="primary" variant="shadow" className="text-lg">
                    Vamos Começar?
                </Button>
            </div>
            <img className="max-desktop:size-8/12 max-tablet:size-11/12" src="./public/propaganda.png" alt="dispositivos" />
        </div>
    )
}