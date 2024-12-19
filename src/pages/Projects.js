import React, { useState } from 'react';
import '../styles/Projects.scss';

const Projects = () => {
  const projects = [
    {
      name: "Project One",
      description: "A React-based web application with modern UI/UX principles",
      image: require('../assets/images/project1.png'),
      github: "https://github.com/yourusername/project1",
      details: "Detailed information about Project One."
    },
    {
      name: "Project Two",
      description: "Full-stack application with Node.js backend",
      image: require('../assets/images/project1.png'),
      github: "https://github.com/yourusername/project2",
      details: "Detailed information about Project Two."
    },
    {
      name: "Project Three",
      description: "E-commerce platform with payment integration",
      image: require('../assets/images/project1.png'),
      github: "https://github.com/yourusername/project3",
      details: "Detailed information about Project Three."
    },
    {
      name: "Project Four",
      description: "Real-time chat application using WebSocket",
      image: require('../assets/images/project1.png'),
      github: "https://github.com/yourusername/project4",
      details: "Detailed information about Project Four."
    },
    {
      name: "Project Five",
      description: "Portfolio website with cyberpunk theme",
      image: require('../assets/images/project1.png'),
      github: "https://github.com/yourusername/project5",
      details: "Detailed information about Project Five."
    },
    {
      name: "Project Six",
      description: "Social media dashboard with analytics",
      image: require('../assets/images/project1.png'),
      github: "https://github.com/yourusername/project6",
      details: "Detailed information about Project Six."
    }
  ];

  const [expandedProjectIndex, setExpandedProjectIndex] = useState(null);

  const handleCardClick = (index) => {
    setExpandedProjectIndex(index);
  };

  const closeExpandedCard = () => {
    setExpandedProjectIndex(null);
  };

  const goToNextProject = () => {
    setExpandedProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const goToPreviousProject = () => {
    setExpandedProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className="projects-container">
      <div className="cyber-container slide-up" data-augmented-ui="tl-clip br-clip exe">
        <div className="projects-content">
          <div className="header">PROJECT ARCHIVES</div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <a 
                key={index} 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-card"
                data-augmented-ui="tl-clip br-clip exe"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  handleCardClick(index);
                }}
              >
                <div className="image-container">
                  <img src={project.image} alt={project.name} />
                </div>
                <div className="project-info">
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {expandedProjectIndex !== null && (
        <div className="expanded-card-container">
          <div className="expanded-card">
            <div className="expanded-content">
              <div className="expanded-image">
                <img src={projects[expandedProjectIndex].image} alt={projects[expandedProjectIndex].name} />
              </div>
              <div className="expanded-details">
                <h3>{projects[expandedProjectIndex].name}</h3>
                <p>{projects[expandedProjectIndex].details}</p>
                <div className="expanded-buttons">
                  <button onClick={goToPreviousProject} disabled={expandedProjectIndex === 0}>Previous</button>
                  <button onClick={goToNextProject} disabled={expandedProjectIndex === projects.length - 1}>Next</button>
                  <button onClick={closeExpandedCard}>Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
