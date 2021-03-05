import React from "react";

import  Image  from "../../../common/Image";

import Ankur from "../images/guest/Ankur_Warikoo.png";
import Deepinder from "../images/guest/Deepinder_Goyal.png";
import Kunal from "../images/guest/Kunal_Shah.png";
import Nithin from "../images/guest/Nithin_Kamath.png";
import Raamdeo from "../images/guest/Raamdeo_Agrawal.png";
import Rachana from "../images/guest/Rachana_Ranade.png";
import Radhika from "../images/guest/Radhika_Gupta.png";
import Sanjeev from "../images/guest/Sanjeev_Bhikchandani.png";
import Anu from "../images/guest/Anu_Hariharan.png";
import Jhunhun from "../images/guest/Rakesh_Jhunjhunwala.png";
import Kalyan from "../images/guest/Kalyan_Krishnamurthy.png";

import "./thriveSpeakersInfo.css";

const speakerArray = [
  {
    info: "Sanjeev Bhikchandani is the founder and executive vice chairman of Info Edge which owns Naukri.com, Jeevansaathi.com, 99Acres.com and Shiksha.com. He is also the co-founder  of Ashoka University. Bikhchandani has also invested in successful ventures like Zomato, Policybazaar among others. He was awarded the Padma Shri Award, in January 2020.",
    name: "Sanjeev Bhikchandani",
    title: "Founder",
    org: "Naukri",
    img: Sanjeev
  },
  {
    info: "A chartered accountant by profession, Rakesh Jhunjhunwala an investor and the CEO of asset management firm, Rare Enterprises. According to Forbes, he is amongst India's richest personalities with a networth of more than $3 billion. ",
    name: "Rakesh Jhunjhunwala",
    title: "CEO",
    org: "Rare Enterprises",
    img: Jhunhun
  },
  {
    info: "Born in a middle class family in Chattisgarh, Raamdeo Agrawal is known among the richest stock market investors in India. In 2018, Forbes included Agrawal in the list of India’s billionaires. A chartered accountant by profession, Agrawal is the author of The Art of Wealth Creation and Corporate Numbers Game.  ",
    name: "Raamdeo Agrawal",
    title: "Co-founder",
    org: "Motilal Oswal",
    img: Raamdeo,
  },
  {
    info: " Kalyan Krishnamurthy is the CEO of Flipkart. Prior to joining Flipkart, Krishnamurthy served as the Director of Finance and Portfolio Companies at Tiger Global Management. Previously,Krishnamurthy held various senior positions such as Director of Financial Planning and Analysis at eBay APAC and Finance Director (South-east Asia, Hong Kong) at eBay.",
    name: "Kalyan Krishnamurthy",
    title: "CEO",
    org: "Flipkart",
    img: Kalyan,
  },
  {
    info: "Nithin Kamath is the Founder and CEO of the Zerodha. He is the co-founder of the Alternate Investment Fund - True Beacon. Nithin also heads Rainmatter, a VC fund and incubator for innovative startups. Kamath serves on the advisory committees of SEBI and various Indian stock exchanges.",
    name: "Nithin Kamath",
    title: "Founder",
    org: "Zerodha",
    img: Nithin,
  },
  {
    info: "Anu Hariharan is a YC Continuity Investing Partner. Previously, Anu was an investment partner at Andreessen Horowitz, where she worked with the management teams of portfolio companies including Airbnb, Instacart, Medium, OfferUp and Udacity. Prior to this, Anu was a Principal at BCG's Private Equity Practice and was a senior software engineer at Qualcomm.",
    name: "Anu Hariharan",
    title: "Partner",
    org: "YC Continutiy",
    img: Anu,
  },
  {
    info: "Ankur Warikoo is an entrepreneur, angel investor and motivational speaker. He co-founded Nearbuy in 2015 and served as its CEO till 2019. Warikoo’s previous stints include being CEO of Groupon India and APAC, MD of Rocket Internet India, and co-founder at Accentium Web.",
    name: "Ankur Warikoo",
    title: "Founder",
    org: "Nearbuy",
    img: Ankur,
  },
  {
    info: "Radhika Gupta is the CEO of Edelweiss Asset Management Limited. Gupta started at Edelweiss Global Asset Management as business head of multi-strategy funds and was responsible for setting the strategic direction for the team’s investment, distribution and platform. She is India’s only female head of a major asset manager and has set up the country's first domestic hedge fund.",
    name: "Radhika Gupta",
    title: "CEO",
    org: "Edelweiss",
    img: Radhika,
  },
  {
    info: "An MBA drop out from Narsee Monjee, serial entrepreneur and angel investor Kunal Shah has built many consumer focused businesses such as PaisaBack, Freecharge (later acquired by Axis Bank) and Cred. Go-Jek, Zilingo, Razorpay, Unacademy etc are few of the many marquee names in his investment portfolio.",
    name: "Kunal Shah",
    title: "Founder",
    org: "Cred",
    img: Kunal,
  },
  {
    info: "Deepinder Goyal is the co-founder and CEO, Zomato. Before Zomato, Goyal worked as a management consultant with Bain & Company. Deepinder is also an active investor and has invested in ventures like SquadStack, Bira 91, HyperTrack, TerraDo,etc.",
    name: "Deepinder Goyal",
    title: "Founder",
    org: "Zomato",
    img: Deepinder,
  },
  {
    info: "Rachna Ranade is a Pune-based chartered accountant, investor, and teacher who has more than 10 years of experience in auditing. She has a YouTube channel 'CA Rachana Phadke Ranade' where she posts videos about the latest trends in the stock market, investing and personal finance.",
    name: "Rachana Ranade",
    title: "Educator",
    org: "Youtuber",
    img: Rachana,
  },
];

const SpeakersInfo = ({ speakersRef }) => {
  return (
    <div className="thrm746Speaker thrm746FullScreen" ref={speakersRef}>
      <div className="thrm746SpeakerTitle">
        Meet <div className="thrm746SpeakerTitlePadding"> the Speakers</div>
      </div>
      <div className="thrm746SpeakerDesc">
        Here's our exclusive list of speakers who will be appearing at THRIVE 2021.

      </div>
      <div className="thrm746SpeakerGrid">
        {speakerArray.map((speaker) => (
          <SpeakerCard speaker={speaker} />
        ))}
      </div>
    </div>
  );
};

const SpeakerCard = ({ speaker: { name, title, org, img } }) => {
  return (
    <div>
      <div className="thrm746SpeakerCard">
        <Image src={img} alt={"Speaker photo"} width="156" height="190" />
      </div>
      <div className="thrm746SpeakerAbout">
        <div className="thrm746SpeakerName">{name}</div>
        <div className="thrm746SpeakerPos">
          {title} <br /> {org}
        </div>
      </div>
    </div>
  );
};

export default SpeakersInfo;
