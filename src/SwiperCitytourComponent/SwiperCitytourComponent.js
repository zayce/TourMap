import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link, useParams } from "react-router-dom";

import "./SwiperCitytourComponent.scss";

import Baku from "./SwiperAsessrs/baku.png";
import drovec from "./SwiperAsessrs/dvorec.jpg";
import musei from "./SwiperAsessrs/musei.png";
import nature from "./SwiperAsessrs/nature.png";
import park from "./SwiperAsessrs/Park.png";
import zoopark from "./SwiperAsessrs/zoopark.png";

export const SwiperCitytourComponent = () => {
  const { specialization } = useParams();
  const brandRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const picture = [
    { img: Baku, name: "Баку", specialization: "Баку" },
    { img: drovec, name: "Дворцы", specialization: "Дворцы" },
    { img: musei, name: "Музеи", specialization: "Музей" },
    { img: nature, name: "Природа", specialization: "Природа" },
    { img: park, name: "Парки", specialization: "Парки" },
    { img: zoopark, name: "Зоопарки", specialization: "Зоопарки" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.2 }
    );
    if (brandRef.current) {
      observer.observe(brandRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={brandRef} className={`Brand ${isVisible ? "show" : ""}`}>
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
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {picture.map((Element, index) => (
            <SwiperSlide key={index}>
              <Link to={`/SelectedObject/${Element.specialization}`}>
                <div className="Swiper">
                  <div className="swiper-img">
                    <img src={Element.img} alt={Element.name} />
                  </div>
                  <div className="Swiper-name">{Element.name}</div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
