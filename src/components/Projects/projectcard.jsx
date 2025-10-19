import React from 'react';
import Tilt from 'react-parallax-tilt';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ title, description, imageUrl, tech, demoLink, githubLink }) => {
  return (
    // Uses react-parallax-tilt for a 3D tilt effect on hover
    <Tilt
      className="parallax-effect-glare-scale"
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1.02}
    >
      <div className="flex flex-col h-full bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-cyan-400/50">
        {/* Project Thumbnail Image */}
        <div className="relative h-52 w-full">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Project Details */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Project Title */}
          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          
          {/* Project Description */}
          <p className="text-gray-300 text-sm mb-4 flex-grow">{description}</p>
          
          {/* Technologies Used */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((techName, index) => (
              <span 
                key={index} 
                className="bg-blue-900 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full"
              >
                {techName}
              </span>
            ))}
          </div>

          {/* Buttons: Live Demo & GitHub */}
          <div className="flex justify-between gap-4 mt-auto">
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-4 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold rounded-lg shadow-md hover:from-green-500 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
            >
              Live Demo
            </a>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-4 py-2 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <FaGithub size={20} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default ProjectCard;