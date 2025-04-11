import { HomeQuestions } from "../HomeQuestions/HomeQuestions";
import { Quote } from "../PromoutionComponent/SwiperWall";
import { ServicesProvided } from "../ServicesProvidedComponent/ServicesProvided";

import { SwiperCitytourComponent } from "../SwiperCitytourComponent/SwiperCitytourComponent";
import { TourComponent } from "../TourComponent/TourComponent";

import "./Home.scss";

export const Home = () => {
  return (
    <>
      <div className="Wrapper-Home">
        <Quote />
        <div className="Inner-home">
          <TourComponent />
          <SwiperCitytourComponent />
          <ServicesProvided />
          <HomeQuestions />
        </div>
      </div>
    </>
  );
};
