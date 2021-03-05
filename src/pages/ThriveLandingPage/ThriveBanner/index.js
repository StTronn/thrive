import React, { useState, useEffect, useRef } from "react";

import  Image  from "../../../common/Image";

import headerImage from "../images/thrive-banner.svg";
import ArrowDown from "../images/arrow-down.svg";

import "./thriveBanner.css";

const Banner = ({
  scrollDesc,
  getThriveInvite,
  scrollSpeakers,
  scrollAgenda,
}) => {
  const [ showArrow, setShowArrow ] = useState(true);

  const bannerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([ entry ]) => {
        if (entry.intersectionRatio < 0.9) setShowArrow(false);
        if (entry.intersectionRatio > 0.9) setShowArrow(true);
      },
      { threshold: [ 1, 0.85 ] }
    );
    observer.observe(bannerRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleArrowClick = () => {
    scrollDesc();
  };

  return (
    <div className="thr746Header thr746FullScreen" ref={bannerRef}>
      <div className="thr746Nav web-align">
        <Image width={150}  src="//assets-netstorage.groww.in/website-assets/prod/1.4.3/build/client/images/logo-light-groww.1815ad63.svg" alt="logo"/>
        <div className="thr746BannerSection">
          <span onClick={scrollDesc}>ABOUT THRIVE</span>
          <span onClick={scrollSpeakers}>SPEAKERS</span>
          <span onClick={scrollAgenda}>AGENDA</span>
          <span onClick={getThriveInvite} className="thr746Prim">
            REGISTER FOR FREE
          </span>
        </div>
      </div>
      <div className="thr746HeaderTitle">
        <Image src={headerImage} alt="thrive header" useLazyLoad={false} />
      </div>
      <div className="thr746ArrowWrapper" onClick={handleArrowClick}>
        <div
          className={
            showArrow ? `thr746ArrowDown thr746bounce` : "thr746NotVisible"
          }
        >
          <Image src={ArrowDown} alt="arrow down" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
