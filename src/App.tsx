import { useEffect, useState } from 'react';
import { Footer } from './componentes/footer';
import { Header } from './componentes/header';
import { Propaganda } from './componentes/propaganda';
import { useFilmsData } from './hooks/useFilmsData';
import { useLancamentos } from './hooks/useLancamentos';
import { useTop5 } from './hooks/useTop5';
import { Carrossel } from './componentes/carrossel';
import { ButtonTop } from './componentes/scrollTopButton';

function App() {
  const { data } = useFilmsData();
  const { lancamentos } = useLancamentos();
  const { top5 } = useTop5();
  const [slide, setSlide] = useState(4);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlide(1);
      } else if (window.innerWidth < 900) {
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
      <Header />
      <div>
        <div id='principais'>
          <h1 className='px-10 pb-5 text-3xl font-roboto'>Principais</h1>
          <Carrossel slide={slide} data={data} />
        </div>

        <div id='lancamento'>
          <h1 className='px-10 pb-5 text-3xl font-roboto'>Lançamentos</h1>
          <Carrossel slide={slide} data={lancamentos} />
        </div>

        <div id='genero'>
          <h1 className='px-10 pb-5 text-3xl font-roboto'>Pesquise filmes por categoria</h1>
        </div>

        <div id='populares'>
          <h1 className='px-10 pb-5 text-3xl font-roboto'>Top 5</h1>
          <Carrossel slide={slide} data={top5} />
        </div>
      </div>
      <Propaganda />
      <Footer />
      <ButtonTop/>
    </div>
  )
}

export default App