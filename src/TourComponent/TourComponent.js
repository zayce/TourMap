import "../TourComponent/TourComponent.scss";

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

import one from "./asestsTour/solo.png";
import two from "./asestsTour/twov.png";

export const TourComponent = () => {
  const attractions = [
    {
      name: "Баку",
      img: Baku,
      id: 1,
      state: "Popular",
      person: one,
      duo: two,
    },
    {
      name: "Гянджа",
      img: Gandja,
      id: 2,
      state: "Popular",
      person: one,
      duo: two,
    },
    {
      name: "Шеки",
      img: Sheki,
      id: 3,
      state: "Scenic",
      person: one,
      duo: two,
    },
    {
      name: "Ленкорань",
      img: Lankoran,
      id: 4,
      state: "Scenic",
      person: one,
      duo: two,
    },
    {
      name: "Шамахы",
      img: Shamaha,
      id: 5,
      state: "Scenic",
      person: one,
      duo: two,
    },
    {
      name: "Шуша",
      img: Shusha,
      id: 6,
      state: "Mountain",
      person: one,
      duo: two,
    },
    {
      name: "Куба",
      img: Quba,
      id: 7,
      state: "Mountain",
      person: one,
      duo: two,
    },
    {
      name: "Габала",
      img: qabala,
      id: 8,
      state: "Tourist",
      person: one,
      duo: two,
    },
    {
      name: "Хачмаз",
      img: Xacmaz,
      id: 9,
      state: "Tourist",
      person: one,
      duo: two,
    },
    {
      name: "Гусар",
      img: Shaxdag,
      id: 10,
      state: "Tourist",
      person: one,
      duo: two,
    },
    {
      name: "Шамкир",
      img: Shemkir,
      id: 11,
      state: "Tourist",
      person: one,
      duo: two,
    },
    {
      name: "Исмаиллы",
      img: Ismailli,
      id: 12,
      state: "Tourist",
      person: one,
      duo: two,
    },
    {
      name: "Газах",
      img: Gazah,
      id: 12,
      state: "Tourist",
      person: one,
      duo: two,
    },
    {
      name: "Загатала",
      img: Zagatala,
      id: 12,
      state: "Tourist",
      person: one,
      duo: two,
    },
    {
      name: "Общий тур",
      img: Obb,
      id: 12,
      state: "Tourist",
      person: one,
      duo: two,
    },
  ];

  return (
    <div className="TourComponent-wrapper">
      <div className="TourComponent-inner">
        <div className="Title">Туры по всем городам</div>
        <div className="TourComponent">
          {attractions.map((attraction) => (
            <div key={attraction.id} className="Beta-Block">
              <div className="Beta-Img">
                <img
                  src={attraction.img}
                  className="img"
                  alt={attraction.name}
                />
                <div className="overlay">
                  <div className="overlay-text text">
                    <img className="solo duo" src={attraction.person} />
                    <div className="tur tur1">тур на одного </div>
                  </div>
                  <div className="overlay-text">
                    {" "}
                    <img className="solo" src={attraction.duo} />
                    <div className="tur tur2">тур на двоих </div>
                  </div>
                </div>
              </div>
              {/* <div className="Beta-state">{attraction.state}</div> */}
              <div className="Beta-name">{attraction.name}</div>
              <div className="Beta-Id">{attraction.id}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
