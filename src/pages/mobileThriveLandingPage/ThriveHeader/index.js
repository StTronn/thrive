import React, { useState } from "react";

import Image from "../../../common/Image";

import lightLogo from "../images/light-logo.svg";
import RightArrow from "../images/right_arrow.svg";
import CloseIcon from "../images/cross.svg";
import HamIcon from "../images/ham.svg";

import "./thriveHeader.css";

const ThriveHeader = ({ getThriveInvite, descRef, speakersRef, agendaRef }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const scrollDesc = () => {
    descRef.current.scrollIntoView({ behavior: "smooth" });
    handleToggle();
  };

  const scrollSpeakers = () => {
    speakersRef.current.scrollIntoView({ behavior: "smooth" });
    handleToggle();
  };

  const scrollAgenda = () => {
    agendaRef.current.scrollIntoView({ behavior: "smooth" });
    handleToggle();
  };

  const closeMenu = () => {
    setToggleMenu(false);
  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className={toggleMenu ? "thrm746NavVisible" : ""}>
      <div className="thrm746NavTop">
        <Image src={lightLogo} alt={"Groww Logo"} height={28} />
        <Image
          src={HamIcon}
          alt="key right"
          width={21}
          height={21}
          onClick={handleToggle}
        />
      </div>

      <div className=" thrm746NavWrapper " onClick={closeMenu}>
        <div className="thrm746NavMenu" onClick={stopPropagation}>
          <div className="thrm746MenuClose">
            <Image
              src={CloseIcon}
              alt="key right"
              width={21}
              height={21}
              onClick={handleToggle}
            />
          </div>
          <div className="thrm746MenuSection">
            <div onClick={scrollDesc}>About Thrive</div>
            <div onClick={scrollSpeakers}>Speakers</div>
            <div onClick={scrollAgenda}>Agenda</div>
          </div>
          <div className="thrm746MenuInvited" onClick={getThriveInvite}>
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
  );
};

export default ThriveHeader;
