import React from "react";

import Image from "../../../common/Image";

import HeaderImage from "../images/thrive-header.svg";
import HeaderLine from "../images/line.svg";
import RightArrow from "../images/right_arrow.svg";

import "./thriveBanner.css";

const Banner = ({ getThriveInvite }) => {
  return (
    <div className="thrm746Header thrm746FullScreen">
      <div className="thrm746HeaderTitle">
        <Image src={HeaderImage} alt="thrive header" useLazyLoad={false} />
      </div>
      <div className="thrm746ArrowDown">
        <Image src={HeaderLine} alt="thrive header" useLazyLoad={false} />
      </div>

      <div className="thrm746HeaderDesc">
        <span className="fw500"> Thrive by Groww</span> is an initiative to bring together the smartest minds of India to talk about money.
      </div>
      <div onClick={getThriveInvite} className="thrm746HeaderInvited">
        Get Invited
        <Image
          src={RightArrow}
          alt="key right"
          width={21}
          height={21}
        />
      </div>
    </div>
  );
};

export default Banner;
