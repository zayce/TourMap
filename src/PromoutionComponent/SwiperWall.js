import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import Baku from "../PromoutionComponent/asests/Baki.jpg";
import Qabala from "../PromoutionComponent/asests/Qabala rayon.jpg";
import Lankaran from "../PromoutionComponent/asests/Lankaran.jpg";
import Susa from "../PromoutionComponent/asests/Susa.jpg";
import Seki from "./asests/Seki.jpg";

import "../PromoutionComponent/SwiperWall.scss";

export const SwiperWall = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="Baner-Container">
            <img src={Baku} className="Baner" />
            <div className="Title-Travled">Туры по - Баку</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Baner-Container">
            <img src={Qabala} className="Baner" />
            <div className="Title-Travled">Туры по - Габала</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Baner-Container">
            <img src={Lankaran} className="Baner" />
            <div className="Title-Travled">Туры по - Лянкарань</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Baner-Container">
            <img src={Susa} className="Baner" />
            <div className="Title-Travled">Туры по - Шуша</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Baner-Container">
            <img src={Seki} className="Baner" />
            <div className="Title-Travled">Туры по - Шеки</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
