import { CalendarPicker } from "../CalendarComponent/Calendar";
import { HomeMap } from "../HomemapComponent/HomeMap";
import { Quote } from "../PromoutionComponent/SwiperWall";
import { Season } from "../ServicesProvidedComponent/SeasonComponent/Season";
import { ServicesProvided } from "../ServicesProvidedComponent/ServicesProvided";

import { SwiperCitytourComponent } from "../SwiperCitytourComponent/SwiperCitytourComponent";
import { TourComponent } from "../TourComponent/TourComponent";
import { WhyUs } from "../WhyUsComponent/WhyUs";

import "./Home.scss";

export const Home = () => {
  return (
    <>
      <div className="Wrapper-Home">
        {/* <div className="hero-animation-container">
          <LocationMarkerAnimation />
        </div> */}
        <Quote />
        <div className="Inner-home">
          <WhyUs />
          <TourComponent />
          <SwiperCitytourComponent />
          <ServicesProvided />
          <HomeMap />
          {/* <CalendarPicker /> */}
        </div>
      </div>
    </>
  );
};
