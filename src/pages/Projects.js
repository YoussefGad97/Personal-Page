import React from 'react';
import '../styles/Projects.scss';

const Projects = () => {
  const projects = [
    {
      name: "Project One",
      description: "A React-based web application with modern UI/UX principles",
      image: "/path-to-image1.jpg",
      github: "https://github.com/yourusername/project1"
    },
    {
      name: "Project Two",
      description: "Full-stack application with Node.js backend",
      image: "/path-to-image2.jpg",
      github: "https://github.com/yourusername/project2"
    },
    {
      name: "Project Three",
      description: "E-commerce platform with payment integration",
      image: "/path-to-image3.jpg",
      github: "https://github.com/yourusername/project3"
    },
    {
      name: "Project Four",
      description: "Real-time chat application using WebSocket",
      image: "/path-to-image4.jpg",
      github: "https://github.com/yourusername/project4"
    },
    {
      name: "Project Five",
      description: "Portfolio website with cyberpunk theme",
      image: "/path-to-image5.jpg",
      github: "https://github.com/yourusername/project5"
    },
    {
      name: "Project Six",
      description: "Social media dashboard with analytics",
      image: "/path-to-image6.jpg",
      github: "https://github.com/yourusername/project6"
    }
  ];

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
    </div>
  );
};

export default Projects;
