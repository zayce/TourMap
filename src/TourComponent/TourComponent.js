import "../TourComponent/TourComponent.scss";

import { Link } from "react-router-dom";

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
import Gazah from "./asestsTour/Gazah.jpg";
import Zagatala from "./asestsTour/Zagatala.jpg";
import Obb from "./asestsTour/Obb.jpg";
import { useMyContext } from "../UseContext.js";

import one from "./asestsTour/solo.png";
import two from "./asestsTour/twov.png";

export const TourComponent = () => {
  const { language, translations, museums } = useMyContext();
  console.log(museums, "museum");
  const attractions = [
    {
      name: translations[language].baku,
      img: Baku,
      id: 1,
      state: "Popular",
      person: one,
      duo: two,
      connect: "Baku",
    },
    {
      name: translations[language].Ganja,
      img: Gandja,
      id: 2,
      state: "Popular",
      person: one,
      duo: two,
    },
    {
      name: translations[language].Sheki,
      img: Sheki,
      id: 3,
      state: "Scenic",
      person: one,
      duo: two,
    },
    {
      name: translations[language].Lankaran,
      img: Lankoran,
      id: 4,
      state: "Scenic",
      person: one,
      duo: two,
    },
    {
      name: translations[language].Shamakhi,
      img: Shamaha,
      id: 5,
      state: "Scenic",
      person: one,
      duo: two,
    },
    {
      name: translations[language].Shusha,
      img: Shusha,
      id: 6,
      state: "Mountain",
      person: one,
      duo: two,
    },
    {
      name: translations[language].Cuba,
      img: Quba,
      id: 7,
      state: "Mountain",
      person: one,
      duo: two,
    },
    {
      name: translations[language].Gabala,
      img: qabala,
      id: 8,
      state: "Tourist",
      person: one,
      duo: two,
    },
    {
      name: translations[language].Khachmaz,
      img: Xacmaz,
      id: 9,
      state: "Tourist",
      person: one,
      duo: two,
    },
    {
      name: translations[language].Shusha,
      img: Shaxdag,
      id: 10,
      state: "Tourist",
      person: one,
      duo: two,
    },
    {
      name: translations[language].Shamkir,
      img: Shemkir,
      id: 11,
      state: "Tourist",
      person: one,
      duo: two,
    },
    {
      name: translations[language].Ismailli,
      img: Ismailli,
      id: 12,
      state: "Tourist",
      person: one,
      duo: two,
    },
    {
      name: translations[language].Gazakh,
      img: Gazah,
      id: 13,
      state: "Tourist",
      person: one,
      duo: two,
    },
    {
      name: translations[language].Zagatala,
      img: Zagatala,
      id: 14,
      state: "Tourist",
      person: one,
      duo: two,
    },
    {
      name: translations[language].generalTour,
      img: Obb,
      id: 15,
      state: "Tourist",
      person: one,
      duo: two,
    },
  ];

  return (
    <div className="TourComponent-wrapper">
      <div className="TourComponent-inner">
        <div className="Title">{translations[language].tourMap}</div>
        <div className="TourComponent">
          {attractions.map((attraction) => (
            <Link key={attraction.id}>
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
                      <div className="tur tur1">тур на одного</div>
                    </div>
                    <div className="overlay-text">
                      <img className="solo" src={attraction.duo} alt="duo" />
                      <div className="tur tur2">тур на двоих</div>
                    </div>
                  </div>
                </div>
                <div className="Beta-name">{attraction.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
