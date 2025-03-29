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

import { Link } from "react-router-dom";
export const SwiperCitytourComponent = () => {
  const picture = [
    { img: Baku, name: "Баку" },
    { img: drovec, name: "Дворцы" },
    { img: musei, name: "Музеи" },
    { img: nature, name: "Природные достопремичательности" },
    { img: park, name: "Парки" },
    { img: zoopark, name: "Зоопарки" },
  ];

  return (
    <div className="Brand">
      <div className="Brand-Header">
        <div className="Brand-titles">
          <div className="Brand-title">Place</div>
          <div className="Brand-Fon">Популярные Места</div>
        </div>
        <Link to={"/AllPlaces"}>
          <button className="brend-button">
            <span className="Brend">Все Места</span>
          </button>
        </Link>
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
