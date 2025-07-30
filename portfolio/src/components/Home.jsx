import React from "react";
import { BiLogoMongodb, SiExpress, FaReact, FaNodeJs } from "./Icons";
import { assets } from "../assets/assets.js";
import { ReactTyped } from "react-typed";
import SocialHandles from "./SocialHandles";

const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-8 md:px-20 md:py-32 py-10 mt-8 md:mt-0"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-[65%] mt-10 md:mt-6 space-y-2 order-2 md:order-1 md:mr-20 px-4">
            <span className="text-2xl">Welcome In My Feed</span>
            <div className="flex space-x-2 text-2xl md:text-4xl">
              <h1 className="md:text-4xl text-2xl">Hello, I'm a </h1>
              <ReactTyped
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                className="text-red-700 font-bold"
                loop
              />
            </div>
            <br />

            <p className="text-base md:text-lg text-justify leading-relaxed text-gray-800">
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
            </p>

            <br />

            <div className="flex justify-center md:justify-start items-center">
              <a
                className=""
                href="https://drive.google.com/file/d/1Kf6w_SCfmgwmRgXWVlN5C4lps-ey9CBX/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition">
                  View Resume
                </button>
              </a>
            </div>

            <br />
            {/* social media icons  */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4">
              <div className="space-y-2 flex flex-col items-center justify-center">
                <h2 className="text-xl font-semibold">Available on</h2>
                <SocialHandles />
              </div>

              <div className="space-y-2 flex flex-col items-center justify-center">
                <h2 className="text-xl font-semibold">Tech Stack</h2>
                <div className="flex space-x-4">
                  <BiLogoMongodb className="size-8 cursor-pointer rounded-full border-[2px] hover:scale-110 shadow-xl hover:shadow-red-300 duration-200" />
                  <SiExpress className="size-8 cursor-pointer rounded-full border-[2px] hover:scale-110 shadow-xl hover:shadow-red-300 duration-200" />
                  <FaReact className="size-8 cursor-pointer rounded-full border-[2px] hover:scale-110 shadow-xl hover:shadow-red-300 duration-200" />
                  <FaNodeJs className="size-8 cursor-pointer rounded-full border-[2px] hover:scale-110 shadow-xl hover:shadow-red-300 duration-200" />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="md:w-[35%] order-1 flex flex-col items-center justify-center">
            <img
              src={assets.profile_pic1}
              alt="pic"
              className="rounded-full mt-4 md:w-full shadow-2xl transition-all duration-500 hover:shadow-red-300"
            />
          </div> */}

          <div className="md:w-[35%] order-1 flex flex-col items-center justify-center">
            <div className="relative group  w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full animate-breath-glow">
              {/* Glowing border circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-600 via-transparent to-red-300 opacity-60 blur-lg group-hover:scale-105 transition-all duration-600"></div>

              {/* Profile image */}
              <img
                src={assets.profile_pic1}
                alt="pic"
                className="rounded-full w-full h-full object-cover relative z-1 shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="m" />
    </>
  );
};

export default Home;
