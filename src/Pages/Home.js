import { Review } from "../CreatedRewiew/CreatedRewiew";
import { HomeQuestions } from "../HomeQuestions/HomeQuestions";
import { SwiperWall } from "../PromoutionComponent/SwiperWall";
import { SwiperCitytourComponent } from "../SwiperCitytourComponent/SwiperCitytourComponent";
import { TourComponent } from "../TourComponent/TourComponent";

import "./Home.scss";

export const Home = () => {
  return (
    <>
      <div className="Wrapper-Home">
        <SwiperWall />
        <div className="Inner-home">
          <TourComponent />
          <Review />
          <HomeQuestions />
          <SwiperCitytourComponent />
        </div>
      </div>
    </>
  );
};
