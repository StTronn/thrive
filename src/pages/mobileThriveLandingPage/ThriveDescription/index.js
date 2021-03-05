import React from "react";

import  Image  from "../../../common/Image";
import  Button  from "../../../ui/Button";

import ThriveLogo from "../images/thrive-logo.svg";

import "./thriveDescription.css";

const Description = ({ getThriveInvite, descRef }) => {
  return (
    <div className="thrm746Desc thrm746FullScreen" ref={descRef}>
      <div className="thrm746DescHeading">
        Learn. Evolve. <span className="thrm746Prim">Thrive</span>.
      </div>
      <div className="thrm746DescGrid">
        <div>
          <Image
            src={ThriveLogo}
            alt="thrive Logo"
            width={180}
            height={180}
            useLazyLoad={false}
          />
        </div>
        <div className="thrm746DescBox">
          <p>
            The Indian economy is at an inflexion point, moving towards a V-shaped recovery. Thrive aims to empower the new crop of retail investors who are bullish on India, make the most of these exciting times.
          </p>
          <p>
          <span className="fw500"> #LetsThrive </span>
          </p>
          <div className="thrm746DescButtonWrapper">
            <Button
              onClick={getThriveInvite}
              buttonText="GET INVITED"
              width="100%"
              height={56}
              fontSize={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
