import { SwiperWall } from "../PromoutionComponent/SwiperWall";
import { TourComponent } from "../TourComponent/TourComponent";

import "./Home.scss";

export const Home = () => {
  return (
    <>
      <div className="Wrapper-Home">
        <SwiperWall />
        <div className="Inner-home">
          <TourComponent />
        </div>
      </div>
    </>
  );
};
