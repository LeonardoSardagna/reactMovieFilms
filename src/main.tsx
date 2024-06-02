import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { NextUIProvider } from '@nextui-org/react'
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { InfoFilms } from './componentes/informacaoFilms.tsx'
import { Busca } from './componentes/busca.tsx'
import { App } from './App.tsx'
import { PaginaPadrao } from './componentes/paginaPadrao.tsx'

register();
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<PaginaPadrao />}>
              <Route path='/' element={<App />} />
              <Route path='busca' element={<Busca />} />
            </Route>
            <Route path='/info/:id' element={<InfoFilms />} />
          </Routes>
        </BrowserRouter>
      </NextUIProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
