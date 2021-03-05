import React, { useState, useEffect, useRef } from "react";

import Image from "../../../common/Image";

import headerImage from "../images/thrive-banner.svg";
import Logo from "../images/logo-light.svg";
import ThriveVideo from "../images/thrive-front.mp4";
import ArrowDown from "../images/arrow-down.svg";

import "./thriveBanner.css";

const Banner = ({
  scrollDesc,
  getThriveInvite,
  scrollSpeakers,
  scrollAgenda,
}) => {
  const [showArrow, setShowArrow] = useState(true);
  const [loading, setLoading] = useState(true);

  const bannerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio < 0.9) setShowArrow(false);
        if (entry.intersectionRatio > 0.9) setShowArrow(true);
      },
      { threshold: [1, 0.85] }
    );
    if (bannerRef.current)
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
      {loading && <Loading/>}
      <video src={ThriveVideo} loop muted autoplay="autoplay"
        onLoadedData={() => { setLoading(false) }}
      >
      </video>
      <div className="thr746Nav web-align thr746FadeInUp">
        <Image width={150} src={Logo} alt="logo" />
        <div className="thr746BannerSection thr746FadeInUp">
          <span onClick={scrollDesc}>ABOUT THRIVE</span>
          <span onClick={scrollSpeakers}>SPEAKERS</span>
          <span onClick={scrollAgenda}>AGENDA</span>
          <span onClick={getThriveInvite} className="thr746Prim">
            REGISTER FOR FREE
          </span>
        </div>
      </div>
      <div className="thr746HeaderTitle thr746FadeInUp">
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

const Loading = () => {
  return (
    <div className="thr746Loading">
    </div>
  )
}

export default Banner;
