import React from "react";
import { BiLogoMongodb, SiExpress, FaReact, FaNodeJs } from "./Icons";
import {assets} from "../assets/assets.js"
import { ReactTyped } from "react-typed";
import SocialHandles from "./SocialHandles";

const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-8 md:px-20 py-32"
      >
        <div className="flex flex-col md:flex-row ">
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
            As a MERN Stack Developer, I'm proficient in building user-friendly, scalable, and responsive websites. My focus is to develop solutions that are scalable, effective, and have a seamless user experience. I'm willing to learn, develop, and contribute to worthwhile projects as a team player. Let's connect and create something amazing.
            </p>

            <br />
            {/* social media icons  */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6">
              <div className="space-y-1 flex flex-col items-center justify-center">
                <h2 className="text-xl font-semibold">Available on</h2>
                <SocialHandles />
              </div>

              <div className="space-y-1 flex flex-col items-center justify-center">
                <h2 className="text-xl font-semibold">Tech Stack</h2>
                <div className="flex space-x-4">
                  <BiLogoMongodb className="size-8 cursor-pointer rounded-full border-[2px] hover:scale-110 duration-200" />
                  <SiExpress className="size-8 cursor-pointer rounded-full border-[2px] hover:scale-110 duration-200" />
                  <FaReact className="size-8 cursor-pointer rounded-full border-[2px] hover:scale-110 duration-200" />
                  <FaNodeJs className="size-8 cursor-pointer rounded-full border-[2px] hover:scale-110 duration-200" />
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-[35%] order-1 flex flex-col items-center justify-center">
            <img
              src={assets.profile_pic1}
              alt="pic"
              className="rounded-full mt-4 md:ml- md:w-full"
            />
          </div>
        </div>
      </div>
      <hr className="m" />
    </>
  );
};

export default Home;
