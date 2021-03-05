import React from "react";

import  Image  from "../../../common/Image";
import  Button  from "../../../ui/Button";
import thriveAgendaHeading from "../images/thriveAgendaHeading.svg";

import "./thriveAgenda.css";


const agendaList = [
  {
    time: "10:00 AM - 10:20 AM",
    desc: "Welcome Note",
  },

  {
    time: "10:30 AM - 11:15 AM",
    desc: "What India and Indians need to do to achieve double digit growth",
    type: "Fireside Chat",
  },
  {
    time: "11:30 AM - 12:25 PM",
    desc: "What to do in your 20s to retire before 40?",
    type: "Master Class",
  },
  {
    time: "12:30 PM - 1:25 PM",
    desc: "Why and how to invest in yourself?",
    type: "Panel",
  },
  {
    time: "1:30 PM - 2:30 PM",
    desc: "How to overcome behavioural biases as an investor?",
    type: "Panel",
  },
  {
    time: "2:30 PM - 3:15 PM",
    desc: "10 commandments to make money in the stock market",
    type: "Master Class",
  },
  {
    time: "3:15 PM - 4:00 PM",
    desc: "Why India will see an IPO Tech boom in 2021",
    type: "Panel",
  },
];

const Agenda = ({ agendaRef, getThriveInvite }) => {
  return (
    <div className=" thr746Agenda thr746FullScreen" ref={agendaRef}>
      <div className="thr746AgendaDesc">
        <div className="thr746AgendaTitle">
          <Image
            src={thriveAgendaHeading}
            alt="Learn Evolve Thrive"
            useLazyLoad={false}
          />

        </div>
        <p>
          Here's a list of sessions we've planned for the rollercoaster 6 hours of THRIVE 2021!
        </p>
        {/* <p>
          You can download the full agenda
          <AnchorLink
            url={agendaLink}
            addAnchorClass="thr746Prim"
            isCsr={false}
          >
            &nbsp;here.
          </AnchorLink>
        </p> */}
        <div className="thr746AgendaButtonWrapper">
          <Button
            onClick={getThriveInvite}
            buttonText="GET INVITED"
            width={386}
            height={76}
            fontSize={20}
          />
        </div>
      </div>
      <div className="thr746Timeline">
        {agendaList.map((timeline) => (
          <TimelineComponent timelineObj={timeline} key={timeline.time} />
        ))}
      </div>
    </div>
  );
};

const TimelineComponent = ({ timelineObj: { type, time, desc } }) => {
  return (
    <div className={`thr746AgendaCointainer`}>
      <div className={`thr746AgendaCircle`}></div>
      <div>
        <div className="thr746AgendaTime">
          {time}
          {type ? (
            <span
              className={
                type === "Master Class"
                  ? "thr746TalkTagBlue"
                  : "thr746TalkTagGreen"
              }
            >
              {type}
            </span>
          ) : null}
        </div>
        <div className="thr746AgendaSpeech">{desc}</div>
      </div>
    </div>
  );
};

export default Agenda;
