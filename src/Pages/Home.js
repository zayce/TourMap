import { AboutUs } from "../AboutUsComponent/AboutUs";
import { CalendarPicker } from "../CalendarComponent/Calendar";
import LocationMarkerAnimation from "../LocalMarkerAnimationComponent/LocalMarkerAnimation";

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
          <TourComponent />
          <WhyUs />
          <SwiperCitytourComponent />
          <ServicesProvided />
          <CalendarPicker />
        </div>
      </div>
    </>
  );
};
