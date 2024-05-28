import { Avatar, AvatarIcon } from "@nextui-org/react";
import { Popcorn, SearchIcon } from "lucide-react";

export function Header() {
    return (
        <header className="flex justify-between py-10 px-10 items-center">
            <Popcorn className="size-10"/>
            <nav className="flex gap-10 text-[17px]">
                <a className="cursor-pointer transition ease-in-out hover:scale-105 font-roboto " href="#principais">Principais</a>
                <a className="cursor-pointer transition ease-in-out hover:scale-105 font-roboto" href="#lancamento">Lançamentos</a>
                <a className="cursor-pointer transition ease-in-out hover:scale-105 font-roboto" href="#populares">Populares</a>
                <a className="cursor-pointer transition ease-in-out hover:scale-105 font-roboto" href="#genero">Gênero</a>
            </nav>
            <div className="flex items-center gap-3">
                <div className="w-72 flex items-center border border-white/20 rounded-lg px-3 py-1.5 gap-2">
                    <SearchIcon className="size-5 text-[#053ba3]"/>
                    <input type="text" placeholder="Buscar filmes e séries" className="flex-1 bg-transparent p-0  focus:ring-0 outline-none" />
                </div>
                <Avatar
                className="cursor-pointer transition ease-in-out hover:scale-105"
                    icon={<AvatarIcon />}
                    classNames={{
                        base: "bg-gradient-to-br from-[#071261] to-[#053ba3]",
                        icon: "text-black/80",
                    }}
                />
            </div>
        </header>
    )
}