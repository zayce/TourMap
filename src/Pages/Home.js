import { AboutUs } from "../AboutUsComponent/AboutUs";
import { Quote } from "../PromoutionComponent/SwiperWall";
import { Season } from "../ServicesProvidedComponent/SeasonComponent/Season";
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
          <AboutUs />
          <SwiperCitytourComponent />
          <ServicesProvided />
        </div>
      </div>
    </>
  );
};
