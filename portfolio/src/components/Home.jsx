import { motion } from "framer-motion";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { assets } from "../assets/assets.js";
import { ReactTyped } from "react-typed";
import SocialHandles from "./SocialHandles";

const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const techStackVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const techIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "backOut" },
    },
  };

  return (
    <>
      <motion.div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-8 md:px-20 md:py-32 py-10 mt-8 md:mt-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col md:flex-row">
          <motion.div
            className="md:w-[65%] mt-10 md:mt-6 space-y-2 order-2 md:order-1 md:mr-20 px-4"
            variants={itemVariants}
          >
            <motion.span className="text-2xl" variants={itemVariants}>
              Welcome In My Feed
            </motion.span>

            <motion.div
              className="flex space-x-2 text-2xl md:text-4xl"
              variants={itemVariants}
            >
              <h1 className="md:text-4xl text-2xl">Hello, I'm a </h1>
              <ReactTyped
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                className="text-red-700 font-bold"
                loop
              />
            </motion.div>
            <br />

            <motion.p
              className="text-base md:text-lg text-justify leading-relaxed text-gray-800"
              variants={itemVariants}
            >
              Hello, I'm{" "}
              <span className="text-red-700 font-semibold">
                Shubham Vishwakarma
              </span>
              <br />
              As a MERN Stack Developer, I'm proficient in building
              user-friendly, scalable, and responsive websites. My focus is to
              develop solutions that are scalable, effective, and have a
              seamless user experience. I'm willing to learn, develop, and
              contribute to worthwhile projects as a team player. Let's connect
              and create something amazing.
            </motion.p>

            <br />

            <motion.div
              className="flex justify-center md:justify-start items-center"
              variants={itemVariants}
            >
              <a
                className=""
                href="https://drive.google.com/file/d/1Kf6w_SCfmgwmRgXWVlN5C4lps-ey9CBX/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Resume
                </motion.button>
              </a>
            </motion.div>

            <br />
            {/* social media icons  */}
            <motion.div
              className="flex flex-col md:flex-row justify-between items-center space-y-4"
              variants={itemVariants}
            >
              <motion.div
                className="space-y-2 flex flex-col items-center justify-center"
                variants={itemVariants}
              >
                <h2 className="text-xl font-semibold">Available on</h2>
                <SocialHandles />
              </motion.div>

              <motion.div
                className="space-y-2 flex flex-col items-center justify-center"
                variants={itemVariants}
              >
                <h2 className="text-xl font-semibold">Tech Stack</h2>
                <motion.div
                  className="flex space-x-4"
                  variants={techStackVariants}
                >
                  <motion.div variants={techIconVariants}>
                    <BiLogoMongodb className="size-7 text-gray-600 hover:text-green-700 transition-all  hover:scale-110 duration-200" />
                  </motion.div>
                  <motion.div variants={techIconVariants}>
                    <SiExpress className="size-7 text-gray-600 hover:text-black transition-all  hover:scale-110 duration-200" />
                  </motion.div>
                  <motion.div variants={techIconVariants}>
                    <FaReact className="size-7 text-gray-600 hover:text-blue-500 transition-all hover:scale-110 duration-200" />
                  </motion.div>
                  <motion.div variants={techIconVariants}>
                    <FaNodeJs className="size-7 text-gray-600 hover:text-yellow-500 transition-all hover:scale-110 duration-200" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-[35%] order-1 flex flex-col items-center justify-center"
            variants={imageVariants}
          >
            <motion.div
              className="relative group w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full animate-breath-glow"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glowing border circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-600 via-transparent to-red-300 opacity-40 blur-lg group-hover:scale-105 transition-all duration-600"></div>

              {/* Profile image */}
              <img
                src={assets.profile_pic1}
                alt="pic"
                className="rounded-full w-[90%] h-[90%] object-cover relative z-1 shadow-md"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <hr className="m" />
    </>
  );
};

export default Home;
