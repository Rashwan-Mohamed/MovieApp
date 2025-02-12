import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
export default function SwiperCom({ children }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  return (
    <Swiper
      modules={[
        Navigation,
        Pagination,
        Scrollbar,
        A11y,
        FreeMode,
        EffectCoverflow,
      ]}
      spaceBetween={20}
      freeMode={true}
      // momentumBounceRatio={1.5}
      // momentumRatio={1}
      effect="coverFlow"
      slidesPerView={4}
      navigation={true}
      pagination={{ clickable: true }}
      //   scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      {children}
    </Swiper>
  );
}
