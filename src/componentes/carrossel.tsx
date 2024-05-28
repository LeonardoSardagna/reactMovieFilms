import { Swiper, SwiperSlide } from "swiper/react";
import { CardFilms } from "./filmes";
import { FilmsData } from "../interface/filmsData";

interface CarrosselProps{
  slide: number;
  data: FilmsData[] | undefined;
}

export function Carrossel({slide, data}:CarrosselProps){
    return(
        <Swiper
          slidesPerView={slide}
          navigation
        >
          {data?.map((filmsData) =>(
            <SwiperSlide key={filmsData.id}>
              <CardFilms
                key={filmsData.id}
                titulo={filmsData.titulo}
                avaliacao={filmsData.avaliacao}
                imagem={filmsData.imagem}
              />
            </SwiperSlide>
          ))}
        </Swiper>
    )
}