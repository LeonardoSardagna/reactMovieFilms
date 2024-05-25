import './App.css'
import { CardFilms } from './componentes/filmes';
import { useFilmsData } from './hooks/useFilmsData';

function App() {
  const { data } = useFilmsData();

  return (
    <div>
      <h1>Filmes</h1>
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
    </div>
  )
}

export default App