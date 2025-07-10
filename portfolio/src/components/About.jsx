import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-10 md:px-24 "
    >
      <div className="py-8 space-y-8">
        {/* About Section */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
        </div>

        {/* Education & Training */}
        <div>
          <h2 className="text-2xl font-semibold text-green-600">
            Education & Training
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>
              <strong>B.Tech - CSE | CGPA - 7.7</strong> –
              Lucknow Institute of Technology, 2025
            </li>
            <li>
              <strong>Intermediate (PCM) - 77%</strong> – Manavta Model Public Inter
              College, 2020
            </li>
            <li>
              <strong>High School (Science) - 83%</strong> – Manavta Model Public Inter
              College, 2020
            </li>
           
          </ul>
        </div>

        {/* Skills & Expertise */}
        <div>
          <h2 className="text-2xl font-semibold text-green-600">
            Skills & Expertise
          </h2>
          
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>
              <strong>Programming & Frameworks:</strong> JavaScript, React.js,
              Node.js, API Integration, Python
            </li>
            <li>
              <strong>Web Technologies:</strong> HTML, CSS, Tailwind CSS
            </li>
            <li>
              <strong>Version Control:</strong> Git & GitHub
            </li>
            <li>
              <strong>Soft Skills:</strong> Problem-Solving, Effective
              Communication, Team Work
            </li>
            
          </ul>
        </div>

        {/* Achievements & Certifications */}
        <div>
          <h2 className="text-2xl font-semibold text-green-600">
            Achievements & Certifications
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>
              <strong>Comprehensive React.js Course</strong> – Infosys, 2024
            </li>
            <li>
              <strong>Introduction to LLMs & Generative AI</strong> – Google
              Cloud, 2024
            </li>
             <li>
              <strong>Python Programming Training</strong> – Lucknow Institute
              of Technology 2023
            </li>
            <li>
              <strong>Web Development Certification</strong> – Udemy
            </li>
          </ul>
        </div>

        {/* Mission Statement */}
        <div>
          <h2 className="text-2xl font-semibold text-green-600">
            Mission Statement
          </h2>
          <p className="text-gray-700 leading-relaxed">
            My mission is to leverage my expertise in software development to
            create impactful, user-friendly, and innovative digital solutions. I
            am committed to continuous learning and growth, always seeking new
            challenges that push me to expand my skills. With a strong passion
            for technology, I aim to contribute positively to the evolving
            digital world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
