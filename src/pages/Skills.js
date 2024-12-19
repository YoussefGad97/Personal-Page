import React from 'react';
import '../styles/Skills.scss';

const Skills = () => {
  const skills = [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 85 },
    { name: 'JAVASCRIPT', level: 80 },
    { name: 'REACTJS', level: 85 }
  ];

  return (
    <div className="skills-container">
      <div className="cyber-container slide-up" data-augmented-ui="tl-clip br-clip exe">
        <div className="skills-content">
          <div className="header">SKILL ANALYSIS</div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-row">
                <span className="label">{skill.name}:</span>
                <div className="progress-container" data-augmented-ui="tl-clip br-clip exe">
                  <div 
                    className="progress-bar" 
                    style={{ '--progress-width': `${skill.level}%` }}
                    data-augmented-ui="tl-clip br-clip exe"
                  >
                    <span className="progress-text">{skill.level}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
