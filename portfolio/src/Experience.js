import React from "react";
import "./Experience.css";

const experiences = [
  { 
    year: "2023-2024", 
    role: "Software Engineer Intern", 
    company: "University of North Carolina at Charlotte", 
    location: "United States", 
    logo: "unclogo.png" 
  },
  { 
    year: "2021-2022", 
    role: "Software Engineer", 
    company: "Accenture Sol Pvt. Ltd.", 
    location: "Hyderabad", 
    logo: "accenturelogo.png" 
  },
  { 
    year: "2020-2021", 
    role: "Full Stack Developer", 
    company: "Horizon BioLabs", 
    location: "Hyderabad", 
    logo: "horizonlogo.jpg" 
  },
];

const Experience = () => {
  return (
    <div className="timeline-container">
      {experiences.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-logo">
            <img src={item.logo} alt={item.company} />
          </div>
          <div className="timeline-details">
            <h3 className="timeline-company">{item.company}</h3>
            <p className="timeline-year">{item.year}</p>
            <p className="timeline-role">{item.role}</p>
            <p className="timeline-location">{item.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
