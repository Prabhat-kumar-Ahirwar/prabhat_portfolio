import React from 'react';
import FoodWasteImg from '../assets/FoodWaste.png';
import CEMOS from '../assets/CEMOS.png';
import StudyHubImg from '../assets/studyhub.png';
import portfolioPreview from '../assets/portfolio-preview.png';

const projectsData = [
  {
    title: "CEMOS Campus Electricity Monitoring",
    img: CEMOS,
    description: "Smart campus solution for monitoring, maintaining, and optimizing electricity usage with real-time tracking and analytics.",
    link: "https://github.com/Priyanshikhorwal/CEMOS",
    hoverColor: "green-500/20",
  },
  {
    title: "Study Hub",
    img: StudyHubImg,
    description: "Collaborative platform for students to share and access notes and study materials interactively.",
    link: "https://github.com/Prabhat-kumar-Ahirwar",
    hoverColor: "yellow-500/20",
  },
  {
    title: "Portfolio Website",
    img: portfolioPreview,
    description: "Personal portfolio showcasing skills, projects, and achievements built with React and Tailwind.",
    link: "https://github.com/Prabhat-kumar-Ahirwar/MyPortfolio.git",
    hoverColor: "pink-500/20",
  },
  {
    title: "Car Rental System",
    img: "https://via.placeholder.com/400x300",
    description: "Full-stack car rental platform built with Spring Boot and React, emphasizing scalability and clean architecture.",
    link: "https://github.com/Prabhat-kumar-Ahirwar/Car-Rental-Management.git",
    hoverColor: "blue-500/20",
  },
  {
    title: "Career Counselling Platform",
    img: "https://via.placeholder.com/400x300",
    description: "A guidance system using ER diagrams and structured workflow design for student career support.",
    link: "https://github.com/Prabhat-kumar-Ahirwar",
    hoverColor: "purple-500/20",
  },
  {
    title: "Food Waste Management",
    img: FoodWasteImg,
    description: "Platform to track, reduce, and manage food waste in institutions, with analytics and donation coordination.",
    link: "https://www.figma.com/design/jpc0nYvnh4jlKOJoXluXpc/Untitled?node-id=0-1&t=QOSE9E742qQuf0CS-1",
    hoverColor: "red-500/20",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mt-20 scroll-mt-24 mb-10 px-4 sm:px-6 md:px-8">
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <span className="text-blue-400 text-xl">📂</span>
        <h3 className="text-xl sm:text-2xl font-bold text-white">Featured Projects</h3>
      </div>
      <p className="text-gray-400 text-sm sm:text-base mb-8 max-w-3xl">
        A glimpse into my development journey.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, idx) => (
          <div
            key={idx}
            className={`group bg-[#212123] border border-[#383838] rounded-2xl overflow-hidden flex flex-col hover:border-${project.hoverColor} transition-all duration-300`}
          >
            {/* Image */}
            <div className="relative w-full aspect-[16/9]">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
              />
              <div
                className={`absolute inset-0 bg-${project.hoverColor} opacity-10 group-hover:opacity-0 transition rounded-t-2xl`}
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{project.title}</h4>
              <p className="text-sm sm:text-base text-gray-400 flex-1">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 self-start px-4 py-2 bg-gray-900 text-blue-400 rounded-full text-xs sm:text-sm font-semibold shadow hover:bg-blue-600 hover:text-white transition-all"
              >
                &lt;/&gt; Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
