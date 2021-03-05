import React from "react";

import Image  from "../../../common/Image";

import "./thriveDetails.css";

import OneDayImg from "../images/1-day.png";
import HoursImg from "../images/6-hours.png";
import OneKView from "../images/oneK.svg";
import TenSpeakers from "../images/10_speakers.svg";

const Details = ({ detailsRef }) => {
  return (
    <div className="thr746Details thr746FullScreen" ref={detailsRef}>
      <div className="thr746DetailsGrid">
        <div className="item">
          <Image src={OneDayImg} alt="one day" />
        </div>
        <div className="item">
          <Image src={HoursImg} alt="hours day" />
        </div>
        <div className="thr746DetailsOneK">
          <Image src={OneKView} alt="one day" />
        </div>
        <div className="item">
          <Image src={TenSpeakers} alt="one day" />
        </div>
      </div>
    </div>
  );
};

export default Details;
