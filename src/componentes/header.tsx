import { Avatar, AvatarIcon } from "@nextui-org/react";
import { Popcorn, SearchIcon } from "lucide-react";

export function Header() {
    return (
        <header className="flex justify-between py-10 px-10">
            <Popcorn className="size-10"/>
            <nav className="flex gap-10 text-[17px]">
                <a className="cursor-pointer transition ease-in-out hover:scale-105 ">Home</a>
                <a className="cursor-pointer transition ease-in-out hover:scale-105 ">Filmes populares</a>
                <a className="cursor-pointer transition ease-in-out hover:scale-105 ">Minha lista</a>
            </nav>
            <div className="flex items-center gap-3">
                <div className="w-72 flex items-center border border-white/20 rounded-lg px-3 py-1.5 gap-2">
                    <SearchIcon className="size-5"/>
                    <input type="text" placeholder="Buscar filmes e séries" className="flex-1 bg-transparent p-0 border-0 focus:ring-0 outline-none" />
                </div>
                <Avatar
                className="cursor-pointer transition ease-in-out hover:scale-105"
                    icon={<AvatarIcon />}
                    classNames={{
                        base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
                        icon: "text-black/80",
                    }}
                />
            </div>
        </header>
    )
}