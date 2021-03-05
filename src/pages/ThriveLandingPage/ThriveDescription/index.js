import React, { useEffect} from "react";

import  Image  from "../../../common/Image";
import Button  from "../../../ui/Button";

import ThriveLogo from "../images/thrive-logo.svg";
import thriveDescHeading from "../images/thriveDescHeading.svg"

import "./thriveDescription.css";

const Description = ({ descRef, getThriveInvite }) => {

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([ entry ]) => {
        if (entry.intersectionRatio >= 0.2)
          entry.target.className = `thr746Desc thr746FullScreen`;
      },
      { threshold: 0.2 }
    );
    observer.observe(descRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="thr746NotVisible" ref={descRef}>
      <div className="thr746DescHeading thr746FadeInUp">
        <Image
          src={thriveDescHeading}
          alt="Learn Evolve Thrive"
          useLazyLoad={false}
        />
      </div>
      <div className="thr746Descgrid thr746FadeIn">
        <Image
          src={ThriveLogo}
          alt="thrive Logo"
          width={260}
          height={390}
          useLazyLoad={false}
        />
        <div className="thr746DescBox">
          <p>
            The Indian economy is at an inflexion point, moving towards a V-shaped recovery. Thrive aims to empower the new crop of retail investors who are bullish on India, make the most of these exciting times.
          </p>
          <p>
            <span className="fw500">#LetsThrive</span>
          </p>
          <div className="thr746DescButtonWrapper">
            <Button
              onClick={getThriveInvite}
              buttonText="GET INVITED"
              width={386}
              height={76}
              fontSize={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
