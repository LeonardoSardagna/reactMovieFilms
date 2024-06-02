import { Avatar, AvatarIcon } from "@nextui-org/react";
import { MenuIcon, Popcorn, SearchIcon } from "lucide-react";
import { useState } from "react";
import { Menu } from "./menu";
import { Link, useNavigate } from "react-router-dom";

export function Header() {

    const [busca, setBusca] = useState("");
    const navigate = useNavigate();
    const [menu, setMenu] = useState(true)
    const toggleMenu = () =>{
        setMenu(prevState => !prevState)
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        
        if(!busca) return

        navigate(`/busca?q=${busca}`)
        setBusca("")
    }

    return (
        <header className="flex justify-between py-10 px-10 items-center max-desktop:gap-3">
            <Link to={"/"}>
                <Popcorn className="size-10 max-desktop:hidden" />
            </Link>
            <div className="hidden max-tablet:block" onClick={toggleMenu}>
                {menu? <MenuIcon/>  : ''}
            </div>
            {menu? "" : <Menu setMenu={setMenu}/> }
            <nav className="flex gap-10 text-[17px] max-desktop:gap-5 max-tablet:hidden ">
                <a className="cursor-pointer transition ease-in-out hover:scale-105 font-roboto" href="#principais">Principais</a>
                <a className="cursor-pointer transition ease-in-out hover:scale-105 font-roboto" href="#lancamento">Lançamentos</a>
                <a className="cursor-pointer transition ease-in-out hover:scale-105 font-roboto" href="#populares">Populares</a>
                <a className="cursor-pointer transition ease-in-out hover:scale-105 font-roboto" href="#genero">Gênero</a>
            </nav>
            <div className="flex items-center gap-3">
                <div className="w-72 flex items-center border border-white/20 rounded-lg px-3 py-1.5 gap-2 max-tablet:w-52">
                    <SearchIcon className="size-5 text-[#053ba3]" />
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Buscar filmes e séries"
                            className="flex-1 bg-transparent p-0  focus:ring-0 outline-none "
                            onChange={(e) => setBusca(e.target.value)}
                            value={busca}
                        />
                    </form>
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