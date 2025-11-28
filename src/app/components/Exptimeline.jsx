import { BriefcaseBusiness } from "lucide-react";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Exptimeline = ({
  CompanyName,
  Possition,
  Work,
  position,
  date,
  backgroundColor = "rgb(33, 150, 243)",
  iconColor = "var(--text-color)",
}) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: backgroundColor,
        color: "var(--text-color)",
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${backgroundColor}`,
      }}
      date={date}
      iconStyle={{
        background: backgroundColor,
        color: iconColor,
      }}
      icon={<BriefcaseBusiness />}
      position={position}
    >
      <h2>{CompanyName}</h2>
      <h3 className="vertical-timeline-element-title">{Possition}</h3>
      <p>{Work}</p>
    </VerticalTimelineElement>
  );
};

export default Exptimeline;
