import './Courses.css';
export default function Courses() {
    return (
      <>
        <h2 className="section-heading">Education</h2>
  <div className="education-container">
    <div className="education-card">
      <h3>Master's in Computer Science</h3>
      <p className="university">University of North Carolina at Charlotte</p>
      <p><strong>GPA:</strong> 4/4</p>
      <h4>Courses:</h4>
      <ul>
        <li><strong>Data Structures and Algorithms:</strong> Proficiency in problem-solving techniques.</li>
        <li><strong>Applied Databases:</strong> Relational database design, SQL programming, and integrations.</li>
        <li><strong>Visual Analytics:</strong> Tools and techniques for uncovering patterns and insights.</li>
      </ul>
    </div>

    <div className="education-card">
      <h3>Bachelor's in Computer Science</h3>
      <p className="university">Gokaraju Rangaraju Institute of Engineering and Technology</p>
      <p><strong>GPA:</strong> 8.35/10</p>
      <h4>Courses:</h4>
      <ul>
        <li><strong>Operating Systems:</strong> Process management, memory allocation, and file systems.</li>
        <li><strong>Computer Architecture:</strong> Design of hardware and system-level programming.</li>
        <li><strong>Object-Oriented Programming:</strong> Software design using OOP principles.</li>
      </ul>
    </div>
  </div>

      </>
    );
  }
  