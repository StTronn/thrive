import React, { useRef } from "react";

import Image from "../../common/Image";
import AnchorLink from "../../common/AnchorLink";

import ThriveHeader from "./ThriveHeader";
import ThriveBanner from "./ThriveBanner";
import ThriveDescription from "./ThriveDescription";
import ThriveDetails from "./ThriveDetails";
import ThriveSpeakersInfo from "./ThriveSpeakersInfo";
import ThriveAgenda from "./ThriveAgenda";

import LetsThrive from "./images/lets-thrive.svg";
import RightArrow from "./images/right_arrow.svg";
import FacebookIcon from "./images/facebook.svg";
import TwitterIcon from "./images/twitter.svg";
import LinkedinIcon from "./images/linkedin.svg";
import FooterLogo from "./images/footer-logo.svg";

import "./thriveLandingPage.css";

const ThriveLandingPage = () => {
  const descRef = useRef();
  const speakersRef = useRef();
  const agendaRef = useRef();

  return (
    <>
      <ThriveHeader
        descRef={descRef}
        speakersRef={speakersRef}
        agendaRef={agendaRef}
        getThriveInvite={getThriveInvite}
      />
      <ThriveBanner getThriveInvite={getThriveInvite} />
      <ThriveDescription getThriveInvite={getThriveInvite} descRef={descRef} />
      <ThriveDetails />
      <ThriveSpeakersInfo speakersRef={speakersRef} />
      <ThriveAgenda getThriveInvite={getThriveInvite} agendaRef={agendaRef} />
      <ThriveBottom />
    </>
  );
};

const ThriveBottom = () => {
  return (
    <>
      <div className="thrm746BottomBackground">
        <div className="thrm746BottomDesc">
          <div className="thrm746BottomTitle">
            <Image src={LetsThrive} alt="lets Thrive" />
          </div>
          <p className="thrm746BottomText">
            At Thrive 2021, we aim to create a platform for young Indians to
            unleash their wealth creation potential. If you want to learn from
            the best, then Thrive is for you. Come join us on this incredible
            journey. See you there
          </p>
          <div>
            <div onClick={getThriveInvite} className="thrm746BottomInvited">
              Get Invited
              <Image
                src={RightArrow}
                alt="key right"
                width={21}
                height={21}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="thrm746BottomImg"></div>
      <div className="thrm746Contact">
        <div>Share Via</div>
        <div className="thrm746SocialMedia">
          <AnchorLink
            url="https://www.facebook.com/sharer/sharer.php?u=https://www.groww.in/thrive&t=Hi, check out Thrive"
            isCsr={false}
            target="_blank"
          >
            <Image src={FacebookIcon} alt="Facebook" />
          </AnchorLink>

          <AnchorLink
            url="https://twitter.com/intent/tweet?url=groww.in/thrive&text=Hi, check out Thrive"
            isCsr={false}
            target="_blank"
          >
            <Image src={TwitterIcon} alt="Twitter" />
          </AnchorLink>
          <AnchorLink
            url="https://www.linkedin.com/sharing/share-offsite/?url=groww.in/thrive"
            isCsr={false}
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

export const RightKey = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
    </svg>
  );
};

export default ThriveLandingPage;
