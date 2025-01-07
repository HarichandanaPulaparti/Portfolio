import React from 'react';
import './Background.css';
import Projects from './Projects';
import Experience from './Experience';
import Courses from './Courses';
import Contact from './Contact';

export default function FirstPage() {
  return (
    <>
      {/* Navigation Section */}
      <nav className="sticky-nav">
        <h2 className="subheading">
          <a href="#education" className="nav-link">EDUCATION</a> | 
          <a href="#experience" className="nav-link">EXPERIENCE</a> | 
          <a href="#projects" className="nav-link">PROJECTS</a> | 
          <a href="#skills" className="nav-link">SKILLS</a> | 
          <a href="#contact" className="nav-link">CONTACT</a>
        </h2>
      </nav>

      {/* Hero Section */}
      <div className="container">
        <div className="text-section">
          <h1 className="main-heading">Hello, I'm Chandana!</h1>
          <p className="description">
            I am a passionate software engineer with a Master’s in Computer Science from the University of North Carolina at Charlotte.
            With hands-on experience in front-end and full-stack development, I specialize in building dynamic, user-friendly web and mobile applications using modern technologies.
          </p>
          <p className="description">Explore my work and journey below!</p>
        </div>
        <img
          src="/image1.jpeg"
          alt="Profile"
          className="foreground-image"
        />
      </div>

      {/* Sections */}
      <section id="education" className="page-section">
        <Courses />
      </section>

      <section id="experience" className="page-section">
        <Experience />
      </section>

      <section id="projects" className="page-section">
        <Projects />
      </section>

      <section id="skills" className="page-section skills-section">
  <h2 className="skills-title">SKILLS</h2>
  <table className="skills-table">
    <thead>
      <tr>
        <th>Category</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Languages</td>
        <td>Java, C, C++, JavaScript, Python, PHP</td>
      </tr>
      <tr>
        <td>Databases</td>
        <td>MySQL, MongoDB, PostgreSQL</td>
      </tr>
      <tr>
        <td>Web Technologies</td>
        <td>HTML5, CSS3, AngularJS, ReactJS, Node.js, Express.js, Django, JQuery, Ajax, JSON, Bootstrap, Tailwind CSS</td>
      </tr>
      <tr>
        <td>API Integration & Development</td>
        <td>REST APIs, JSON, Ajax</td>
      </tr>
      <tr>
        <td>Developer Tools</td>
        <td>IntelliJ IDEA, Visual Studio, GitHub, AWS Cloud Services (SQS, SNS, IAM, KMS, S3, DynamoDB, EC2, ECS)</td>
      </tr>
    </tbody>
  </table>
</section>
<section id="contact" className="page-section contact-section">
        <Contact/>
      </section>
      <footer className="footer">
        <a
          href="https://github.com/HarichandanaPulaparti"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <img src="github.png" alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/hari-chandana-pulaparti/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <img src="linkedin.png" alt="LinkedIn" />
        </a>
      </footer>

    </>
  );
}
