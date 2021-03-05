import React, { Suspense, useRef } from "react";

import Button from "../../ui/Button";
import Image from "../../common/Image";
import AnchorLink from "../../common/AnchorLink";

import Banner from "./ThriveBanner";
import Description from "./ThriveDescription";
import Details from "./ThriveDetails";
//import SpeakersInfo from "./ThriveSpeakersInfo";
import ThriveAgenda from "./ThriveAgenda";

import LetsThrive from "./images/lets-thrive.svg";
import FacebookIcon from "./images/facebook.svg";
import TwitterIcon from "./images/twitter.svg";
import LinkedinIcon from "./images/linkedin.svg";
import FooterLogo from "./images/footer-logo.svg";

import "./thriveLandingPage.css";

const SpeakersInfo = React.lazy(() => import('./ThriveSpeakersInfo'));

const ThriveLandingPage = () => {
  const descRef = useRef();
  const detailsRef = useRef();
  const speakersRef = useRef();
  const agendaRef = useRef();

  const scrollDesc = () => {
    descRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollSpeakers = () => {
    speakersRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollAgenda = () => {
    agendaRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Banner
        scrollDesc={scrollDesc}
        scrollDetails={scrollDesc}
        scrollSpeakers={scrollSpeakers}
        scrollAgenda={scrollAgenda}
        getThriveInvite={getThriveInvite}
      />
      <Description descRef={descRef} getThriveInvite={getThriveInvite} />
      <Details detailsRef={detailsRef} />
      <Suspense fallback={<Loading />}>
        <SpeakersInfo speakersRef={speakersRef} />
      </Suspense>
      <ThriveAgenda agendaRef={agendaRef} getThriveInvite={getThriveInvite} />
      <ThriveBottom />
    </>
  );
};

const ThriveBottom = () => {
  return (
    <>
      <div className="thr746BottomBackground thr746FullScreen">
        <div></div>
        <div className="thr746BottomDesc">
          <div className="thr746BottomTitle">
            <Image src={LetsThrive} alt="lets Thrive" />
          </div>
          <p className="thr746BottomText">
            At Thrive 2021, we aim to create a platform for young Indians to unleash their wealth creation potential. If you want to learn from the best, then Thrive is for you. Come join us on this incredible journey. See you there!
          </p>
          <div>
            <div className="thr746BottomButtonWrapper">
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
      <div className="thr746Contact">
        <div>Share Via</div>
        <div className="thr746SocialMedia">
          <AnchorLink
            url="https://www.facebook.com/sharer/sharer.php?u=https://www.groww.in/thrive&t=Hi, check out Thrive"
            target="_blank"
          >
            <Image src={FacebookIcon} alt="Facebook" />
          </AnchorLink>

          <AnchorLink
            url="https://twitter.com/intent/tweet?url=groww.in/thrive&text=Hi, check out Thrive"
            target="_blank"
          >
            <Image src={TwitterIcon} alt="Twitter" />
          </AnchorLink>
          <AnchorLink
            url="https://www.linkedin.com/sharing/share-offsite/?url=groww.in/thrive"
            target="_blank"
          >
            <Image src={LinkedinIcon} alt="Linkedin" />
          </AnchorLink>
        </div>
        <Image src={FooterLogo} alt="logo" />
      </div>
    </>
  );
};

const getThriveInvite = () => {
  const thriveInviteLink = "https://trygroww.typeform.com/to/QS5dm7PK";
  window.open(thriveInviteLink, "_blank");
};

const Loading = () => {
  return (
    <div className="thr746Loading">
    </div>
  )
}

export default ThriveLandingPage;
