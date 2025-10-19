import React from 'react';
import ProjectCard from './projectcard';

// --- HOW TO ADD YOUR IMAGES ---
// 1. Add your project images (e.g., `project1.png`) to the `src/assets/` folder.
// 2. Import them here like this:
// import project1Image from '../assets/project1.png';
// import project2Image from '../assets/project2.png';

// Placeholder image (replace with your actual imports)
import profileImage1 from '../../assets/project1.jpg' // Using your existing icon as a placeholder
import profileImage2 from '../../assets/project2.jpg'
import profileImage3 from '../../assets/project3.jpg'

// --- ADD YOUR PROJECT DETAILS HERE ---
const projectData = [
  {
    title: 'Event Company Website',
    description: 'An Event Company Website build React and CSS.',
    imageUrl: profileImage1, // Replace with your actual image variable, e.g., project1Image
    tech: ['React', 'CSS', 'Vite', 'Framer Motion'],
    demoLink: '#', // Replace with your live demo link
    githubLink: '#', // Replace with your GitHub repo link
  },
  {
    title: 'Johns Highland Comfort',
    description: 'A website for a guest house, e-commerce platform with features like cart, checkout, and payments.',
    imageUrl: profileImage2, // Replace with your actual image variable
    tech: ['Wordpress', 'HTML', 'CSS', 'Javascript'],
    demoLink: '#', // Replace with your live demo link
    githubLink: '#', // Replace with your GitHub repo link
  },
  {
    title: 'UI-UX Design',
    description: 'A UI-UX Design for a company "InternMap"',
    imageUrl: profileImage3, // Replace with your actual image variable
    tech: ['Figma', 'Whimsical'],
    demoLink: '#', // Replace with your live demo link
    githubLink: '#', // Replace with your GitHub repo link
  },
];
// -------------------------------------


const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          My <span className="text-white-400">Projects</span>
        </h2>
        <p className="text-center text-gray-400 text-lg mb-12">
          Here are a few projects I've worked on recently.
        </p>
        
        {/* Responsive Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tech={project.tech}
              demoLink={project.demoLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;