import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import "./SwiperCitytourComponent.scss";

import Baku from "./SwiperAsessrs/baku.png";
import drovec from "./SwiperAsessrs/dvorec.jpg";
import musei from "./SwiperAsessrs/musei.png";
import nature from "./SwiperAsessrs/nature.png";
import park from "./SwiperAsessrs/Park.png";
import zoopark from "./SwiperAsessrs/zoopark.png";

export const SwiperCitytourComponent = () => {
  const picture = [
    { img: Baku, name: "Туры по Баку" },
    { img: drovec, name: "Туры по Дворцам" },
    { img: musei, name: "Туры по Музеям" },
    { img: nature, name: "Туры по Природным достопремичательностям" },
    { img: park, name: "Туры по Паркам" },
    { img: zoopark, name: "Туры по Зоопарком" },
    { img: Baku, name: "Туры по Баку" },
  ];

  return (
    <div className="Brand">
      <div className="Brand-Header">
        <div className="Brand-titles">
          <div className="Brand-title">Plaace</div>
          <div className="Brand-Fon">Популярные Места</div>
        </div>
        <button className="brend-button">
          <span className="Brend">Все Места</span>
        </button>
      </div>
      <div className="Swiper-container">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {picture.map((Element, index) => (
            <SwiperSlide key={index}>
              <div className="Swiper">
                <div className="swiper-img">
                  <img src={Element.img} alt={Element.name} />
                </div>
                <div className="Swiper-name">{Element.name}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
