import { Swiper, SwiperSlide } from "swiper/react";
import { CardFilms } from "./filmes";
import { FilmsData } from "../interface/filmsData";
import { CircularProgress } from "@nextui-org/react";

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
          {data? data.map((filmsData) =>(
            <SwiperSlide key={filmsData.id}>
              <CardFilms
                id={filmsData.id}
                key={filmsData.id}
                titulo={filmsData.titulo}
                avaliacao={filmsData.avaliacao}
                imagem={filmsData.imagem}
              />
            </SwiperSlide>
          )) : <CircularProgress aria-label="Loading..." size="lg"/>}
        </Swiper>
    )
}