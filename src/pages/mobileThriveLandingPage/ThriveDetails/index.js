import React from "react";

import  Image  from "../../../common/Image";

import "./thriveDetails.css";

import DetailsImage from "../images/details.svg";

const Details = () => {
  return (
    <div className="thrm746Details thrm746FullScreen">
      <div className="thrm746DetailsGrid">
        <Image src={DetailsImage} alt="one day" />
      </div>
    </div>
  );
};

export default Details;
