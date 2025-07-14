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
          <h1 className="text-4xl font-bold text-red-700">About Me</h1>
        </div>

        {/* Education & Training */}
        <div>
          <h2 className="text-2xl font-semibold">
            Education & Training
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>
              <strong>B.Tech - CSE | CGPA - 7.7</strong> – Lucknow Institute of
              Technology, 2025
            </li>
            <li>
              <strong>Intermediate (PCM) - 77%</strong> – Manavta Model Public
              Inter College, 2020
            </li>
            <li>
              <strong>High School (Science) - 83%</strong> – Manavta Model
              Public Inter College, 2020
            </li>
          </ul>
        </div>

        {/* Skills & Expertise */}
        <div>
          <h2 className="text-2xl font-semibold">
            Skills & Expertise
          </h2>

          <ul className="list-disc list-inside text-gray-700 leading-loose">
            <li>
              <strong>Programming:</strong> JavaScript (ES6+), Python, C, C++
            </li>
            <li>
              <strong>Web Technologies:</strong>
              <ul className="list-disc list-inside ml-6 text-gray-700 leading-relaxed">
                <li>
                  <strong>Frontend: </strong> HTML, CSS, Tailwind CSS, React.js
                </li>
                <li>
                  <strong>Backend: </strong> Node.js, Express.js, MongoDB,
                  RESTful APIs
                </li>
              </ul>
            </li>
            <li>
              <strong>Tools & Workflow:</strong> Git & GitHub, Postman, VS Code,
              AI Tools (e.g., Bolt, Lovable)
            </li>
            <li>
              <strong>Soft Skills:</strong> Problem-Solving, Adaptability, Team
              Collaboration, Clear Communication
            </li>
          </ul>
        </div>

        {/* Achievements & Certifications */}
        <div>
          <h2 className="text-2xl font-semibold">
            Achievements & Certifications
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>
              <strong>ReactJS</strong> – Certified by Infosys Springboard |{" "}
              <a
                className="underline text-blue-500"
                href="https://drive.google.com/file/d/1qUKcUUo_nQg6nuIsGKIAP5hK6D4RRLop/view?usp=sharing"
              >
                Certification Link
              </a>
            </li>
            <li>
              <strong>Google Cloud Badge</strong> – By Google Cloud |{" "}
              <a
                className="underline text-blue-500"
                href="https://www.credly.com/badges/36b7ecf0-9990-411f-b29e-065ce54ba066"
              >
                Certification Link
              </a>
            </li>
            <li>
              <strong>JavaScript</strong> – Certified by Scaler |{" "}
              <a
                className="underline text-blue-500"
                href="https://drive.google.com/file/d/1DfiJhGkFIHKS6VIhvRfSk1umwf6nbG4C/view?usp=drive_link"
              >
                Certification Link
              </a>
            </li>
            {/* <li>
              <strong>Web Development</strong> – Certification from Udemy | {" "}
              <a
                className=" text-gray-500"
              >Continuing..</a>
            </li> */}
          </ul>
        </div>

        {/* Mission Statement */}
        <div>
          <h2 className="text-2xl font-semibold">
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
