import "./Projects.css";
export default function Projects(){
        const projectData = [
            {
              imgSrc: "/venuevista.png", 
              imgAlt: "VenueVista",
              title: "VenueVista: Online Event Management Platform",
              description:
                "Developed an intuitive event management platform for hall bookings and catering services, streamlining the event planning process with a secure, user-friendly interface, increasing booking efficiency by 40%.",
              githubLink: "https://github.com/HarichandanaPulaparti",
            },
            {
              imgSrc: "/outpatient.png", 
              imgAlt: "Outpatient Clinic EMR System",
              title: "Outpatient Clinic EMR System: Streamlining Patient Records",
              description:
                "Designed and developed a database system for outpatient EMRs, focusing on improved data management practices. Reduced data retrieval time by 15% through optimized queries and ensured data integrity through a rigorous BCNF-compliant design.",
                githubLink: "https://github.com/HarichandanaPulaparti",
            },
            {
              imgSrc: "/budgetapp.jpeg", 
              imgAlt: "Budget Tracking App",
              title: "Budget Tracking App",
              description:
                "Developed a budget tracking mobile application using Kotlin, enabling users to efficiently manage their expenses and income and implemented a robust SQLite database to store transaction data securely.",
                githubLink: "https://github.com/HarichandanaPulaparti",
            },
        {
                imgSrc: "/smartHealth.png",
              imgAlt: "Smart Health Predictor ",
              title: "Smart Health Predictor",
              description:"Implemented a webapp using Angular to predict potential health concerns based on user data. Secured user information with arobust MongoDB database, ensuring data privacy and regulatory compliance. Increased active usage by 40% through interactive features encouraging regular health monitoring.",
              githubLink: "https://github.com/HarichandanaPulaparti",
        }
        
          ];
          function handleProjectClick(githubLink){
            window.open(githubLink,"_blank");
          }
          return (
            <>
            <div className="projects-container">
              <div className="projects-grid">
                {projectData.map((project, index) => (
                  <div className="project-card" key={index} onClick={() => handleProjectClick(project.githubLink)}>
                    <img
                      src={project.imgSrc}
                      alt={project.imgAlt}
                      className="project-image"
                    />
                    <div
                className="external-link-icon"
                onClick={(e) => {
                  e.stopPropagation(); // Prevents triggering the card click
                  handleProjectClick(project.githubLink);
                }}
              >
                🔗
              </div>
                    <h2 className="project-title">{project.title}</h2>
                    <p className="project-description">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
            </>
          );
            
}