import { easeInOut, motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      name="About"
      className="max-w-screen-2xl container mx-auto px-10 md:px-24 "
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="py-8 space-y-8">
        {/* About Section */}
        <motion.h1
          className="text-4xl font-bold text-red-700 md:text-start text-center"
          variants={itemVariants}
        >
          About Me
        </motion.h1>

        <motion.div
          className="flex flex-col items-center md:flex-row md:justify-between md:items-center"
          variants={itemVariants}
        >
          {/* Education & Training */}
          <motion.div
            className="md:w-[600px] md:h-[400px] flex flex-col justify-start items-start border-[2px] rounded-lg shadow-lg py-7 px-6 mt-6 hover:shadow-red-200 duration-300 cursor-pointer"
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
            }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-4">
              Education & Training
            </h2>

            <motion.div
              className="mb-4 border-red-700 border-l-4 px-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold">
                B.Tech in Computer Science & Engineering
              </h3>
              <p className="text-gray-800">
                Lucknow Institute of Technology, Lucknow (2021 – 2025)
              </p>
              <p className="text-gray-800">CGPA: 7.7 / 10</p>
            </motion.div>

            <motion.div
              className="mb-4 border-red-700 border-l-4 px-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold">
                Senior Secondary (Class 12), PCM
              </h3>
              <p className="text-gray-800">
                Manavta Model Public Inter College, Lucknow (2020)
              </p>
              <p className="text-gray-800">Percentage: 77%</p>
            </motion.div>

            <motion.div
              className="border-red-700 border-l-4 px-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold">Secondary (Class 10), Science</h3>
              <p className="text-gray-800">
                Manavta Model Public Inter College, Lucknow (2018)
              </p>
              <p className="text-gray-800">Percentage: 83%</p>
            </motion.div>
          </motion.div>

          {/* Skills & Expertise */}
          <motion.div
            className="md:w-[600px] md:h-[400px] flex flex-col justify-center items-start border-[2px] rounded-lg shadow-lg py-4 px-6 mt-6 hover:shadow-red-200 duration-300 cursor-pointer"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.7,
                  ease: "easeOut",
                },
              },
            }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(239, 68, 68, 0.2)",
            }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-4">Skills & Expertise</h2>

            <motion.div
              className="mb-4 border-red-700 border-l-4 px-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold">Programming Languages</h3>
              <p className="text-gray-800">JavaScript (ES6+), Python, C, C++</p>
            </motion.div>

            <motion.div
              className="mb-4 border-red-700 border-l-4 px-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold">Web Technologies</h3>
              <p className="text-gray-800">
                <span className="font-semibold text-black">Frontend:</span>{" "}
                HTML, CSS, Tailwind CSS, React.js
              </p>
              <p className="text-gray-800">
                <span className="font-semibold text-black">Backend:</span>{" "}
                Node.js, Express.js, MongoDB, RESTful APIs
              </p>
            </motion.div>

            <motion.div
              className="mb-4 border-red-700 border-l-4 px-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold">Tools & Workflow</h3>
              <p className="text-gray-800">
                Git & GitHub, Postman, VS Code, AI Tools (e.g., Bolt, Lovable)
              </p>
            </motion.div>

            <motion.div
              className="border-red-700 border-l-4 px-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold">Soft Skills</h3>
              <p className="text-gray-800">
                Problem-Solving, Adaptability, Team Collaboration, Clear
                Communication
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Achievements & Certifications */}
        <motion.div
          className="md:w-full md:h-[200px] flex flex-col justify-center items-center border-[2px] rounded-lg shadow-lg py-4 px-6 mt-4 hover:shadow-red-200 duration-300 space-y-1"
          variants={itemVariants}
          whileHover={{
            scale: 1.01,
            boxShadow: "0 10px 30px rgba(239, 68, 68, 0.2)",
          }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold md:text-start text-center">
            Achievements & Certifications
          </h2>

          <motion.div
            className="w-full flex md:flex-row flex-col justify-around text-center pt-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex flex-col mb-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg">ReactJS</h3>
              <p>Certified by Infosys Springboard </p>
              <a
                className="underline text-blue-500 ml-2"
                href="https://drive.google.com/file/d/1qUKcUUo_nQg6nuIsGKIAP5hK6D4RRLop/view?usp=sharing"
              >
                Certification Link
              </a>
            </motion.div>
            <motion.div
              className="flex flex-col mb-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg">JavaScript</h3>
              <p>Certified by Scaler</p>
              <a
                className="underline text-blue-500"
                href="https://drive.google.com/file/d/1DfiJhGkFIHKS6VIhvRfSk1umwf6nbG4C/view?usp=drive_link"
              >
                Certification Link
              </a>
            </motion.div>
            <motion.div
              className="flex flex-col"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg">
                Introduction of Google Cloud
              </h3>
              <p>By Google Cloud|</p>
              <a
                className="underline text-blue-500"
                href="https://www.credly.com/badges/36b7ecf0-9990-411f-b29e-065ce54ba066"
              >
                Certification Link
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div variants={itemVariants}>
          <motion.h2
            className="text-2xl font-semibold"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Mission Statement
          </motion.h2>
          <motion.p
            className="text-gray-800 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            My mission is to leverage my expertise in software development to
            create impactful, user-friendly, and innovative digital solutions. I
            am committed to continuous learning and growth, always seeking new
            challenges that push me to expand my skills. With a strong passion
            for technology, I aim to contribute positively to the evolving
            digital world.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
