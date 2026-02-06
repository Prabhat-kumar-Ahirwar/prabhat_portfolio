// src/components/About.jsx
import React from "react";

const About = () => {
  const techStack = [
    "Java",
    "Spring Boot",
    "REST APIs",
    "JWT",
    "SQL",
    "MySQL",
    "Git",
    "Maven",
  ];

  const quickStats = [
    { value: "4+", label: "Projects" },
    { value: "5+", label: "Certifications" },
  ];

  const featuredProjects = [
    {
      title: "Portfolio Website",
      img: "/src/assets/portfolio-preview.png",
      url: "prabhat.dev",
      description:
        "Personal portfolio showcasing experience, skills, and achievements.",
    },
    {
      title: "Study Hub",
      img: "/src/assets/studyhub.png",
      url: "terminal.prabhat.dev",
      description:
        "A collaborative Study Hub platform designed for students to share, access, and organize study materials interactively.",
    },
  ];

  return (
    <>
      {/* ABOUT SECTION */}
      <section id="about" className="scroll-mt-24 mb-20 px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center md:text-left">
          About Me
        </h2>
        <div className="w-16 h-1 bg-blue-400 rounded-full mb-6 mx-auto md:mx-0"></div>

        <div className="text-gray-400 leading-relaxed space-y-5 text-sm sm:text-base max-w-3xl mx-auto md:mx-0">
          <p>
            I'm{" "}
            <span
              onClick={() => window.open("/src/assets/profile.JPG", "_blank")}
              className="text-white font-semibold cursor-pointer hover:text-blue-400 transition-colors duration-300"
            >
              Prabhat Kumar Ahirwar
            </span>
            , a B.Tech Computer Science student focused on Java backend development and scalable system design.
          </p>

          <p>
            I build backend applications using{" "}
            <span className="text-white font-semibold">
              Java, Spring Boot, REST APIs, JWT, and SQL
            </span>
            , emphasizing clean architecture and secure API development.
          </p>

          <p>
            Motivated to contribute to impactful backend solutions in a professional engineering environment.
          </p>
        </div>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 text-xs rounded-full bg-[#212123] border border-[#383838] text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* QUICK STATS */}
        <h3 className="text-xl font-bold text-white mt-14 mb-6 flex items-center gap-2 justify-center md:justify-start">
          <span className="text-blue-400">★</span> Quick Stats
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto md:mx-0">
          {quickStats.map((item) => (
            <div
              key={item.label}
              className="bg-[#212123] p-5 rounded-2xl border border-[#383838] hover:border-blue-500/40 transition text-center"
            >
              <h4 className="text-3xl font-bold text-white mb-1">{item.value}</h4>
              <p className="text-xs text-gray-500 uppercase">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PORTFOLIOS */}
      <section
        id="featured-portfolios"
        className="mb-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto"
      >
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-sm">
            A glimpse into my professional journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="bg-[#1e1e1f] rounded-2xl border border-[#2a2a2c] shadow-lg overflow-hidden transition-all duration-300 hover:shadow-blue-500/30 hover:border-blue-400/60 group"
            >
              <div className="w-full aspect-video bg-[#18181a] overflow-hidden">
                <img
                  src={project.img}
                  alt={`${project.title} Preview`}
                  className="w-full h-full object-cover transition group-hover:brightness-110"
                  style={{ objectPosition: "top" }}
                />
              </div>
              <div className="p-6">
                <div className="text-xs text-gray-500 mb-1">{project.url}</div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
