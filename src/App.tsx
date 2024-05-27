import { CardFilms } from './componentes/filmes';
import { Footer } from './componentes/footer';
import { Header } from './componentes/header';
import { Propaganda } from './componentes/propaganda';
import { useFilmsData } from './hooks/useFilmsData';

function App() {
  const { data } = useFilmsData();

  return (
    <div className="flex flex-col gap-5 ">
      <Header/>
      <div>
        {data?.map(filmsData =>
          <CardFilms
            key={filmsData.id}
            titulo={filmsData.titulo}
            ano={filmsData.ano}
            atores={filmsData.atores}
            avaliacao={filmsData.avaliacao}
            descicao={filmsData.descicao}
            imagem={filmsData.imagem}
            totalDeTemporada={filmsData.totalDeTemporada}
          />
        )}
      </div>
      <Propaganda/>
      <Footer/>
    </div>
  )
}

export default App