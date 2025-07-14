import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-10 md:px-24 "
    >
      <div className="py-8 space-y-8">
        {/* About Section */}
        <h1 className="text-4xl font-bold text-red-700 md:text-start text-center">
          About Me
        </h1>

        <div className="md:flex block justify-between items-center">
          {/* Education & Training */}
          <div className="md:w-[600px] md:h-[400px] flex flex-col justify-start  items-start border-[2px] rounded-lg shadow-lg py-7 px-6 mt-6 hover:shadow-red-200 duration-300 cursor-pointer">
            <h2 className="text-2xl font-semibold mb-4">
              Education & Training
            </h2>

            <div className="mb-4 border-red-700 border-l-4 px-2">
              <h3 className="font-semibold">
                B.Tech in Computer Science & Engineering
              </h3>
              <p className="text-gray-800">
                Lucknow Institute of Technology, Lucknow (2021 – 2025)
              </p>
              <p className="text-gray-800">CGPA: 7.7 / 10</p>
            </div>

            <div className="mb-4 border-red-700 border-l-4 px-2">
              <h3 className="font-semibold">
                Senior Secondary (Class 12), PCM
              </h3>
              <p className="text-gray-800">
                Manavta Model Public Inter College, Lucknow (2020)
              </p>
              <p className="text-gray-800">Percentage: 77%</p>
            </div>

            <div className="border-red-700 border-l-4 px-2">
              <h3 className="font-semibold">Secondary (Class 10), Science</h3>
              <p className="text-gray-800">
                Manavta Model Public Inter College, Lucknow (2018)
              </p>
              <p className="text-gray-800">Percentage: 83%</p>
            </div>
          </div>

          {/* Skills & Expertise */}
          <div className="md:w-[600px] md:h-[400px] flex flex-col justify-center items-start border-[2px] rounded-lg shadow-lg py-4 px-6 mt-6 hover:shadow-red-200 duration-300 cursor-pointer">
            <h2 className="text-2xl font-semibold mb-4">Skills & Expertise</h2>

            <div className="mb-4 border-red-700 border-l-4 px-2">
              <h3 className="font-semibold">Programming Languages</h3>
              <p className="text-gray-800">JavaScript (ES6+), Python, C, C++</p>
            </div>

            <div className="mb-4 border-red-700 border-l-4 px-2">
              <h3 className="font-semibold">Web Technologies</h3>
              <p className="text-gray-800">
                <span className="font-semibold text-black">Frontend:</span>{" "}
                HTML, CSS, Tailwind CSS, React.js
              </p>
              <p className="text-gray-800">
                <span className="font-semibold text-black">Backend:</span>{" "}
                Node.js, Express.js, MongoDB, RESTful APIs
              </p>
            </div>

            <div className="mb-4 border-red-700 border-l-4 px-2">
              <h3 className="font-semibold">Tools & Workflow</h3>
              <p className="text-gray-800">
                Git & GitHub, Postman, VS Code, AI Tools (e.g., Bolt, Lovable)
              </p>
            </div>

            <div className="border-red-700 border-l-4 px-2">
              <h3 className="font-semibold">Soft Skills</h3>
              <p className="text-gray-800">
                Problem-Solving, Adaptability, Team Collaboration, Clear
                Communication
              </p>
            </div>
          </div>
          
        </div>

        {/* Achievements & Certifications */}
        <div className="md:w-full md:h-[200px] flex flex-col  justify-center items-center border-[2px] rounded-lg  shadow-lg py-4 px-6 mt-4 hover:shadow-red-200 duration-300 space-y-1">
          <h2 className="text-2xl font-semibold md:text-start text-center">
            Achievements & Certifications
          </h2>

          <div className="w-full flex md:flex-row flex-col justify-around text-center pt-7">

            <div className="flex flex-col mb-3">
              <h3 className="font-semibold text-lg">ReactJS</h3>
              <p>Certified by Infosys Springboard </p>
              <a
                className="underline text-blue-500 ml-2"
                href="https://drive.google.com/file/d/1qUKcUUo_nQg6nuIsGKIAP5hK6D4RRLop/view?usp=sharing"
              >
                Certification Link
              </a>
            </div>
            <div className="flex flex-col mb-3">
              <h3 className="font-semibold text-lg">JavaScript</h3>
              <p>Certified by Scaler</p>
              <a
                className="underline text-blue-500"
                href="https://drive.google.com/file/d/1DfiJhGkFIHKS6VIhvRfSk1umwf6nbG4C/view?usp=drive_link"
              >
                Certification Link
              </a>
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg">Introduction of Google Cloud</h3>
              <p>By Google Cloud|</p>
              <a
                className="underline text-blue-500"
                href="https://www.credly.com/badges/36b7ecf0-9990-411f-b29e-065ce54ba066"
              >
                Certification Link
              </a>
            </div>

          </div>
        </div>

        {/* Mission Statement */}
        <div>
          <h2 className="text-2xl font-semibold">Mission Statement</h2>
          <p className="text-gray-800 leading-relaxed">
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
