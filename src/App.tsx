import { useEffect, useState } from 'react';
import { Footer } from './componentes/footer';
import { Propaganda } from './componentes/propaganda';
import { useFilmsData } from './hooks/useFilmsData';
import { useLancamentos } from './hooks/useLancamentos';
import { useTop5 } from './hooks/useTop5';
import { Carrossel } from './componentes/carrossel';
import { ButtonTop } from './componentes/scrollTopButton';
import { useGenero } from './hooks/useGenero';
import { CircularProgress, Image } from '@nextui-org/react';

export function App() {
  const { data } = useFilmsData();
  const { lancamentos } = useLancamentos();
  const { top5 } = useTop5();
  const [slide, setSlide] = useState(4);
  const [generoSelecionado, setGeneroSelecionado] = useState("Ação");
  const todosGeneros = ['Ação', 'Comédia', 'Drama', 'Aventura', 'Horror'];
  const { genero, isLoading, isError } = useGenero(generoSelecionado);

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
      <div className='flex flex-col gap-10 max-w-[1500px] mx-auto'>
        <div id='principais'>
          <h1 className='px-10 pb-5 text-3xl font-roboto max-desktop:text-2xl'>Principais</h1>
          <Carrossel slide={slide} data={data} />
        </div>

        <div id='lancamento'>
          <h1 className='px-10 pb-5 text-3xl font-roboto'>Lançamentos</h1>
          <Carrossel slide={slide} data={lancamentos} />
        </div>

        <div id='populares'>
          <h1 className='px-10 pb-5 text-3xl font-roboto'>Top 5</h1>
          <Carrossel slide={slide} data={top5} />
        </div>

        <div id='genero'>
          <h1 className='px-10 pb-5 text-3xl font-roboto'>Pesquise filmes por categoria</h1>
          <nav className='w-full m-0 b-0 list-none flex gap-5 flex-wrap justify-center pb-5 desktop:justify-normal desktop:px-10'>
            {todosGeneros.map((g) => (
              <li
                key={g}
                onClick={() => setGeneroSelecionado(g)}
                className={`font-roboto text-xl cursor-pointer transition duration-300 ease-in-out hover:scale-105 p-5 rounded-lg ${generoSelecionado === g ? 'bg-custom-botao' : ''
                  }`}>
                {g}
              </li>
            ))}
          </nav>
          {isLoading ? (
            <div>
              <CircularProgress size='lg' label='Carregando...' />
            </div>
          ) : isError || !genero || genero.length === 0 ? (
            <div className='flex flex-col-reverse gap-10 items-center w-full justify-center'>
              <p className='font-roboto text-2xl w-80 text-center'>Ops, não encontramos títulos no gênero {generoSelecionado}</p>
              <Image
                width={340}
                src="./public/erro2.png"
                alt="fantasma"
              />
            </div>
          ) : (
            <Carrossel slide={slide} data={genero} />
          )
          }
        </div>
      </div>
      <Propaganda />
      <Footer />
      <ButtonTop />
    </div>
  )
}
