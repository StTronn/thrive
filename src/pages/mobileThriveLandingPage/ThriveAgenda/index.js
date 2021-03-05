import React from "react";

import  Button  from "../../../ui/Button";

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

const Agenda = ({ getThriveInvite, agendaRef }) => {
  return (
    <div className=" thrm746Agenda thrm746FullScreen" ref={agendaRef}>
      <div className="thrm746Timeline">
        <div className="thrm746AgendaTitle">AGENDA</div>
        <div className="thrm746AgendaDesc">
          Here's a list of sessions we've planned for the rollercoaster 6 hours of THRIVE 2021!
          {/* <p>
            You can download the full agenda
            <span className="thrm746AgendaLink"> here.</span>
          </p> */}
        </div>
        {agendaList.map((timeline) => (
          <TimelineComponent timelineObj={timeline} key={timeline.time} />
        ))}
      </div>

      <Button
        onClick={getThriveInvite}
        buttonText="GET INVITED"
        width="100%"
        height={56}
        fontSize={16}
      />
    </div>
  );
};

const TimelineComponent = ({ timelineObj: { type, time, desc } }) => {
  return (
    <div className={`thrm746AgendaCointainer`}>
      <div className={`thrm746AgendaCircle`}></div>
      <div>
        <div className="thrm746AgendaTime">
          {time}
          {type ? (
            <span
              className={
                type === "Master Class"
                  ? "thrm746TalkTagBlue"
                  : "thrm746TalkTagGreen"
              }
            >
              {type}
            </span>
          ) : null}
        </div>
        <div className="thrm746AgendaSpeech">{desc}</div>
      </div>
    </div>
  );
};

export default Agenda;
