import React from "react";

const Resume = () => {
  const education = [
    {
      title: "Bachelor of Technology",
      school: "Acropolis Institute of Technology & Research, Indore",
      period: "2023 – Present",
      details: "Computer Science and Engineering (7.61 CGPA)",
    },
    {
      title: "Higher Secondary Certificate (Class XII)",
      school: "Little Star Shailesh Memorial School, Sagar",
      period: "2022 – 2023",
      details: "CBSE BOARD (81%)",
    },
    {
      title: "Secondary School Certificate (Class X)",
      school: "Little Star Shailesh Memorial School, Sagar",
      period: "2020 – 2021",
      details: "CBSE BOARD (84%)",
    },
  ];

  return (
    <section className="mb-24 px-4 sm:px-6 md:px-8">
      {/* Header */}
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Career Snapshot
        </h2>
        <div className="w-16 h-1 bg-blue-400 rounded-full mx-auto md:mx-0 mb-6"></div>

        {/* Resume Button */}
        <a
          href="https://github.com/Prabhat-kumar-Ahirwar/MyResume/blob/main/Prabhat%20Resume%20Intern.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 text-sm sm:text-base font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
        >
          View Resume
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-8">
            Education
          </h3>

          <div className="relative border-l border-[#2f2f32] pl-6 sm:pl-8 space-y-10">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                {/* Dot */}
                <span className="absolute -left-3 sm:-left-4 top-2 w-3 h-3 bg-blue-400 rounded-full"></span>

                {/* Content */}
                <h4 className="text-white font-semibold text-sm sm:text-base">
                  {edu.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-400">{edu.school}</p>
                <p className="text-xs sm:text-sm text-gray-500">{edu.period}</p>
                <p className="text-sm sm:text-base text-gray-400 mt-2 sm:mt-3 leading-relaxed">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* You can add Experience or Skills column here */}
      </div>
    </section>
  );
};

export default Resume;
