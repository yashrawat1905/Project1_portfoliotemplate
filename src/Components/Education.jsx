// Education.js
import React from "react";

const educationDetails = [
  {
    id: 1,
    institution: "Datta Meghe College Of Engineering",
    degree: "Bachelor of Engineering",
    field: "Information Technology",
    year: "2025",
  },
  {
    id: 2,
    institution: "University B",
    degree: "Master of Science",
    field: "Software Engineering",
    year: "",
  },
  {
    id: 3,
    institution: "K.M Agarwal College of Arts, Commerce and Science",
    degree: "HSC",
    field: "Science",
    year: "2021",
  },
  {
    id: 4,
    institution: "Don Bosco High School",
    degree: "SSC",
    field: "General Studies",
    year: "2019",
  },
];

const Education = () => {
  return (
    <div className="education-container">
      <h2>Education</h2>
      <div className="education-grid">
        {educationDetails.map((education) => (
          <div key={education.id} className="education-cell">
            <h3>{education.institution}</h3>
            <p>{education.degree}</p>
            <p>{education.field}</p>
            <p>{education.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
