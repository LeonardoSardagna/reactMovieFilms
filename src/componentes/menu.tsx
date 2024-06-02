import { X } from "lucide-react";
interface MenuProps {
    setMenu: (value: boolean) => void
}

export function Menu({ setMenu }: MenuProps) {

    return (

        <div className={`fixed inset-0 z-50 bg-opacity-90 backdrop-blur-md p-10 animate-slide-in h-2/4 w-2/4`}>
            <X className="mb-2" onClick={() => setMenu(true)} />
            <nav className="flex flex-col gap-10 text-[17px] max-desktop:gap-5 ">
                <a className="cursor-pointer transition ease-in-out hover:scale-105 font-roboto" href="#principais"  onClick={() => setMenu(true)}>Principais</a>
                <a className="cursor-pointer transition ease-in-out hover:scale-105 font-roboto" href="#lancamento"  onClick={() => setMenu(true)}>Lançamentos</a>
                <a className="cursor-pointer transition ease-in-out hover:scale-105 font-roboto" href="#populares"  onClick={() => setMenu(true)}>Populares</a>
                <a className="cursor-pointer transition ease-in-out hover:scale-105 font-roboto" href="#genero"  onClick={() => setMenu(true)}>Gênero</a>
            </nav>
        </div>
    )
}