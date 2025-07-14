import React from "react";
import { assets, MyTechStack } from "../assets/assets.js";

const TechStack = () => {
  return (
    <div
      name="Tech Stack"
      className="max-w-screen-2xl container mx-auto px-10 md:px-20 my-10 py-4"
    >
      <div>
        <h1 className="text-4xl font-bold mb-2 text-red-700">Tech Stack</h1>
        <p className="text-lg">
          I have worked with mentioned tools and technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 my-4">
          {MyTechStack.map(({ id, logo, name }) => (
            <div
              key={id}
              className="md:w-[125px] md:h-[125px] flex flex-col justify-center items-center border-[2px] cursor-pointer rounded-lg p-1 shadow-lg hover:scale-105 duration-300"
            >
              <img src={logo} alt="logo" className="w-[80px]  " />
              <span className="text-center text-sm">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
