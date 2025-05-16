import React from "react";
import { Lottie } from "lottie-react";
import markerAnimationData from "./marker/markerAnimation.json";

const LocationMarkerAnimation = () => {
  return (
    <div className="location-marker">
      <Lottie animationData={markerAnimationData} loop={true} autoplay={true} />
    </div>
  );
};

export default LocationMarkerAnimation;
