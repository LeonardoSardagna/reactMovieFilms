import { Link, User } from "@nextui-org/react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export function Footer() {
    return (
        <footer className="py-10 px-10">
            <div className="flex flex-col gap-10">
                <div className="flex gap-10 justify-between max-tablet:justify-center">
                    <div className="flex flex-col gap-5">
                        <h4 className="text-xl font-roboto">Conecte-se conosco</h4>
                        <div className="flex gap-5">
                            <BsInstagram className="size-8 cursor-pointer transition ease-in-out hover:scale-105" />
                            <FaFacebook className="size-8 cursor-pointer transition ease-in-out hover:scale-105" />
                            <BsTwitter className="size-8 cursor-pointer transition ease-in-out hover:scale-105" />
                            <SiGmail className="size-8 cursor-pointer transition ease-in-out hover:scale-105" />
                        </div>
                    </div>
                    <div className="text-lg flex gap-20 max-tablet:hidden">
                        <nav className="flex flex-col gap-2">
                            <a className="cursor-pointer">Empregos</a>
                            <a className="cursor-pointer">Cookies e Preferências</a>
                            <a className="cursor-pointer">Centro de Ajuda</a>
                            <a className="cursor-pointer">Termos de Uso</a>
                            <a className="cursor-pointer">Privacidade</a>
                        </nav>
                        <nav className="flex flex-col gap-2">
                            <a className="cursor-pointer">Notícias</a>
                            <a className="cursor-pointer">Centro de Mídia</a>
                            <a className="cursor-pointer">Aviso Legal</a>
                            <a className="cursor-pointer">Realização de Investidores</a>
                            <a className="cursor-pointer">Feeds</a>
                        </nav>
                        <nav className="flex flex-col gap-2">
                            <a href="#principais">Início</a>
                            <a href="#populares">Filmes Populares</a>
                            <a href="#genero">Filmes por gênero</a>
                            <a href="#lancamento">Últimos Filmes</a>
                            <a className="cursor-pointer">Sobre nós</a>
                        </nav>
                    </div>
                </div>
                <div className="flex flex-col gap-5 items-start">
                    <h4 className="font-roboto">Desenvolvido por: </h4>
                    <User
                        className="cursor-pointer transition ease-in-out hover:scale-105"
                        name="Leonardo Sardagna"
                        description={(
                            <Link href="https://github.com/LeonardoSardagna" size="sm" isExternal>
                                LeonardoSardagna
                            </Link>
                        )}
                        avatarProps={{
                            src: "https://avatars.githubusercontent.com/u/137004621?v=4"
                        }}
                    />
                </div>
            </div>
        </footer>
    )
}