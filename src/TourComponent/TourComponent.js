import React from "react";
import "../TourComponent/TourComponent.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Baku from "./asestsTour/baku.png";
import qabala from "./asestsTour/qabala.png";
import Sheki from "./asestsTour/Sheki.png";
import Shusha from "./asestsTour/Susa.png";
import Gandja from "./asestsTour/Gandja.jpg";
import Lankoran from "./asestsTour/lankoran.jpg";
import Shamaha from "./asestsTour/Shamaxa.jpg";
import Quba from "./asestsTour/Quba.png";
import Xacmaz from "./asestsTour/Xacmaz.jpg";
import Shaxdag from "./asestsTour/Shahdag.jpg";
import Shemkir from "./asestsTour/sHEMKIR.jpg";
import Ismailli from "./asestsTour/Ismailli.jpg";
import Qobustan from "./asestsTour/Qobustan.png";
import Seki from "./asestsTour/Seki.png";
import Obb from "./asestsTour/Obb.jpg";

import one from "./asestsTour/solo.png";
import two from "./asestsTour/twov.png";

export const TourComponent = () => {
  const { t } = useTranslation();

  const attractions = [
    {
      category: t("Bakı"),
      img: Baku,
      id: 1,
      state: "Popular",
      person: one,
      duo: two,
      connect: "Baku",
      city: t("baku"),
    },
    {
      category: t("Gəncə"),
      img: Gandja,
      id: 2,
      state: "Popular",
      person: one,
      duo: two,
      city: t("Ganja"),
    },
    {
      category: t("Şəki"),
      img: Sheki,
      id: 3,
      state: "Scenic",
      person: one,
      duo: two,
      city: t("Sheki"),
    },
    {
      category: t("Lənkəran"),
      img: Lankoran,
      id: 4,
      state: "Scenic",
      person: one,
      duo: two,
      city: t("Lankaran"),
    },
    {
      category: t("Şamaxı"),
      img: Shamaha,
      id: 5,
      state: "Scenic",
      person: one,
      duo: two,
      city: t("Shamakhi"),
    },
    {
      category: t("Qarabağ"),
      img: Shusha,
      id: 6,
      state: "Mountain",
      person: one,
      duo: two,
      city: t("Karabakh"),
    },
    // {
    //   category: t("Quba"),
    //   img: Quba,
    //   id: 7,
    //   state: "Mountain",
    //   person: one,
    //   duo: two,
    // },
    {
      category: t("Qəbələ"),
      img: qabala,
      id: 8,
      state: "Tourist",
      person: one,
      duo: two,
      city: t("Gabala"),
    },
    {
      category: t("Xaçmaz"),
      img: Xacmaz,
      id: 9,
      state: "Tourist",
      person: one,
      duo: two,
      city: t("Khachmaz"),
    },
    // {
    //   category: t("Qusar"),
    //   img: Shaxdag,
    //   id: 10,
    //   state: "Tourist",
    //   person: one,
    //   duo: two,
    // },
    {
      category: t("Şəmkir"),
      img: Shemkir,
      id: 11,
      state: "Tourist",
      person: one,
      duo: two,
      city: t("Shamkir"),
    },
    {
      category: t("Ismayilli"),
      img: Ismailli,
      id: 12,
      state: "Tourist",
      person: one,
      duo: two,
      city: t("Ismailli"),
    },
    // {
    //   category: t("Qax"),
    //   img: Seki,
    //   id: 13,
    //   state: "Tourist",
    //   person: one,
    //   duo: two,
    // },
    {
      category: t("Qobustan"),
      img: Qobustan,
      id: 14,
      state: "Tourist",
      person: one,
      duo: two,
      city: t("Gobustan"),
    },
    {
      category: t("Qarışıq yerlər"),
      img: Obb,
      id: 15,
      state: "Tourist",
      person: one,
      duo: two,
      city: t("Mixed places"),
    },
  ];

  return (
    <div className="TourComponent-wrapper">
      <div className="TourComponent-inner">
        <div className="Title">{t("tourMap")}</div>
        <div className="TourComponent">
          {attractions.map((attraction) => (
            <Link to={`/CityTourComponent/${attraction.category}`}>
              <div className="Beta-Block">
                <div className="Beta-Img">
                  <img
                    src={attraction.img}
                    className="img"
                    alt={attraction.name}
                  />
                  <div className="overlay">
                    <div className="overlay-text text">
                      <img
                        className="solo duo"
                        src={attraction.person}
                        alt="person"
                      />
                      <div className="tur tur1">{t("tourForOne")}</div>
                    </div>
                    <div className="overlay-text">
                      <img className="solo" src={attraction.duo} alt="duo" />
                      <div className="tur tur2">{t("tourForTwo")}</div>
                    </div>
                  </div>
                </div>
                <div className="Beta-name">{attraction.city}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
