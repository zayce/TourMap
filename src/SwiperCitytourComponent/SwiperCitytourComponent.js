import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./SwiperCitytourComponent.scss";

import Baku from "./SwiperAsessrs/baku.png";
import drovec from "./SwiperAsessrs/dvorec.jpg";
import musei from "./SwiperAsessrs/musei.png";
import nature from "./SwiperAsessrs/nature.png";
import park from "./SwiperAsessrs/Park.png";
import Attractive from "./SwiperAsessrs/Attractive.png";

export const SwiperCitytourComponent = () => {
  const { t } = useTranslation();

  const brandRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const picture = [
    { img: Baku, name: t("baku"), specialization: "Баку" },
    { img: drovec, name: t("palaces"), specialization: "Дворцы" },
    { img: musei, name: t("museums"), specialization: "Музей" },
    { img: nature, name: t("nature"), specialization: "nature" },
    {
      img: Attractive,
      name: t("EntertainmentAndActiveRecreation"),
      specialization: "Attractive",
    },
    { img: park, name: t("parks"), specialization: "Парки" },
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
          <div className="Brand-title">{t("place")}</div>
          <div className="Brand-Fon">{t("popularPlaces")}</div>
        </div>
        <Link to={"/AllPlaces"}>
          <button className="brend-button">
            <span className="Brend">{t("allPlaces")}</span>
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
          {picture.map((element, index) => (
            <SwiperSlide key={index}>
              <Link to={`/SelectedObject/${element.specialization}`}>
                <div className="Swiper">
                  <div className="swiper-img">
                    <img src={element.img} alt={element.name} />
                  </div>
                  <div className="Swiper-name">{element.name}</div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
