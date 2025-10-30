import React from 'react';
import Tilt from 'react-parallax-tilt';
import { FaGithub } from 'react-icons/fa';
import { projects } from "../../constants";

const ProjectCard = ({ title, description, image, tags, github, webapp }) => {
  return (
    <Tilt
      className="parallax-effect-glare-scale"
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1.02}
    >
      <div className="flex flex-col h-full bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-cyan-400/50">
        {/* Project Image */}
        <div className="relative h-52 w-full">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Project Details */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          <p className="text-gray-300 text-sm mb-4 flex-grow">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-900 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className={`flex ${github ? 'justify-between' : 'justify-center'} gap-4 mt-auto`}>
            {/* Live Demo */}
            {webapp && (
              <a
                href={webapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-4 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold rounded-lg shadow-md hover:from-green-500 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
              >
                Live Demo
              </a>
            )}

            {/* GitHub Button - only show if link exists */}
            {github && github !== '#' && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-4 py-2 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <FaGithub size={20} />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </Tilt>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 text-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          My Projects
        </h2>
        <p className="text-center text-gray-400 text-lg mb-12">
          Here are a few projects I've worked on recently.
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              github={project.github}
              webapp={project.webapp}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
