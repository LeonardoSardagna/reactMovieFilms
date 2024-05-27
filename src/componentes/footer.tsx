import { Link, User } from "@nextui-org/react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export function Footer() {
    return (
        <footer className="py-10 px-10">
            <div className="flex flex-col gap-10">
                <div className="flex gap-10 justify-between">
                    <div className="flex flex-col gap-5">
                        <h4 className="text-xl">Conecte-se conosco</h4>
                        <div className="flex gap-5">
                            <BsInstagram className="size-8 cursor-pointer transition ease-in-out hover:scale-105" />
                            <FaFacebook className="size-8 cursor-pointer transition ease-in-out hover:scale-105" />
                            <BsTwitter className="size-8 cursor-pointer transition ease-in-out hover:scale-105" />
                            <SiGmail className="size-8 cursor-pointer transition ease-in-out hover:scale-105" />
                        </div>
                    </div>
                    <div className="text-lg flex gap-20">
                        <nav className="flex flex-col gap-2">
                            <a>Empregos</a>
                            <a>Cookies e Preferências</a>
                            <a>Centro de Ajuda</a>
                            <a>Termos de Uso</a>
                            <a>Privacidade</a>
                        </nav>
                        <nav className="flex flex-col gap-2">
                            <a>Notícias</a>
                            <a>Centro de Mídia</a>
                            <a>Aviso Legal</a>
                            <a>Realização de Investidores</a>
                            <a>Feeds</a>
                        </nav>
                        <nav className="flex flex-col gap-2">
                            <a>Início</a>
                            <a>Filmes Populares</a>
                            <a>Filmes em Alta</a>
                            <a>Últimos Filmes</a>
                            <a>Sobre nós</a>
                        </nav>
                    </div>
                </div>
                <div className="flex flex-col gap-5 items-start">
                    <h4>Desenvolvido por: </h4>
                    <User
                        className="cursor-pointer transition ease-in-out hover:scale-105"
                        name="Leonardo Sardagna"
                        description={(
                            <Link href="https://github.com/LeonardoSardagna" size="sm" isExternal>
                                Leonardo Sardagna
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