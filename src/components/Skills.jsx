import React from "react";

const sectionClass =
  "bg-[#212123] border border-[#383838] rounded-2xl p-6 mb-8";

const chipClass =
  "px-4 py-2 rounded-full text-sm sm:text-base bg-[#1e1e1f] border border-[#383838] text-gray-300 hover:border-blue-400/50 transition";

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-24 px-4 sm:px-6 md:px-8">
      {/* HEADER */}
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 flex items-center justify-center md:justify-start">
        <span className="text-blue-400 mr-3"></span> Skills & Expertise
      </h2>

      {/* TECHNICAL SKILLS */}
      <div className={sectionClass}>
        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
          Technical Skills
        </h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Java",
            "Spring Boot",
            "Spring Security",
            "RESTful APIs",
            "JWT Authentication",
            "Hibernate (JPA)",
            "MySQL",
          ].map((skill) => (
            <span key={skill} className={chipClass}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* TOOLS & PLATFORMS */}
      <div className={sectionClass}>
        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
          Tools & Platforms
        </h3>
        <div className="flex flex-wrap gap-3">
          {["Postman", "Git & GitHub", "IntelliJ IDEA", "MySQL Workbench"].map(
            (tool) => (
              <span key={tool} className={chipClass}>
                {tool}
              </span>
            )
          )}
        </div>
      </div>

      {/* SOFT SKILLS */}
      <div className={sectionClass}>
        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Soft Skills</h3>
        <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm sm:text-base">
          <li>Strong communication and interpersonal skills</li>
          <li>Adaptability and continuous learning mindset</li>
          <li>Team collaboration and ownership</li>
          <li>Analytical and problem-solving approach</li>
        </ul>
      </div>

      {/* CERTIFICATIONS */}
<div className={sectionClass}>
  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
    Certifications & Achievements
  </h3>
  <ul className="flex flex-wrap gap-3">
    {[
      "Database Management Certification",
      "NPTEL Certification (IIT)",
      "Participation in Hackathons",
      "Volunteering Experience",
    ].map((item) => (
      <li key={item} className="mb-2"> {/* add margin-bottom for vertical spacing */}
        <a
          href="https://drive.google.com/drive/folders/1hupHkMuzoRumq94NRziCwmrEuBhsnb3W?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#212123] border border-[#383838] px-4 py-2 rounded-full text-blue-400 hover:text-white hover:bg-blue-500/20 text-sm sm:text-base font-medium transition"
        >
          {item}
        </a>
      </li>
    ))}
  </ul>
</div>


      {/* STRENGTHS */}
      <div className={sectionClass}>
        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Strengths</h3>
        <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm sm:text-base">
          <li>Ability to multitask and prioritize effectively</li>
          <li>Visionary thinking with attention to detail</li>
          <li>Strong logical and analytical skills</li>
        </ul>
      </div>

      {/* AREAS OF IMPROVEMENT */}
      <div className={sectionClass}>
        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
          Areas of Improvement
        </h3>
        <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm sm:text-base">
          <li>Gaining deeper hands-on industry experience</li>
          <li>Improving system design and scalability knowledge</li>
        </ul>
      </div>

      {/* INTERESTS & HOBBIES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Areas of Interest */}
        <div className={sectionClass}>
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
            Areas of Interest
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Backend Development",
              "Database Management",
              "REST API Design & Security",
            ].map((interest) => (
              <span key={interest} className={chipClass}>
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Hobbies */}
        <div className={sectionClass}>
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">Hobbies</h3>
          <p className="text-xs sm:text-sm text-gray-400 mb-4">
            Click on <span className="text-blue-400">Video Editing</span> to view my work
          </p>
          <div className="flex flex-wrap gap-3">
            {["Video Editing", "Visual Storytelling"].map((hobby) =>
              hobby === "Video Editing" ? (
                <a
                  key={hobby}
                  href="https://drive.google.com/drive/folders/1z8-TRNG1RAOZ9yj87A6N3jb4Cucu9rsL?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${chipClass} text-blue-400 hover:text-white hover:bg-blue-500/20 transition`}
                >
                  {hobby}
                </a>
              ) : (
                <span key={hobby} className={chipClass}>
                  {hobby}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
