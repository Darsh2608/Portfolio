"use client";
import React from "react";
import Exptimeline from "../components/Exptimeline";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Typography } from "@mui/material";

const experience = [
  {
    date: "Jan 2024 - May 2024",
    companyName: "Exemplar Technologies",
    possition: "Full Stack Developer as Intern",
    work: "Gained hands-on experience in full-stack development, focusing on frontend and backend integration. Developed a service management system for booking vendors using HTML, CSS, and C#. Implemented authentication using Amazon Cognito and managed user data with SQL Server Management Studio (SSMS)",
    backgroundColor: "#add8e6",
  },
  {
    date: "Jul 2024 - April 2025",
    companyName: " Unikwork Systems",
    possition: "React.js Developer",
    work: "Worked as a Front-End Developer, specializing in React.js and Next.js.  Experienced in responsive UI design using Tailwind CSS and Material UI. Integrated APIs using Axios and React Query. Also Utilized Git for version control  Developed and optimized reusable components to enhance performance and user experience.",
    backgroundColor: "#90ee90",
  },
  {
    date: "May 2025 - Present",
    companyName: "Exicom Technologies",
    possition: "Software Developer",
    work: "Worked as a Software Developer, responsible for building a custom software application that integrates with in-house hardware devices. Developing dynamic frontend features using Angular to enhance performance and user experience.",
    backgroundColor: "#ffffe0",
  },
];

const SkillPage = () => {
  return (
    <div>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        variant="h6"
      >
        My Experience
      </Typography>
      <VerticalTimeline>
        {experience.map((elem, idx) => (
          <Exptimeline
            key={idx}
            date={elem.date}
            CompanyName={elem.companyName}
            Possition={elem.possition}
            Work={elem.work}
            position={idx % 2 === 0 ? "left" : "right"}
            backgroundColor={elem.backgroundColor}
          />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default SkillPage;
