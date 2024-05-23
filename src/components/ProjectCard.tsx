import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div
      style={{ background: 'rgba(15, 15, 20, 0.25)', borderColor: '#3E5FAA' }}
      className="backdrop-blur-2xl border  rounded-2xl w-1/5 h-48 p-4  cursor-pointer"
    >
      <Link to="/stream">
        <h2 className="text-lg font-semibold text-center pt-14 text-white">
          {project}
        </h2>
      </Link>
    </div>
  );
};


export default ProjectCard;
