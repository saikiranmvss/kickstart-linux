// ProjectCard.js
import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card">
        <img src={project.image} className="card-img-top" alt={project.title} />
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
